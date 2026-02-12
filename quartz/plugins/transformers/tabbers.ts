import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { fromMarkdown } from "mdast-util-from-markdown"

export const Tabbers: QuartzTransformerPlugin = () => {
  return {
    name: "Tabbers",
    markdownPlugins() {
      return [
        () => (tree: Root) => {
          let globalTabberIndex = 0 

          visit(tree, "code", (node, index, parent) => {
            if (node.lang === "tabs" && parent && typeof index === "number") {
              globalTabberIndex++
              const currentId = globalTabberIndex
              const meta = node.meta ?? ""
              
              let settings: Record<string, any> = { 
                animated: true, 
                alignment: "top", 
                indexed: true,
                numbered: false 
              }

              const argsMatch = meta.meta ? meta.match(/\{(.*)\}/) : null
              const rawMeta = node.meta || ""
              const jsonMatch = rawMeta.match(/\{(.*)\}/)
              if (jsonMatch) {
                try {
                  const raw = jsonMatch[1]
                  const jsonString = `{${raw}}`
                    .replace(/(\w+):/g, '"$1":')
                    .replace(/:[ ]*([^,"'{} ]+)/g, (match, p1) => { 
                       if (["true", "false", "null"].includes(p1) || !isNaN(Number(p1))) return `: ${p1}`
                       return `: "${p1.replace(/['"]/g, '')}"`
                    })
                  settings = { ...settings, ...JSON.parse(jsonString) }
                } catch (e) { console.warn(`Tabber JSON Error: ${e}`) }
              }

              const sections = node.value.split(/^--- /m).filter(s => s.trim().length > 0)
              let defaultIndex = 0
              
              const tabData = sections.map((section, i) => {
                const firstNewLine = section.indexOf("\n")
                let title = firstNewLine !== -1 ? section.slice(0, firstNewLine).trim() : section.trim()
                const markdown = firstNewLine !== -1 ? section.slice(firstNewLine).trim() : ""
                
                title = title.replace(/^\d+[\s\)\.\-]+/, "").trim()
                if (title.toLowerCase().includes("(default)")) {
                  defaultIndex = i
                  title = title.replace(/\(default\)/i, "").trim()
                }

                const contentTree = fromMarkdown(markdown)
                const visibleNodes = contentTree.children.filter(n => n.type !== 'definition')
                const isImageOnly = visibleNodes.length === 1 && (
                  visibleNodes[0].type === 'image' || 
                  (visibleNodes[0].type === 'paragraph' && 
                   visibleNodes[0].children.length === 1 && 
                   visibleNodes[0].children[0].type === 'image')
                )

                return { title, markdown, isImageOnly, contentTree, id: `tab-${currentId}-${i}` }
              })

              const dataAttrs = Object.entries(settings).map(([k, v]) => `data-${k}="${v}"`).join(" ")
              const headerHtml = `<div class="tab-overflow-content tab-header">` + 
                tabData.map((tab, i) => {
                  const isChecked = i === defaultIndex ? 'checked' : ''
                  return `<input type="radio" id="${tab.id}" name="tabs-${currentId}" ${isChecked}><label for="${tab.id}">${tab.title}</label>`
                }).join("") + `</div>`

              const resultNodes: any[] = [{ type: "html", value: `<div class="tab-container tab-overflow-wrapper" ${dataAttrs}><div class="tab-overflow-nav"><button class="tab-nav-button tab-nav-button-left" type="button"></button><button class="tab-nav-button tab-nav-button-right" type="button"></button></div>` }]
              const contentNodes: any[] = [{ type: "html", value: `<div class="tab-content-wrapper">` }]
              
              tabData.forEach(tab => {
                const paneClass = tab.isImageOnly ? "tab-pane image-only" : "tab-pane"
                contentNodes.push({ type: "html", value: `<div class="${paneClass}" data-for="${tab.id}" data-animated="${settings.animated}">` })
                
                if (settings.indexed === false) {
                  visit(tab.contentTree, "heading", (h: any) => {
                    h.type = "paragraph"; h.data = { hProperties: { className: ["tab-fake-header"] } }
                    h.children = [{ type: "strong", children: [...h.children] }]
                  })
                } else {
                  visit(tab.contentTree, "heading", (h) => { if (h.depth <= 3) h.depth = 4 })
                }

                contentNodes.push(...tab.contentTree.children)
                if (settings.indexed !== false) {
                  contentNodes.push({
                    type: "heading", depth: 3,
                    data: { hProperties: { className: ["tab-toc-anchor"] } },
                    children: [{ type: "text", value: tab.title }]
                  })
                }
                contentNodes.push({ type: "html", value: `</div>` })
              })
              
              contentNodes.push({ type: "html", value: `</div>` })
              if (settings.alignment === "bottom") {
                resultNodes.push(...contentNodes, { type: "html", value: headerHtml })
              } else {
                resultNodes.push({ type: "html", value: headerHtml }, ...contentNodes)
              }
              resultNodes.push({ type: "html", value: `</div>` })
              parent.children.splice(index, 1, ...resultNodes)
            }
          })
        },
      ]
    },
  }
}