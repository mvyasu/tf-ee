import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

const TITLE = "Eyed Message 👀";

export const CalloutTemplates: QuartzTransformerPlugin = () => {
  return {
    name: "CalloutTemplates",
    markdownPlugins() {
      return [
        () => (tree) => {
          visit(tree, (node) => {
            // PASS 1: Standard Paragraphs
            if (node.type === "paragraph") {
              const children = node.children
              if (!children || children.length === 0) return
              const textNode = children[0]

              if (textNode?.type === "text" && textNode.value.includes("[!eyed]")) {
                if (children.length > 2 || textNode.value.trim() !== "[!eyed]") return

                const secondChild = children[1]
                let url = ""
                if (secondChild?.type === "link") {
                  url = secondChild.url
                }

                textNode.value = "[!eyed] "
                const titleHtml = url 
                  ? `<a class="eyed-link" href="${url}" target="_blank">${TITLE}</a>`
                  : `<span>${TITLE}</span>`

                node.children = [
                  textNode,
                  { type: "html", value: titleHtml }
                ]
              }
            }

            // PASS 2: Code Blocks (Tabbers)
            if (node.type === "code") {
              // Use /gm to find EVERY instance in the block
              // We use [^\n]* to capture everything on the title line after the tag
              const regex = /^> \[!eyed\]\s*(https?:\/\/[^\s\n]+)?/gm
              
              node.value = node.value.replace(regex, (match, url) => {
                // This function runs for EVERY match found in the code block
                console.log(`🎯 [CalloutTemplates] Found nested match: ${match}`)
                
                if (url) {
                  return `> [!eyed] [Eyed Message 👀](${url.trim()})`
                }
                return `> [!eyed] | Eyed Message 👀`
              })
            }
          })
        },
      ]
    },
  }
}