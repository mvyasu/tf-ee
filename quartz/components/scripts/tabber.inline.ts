const scrollLabelIntoView = (container: HTMLElement, smooth: boolean = true) => {
  const checkedInput = container.querySelector('input:checked') as HTMLInputElement
  const header = container.querySelector('.tab-overflow-content') as HTMLElement
  
  if (checkedInput && header) {
    const label = container.querySelector(`label[for="${checkedInput.id}"]`) as HTMLElement
    if (label) {
      // Logic check: only scroll if the element actually has width
      if (label.offsetWidth === 0) return 

      const labelOffset = label.offsetLeft
      const labelWidth = label.offsetWidth
      const headerWidth = header.clientWidth
      const scrollTo = labelOffset - (headerWidth / 2) + (labelWidth / 2)

      header.scrollTo({
        left: scrollTo,
        behavior: smooth ? "smooth" : "auto"
      })
    }
  }
}

const syncToCHighlight = (slug: string) => {
  const toc = document.querySelector('.toc')
  if (!toc) return
  const tabAnchors = document.querySelectorAll('.tab-toc-anchor')
  tabAnchors.forEach(anchor => {
    const links = toc.querySelectorAll(`a[data-for="${anchor.id}"]`)
    links.forEach(l => l.classList.remove('in-view'))
  })
  const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
  tocEntryElements.forEach((el) => {
    el.classList.add("in-view")
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  })
}

const setupTabbers = (isInitial: boolean = false) => {
  const containers = document.querySelectorAll('.tab-overflow-wrapper')
  containers.forEach(container => {
    const header = container.querySelector('.tab-overflow-content') as HTMLElement
    const leftBtn = container.querySelector('.tab-nav-button-left') as HTMLElement
    const rightBtn = container.querySelector('.tab-nav-button-right') as HTMLElement
    if (!header || !leftBtn || !rightBtn) return

    const updateArrows = () => {
      const showLeft = header.scrollLeft > 5
      const showRight = header.scrollLeft + header.clientWidth < header.scrollWidth - 5
      container.setAttribute('data-overflow-left', showLeft.toString())
      container.setAttribute('data-overflow-right', showRight.toString())
    }

    leftBtn.onclick = (e) => { e.preventDefault(); header.scrollBy({ left: -200, behavior: 'smooth' }) }
    rightBtn.onclick = (e) => { e.preventDefault(); header.scrollBy({ left: 200, behavior: 'smooth' }) }

    header.addEventListener('scroll', updateArrows)
    scrollLabelIntoView(container as HTMLElement, !isInitial)
    updateArrows()
  })
}

function syncTabs(hashOverride?: string, isInitial: boolean = false) {
  const hash = hashOverride || decodeURIComponent(window.location.hash.substring(1))
  if (!hash) return
  const target = document.getElementById(hash)
  if (target) {
    const pane = target.closest(".tab-pane") as HTMLElement
    if (pane) {
      const radioId = pane.getAttribute("data-for")
      const radio = document.getElementById(radioId!) as HTMLInputElement
      if (radio && !radio.checked) {
        radio.checked = true
        const container = radio.closest('.tab-container') as HTMLElement
        if (container) scrollLabelIntoView(container, !isInitial)
      }
      syncToCHighlight(hash)
    }
  }
}

const initAll = (isInitial: boolean) => {
  setupTabbers(isInitial)
  syncTabs(undefined, isInitial)
}

document.addEventListener("nav", () => {
  // Pass 1: Immediate attempt
  initAll(true)

  // Pass 2: After layout paint
  requestAnimationFrame(() => initAll(true))

  // Pass 3: Safety net for late-loading fonts/images
  setTimeout(() => initAll(true), 250)

  // Standard Listeners
  const clickHandler = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest("a")
    if (link && link.hash) {
      const cleanHash = decodeURIComponent(link.hash.substring(1))
      setTimeout(() => syncTabs(cleanHash, false), 10)
    }
  }
  document.removeEventListener("click", clickHandler)
  document.addEventListener("click", clickHandler, { capture: true })
  window.addEventListener("hashchange", () => syncTabs(undefined, false))

  document.querySelectorAll('.tab-container').forEach(container => {
    container.addEventListener('change', (e) => {
      const radio = e.target as HTMLInputElement
      if (radio.type === 'radio' && radio.checked) {
        const c = radio.closest('.tab-container') as HTMLElement
        if (c) scrollLabelIntoView(c, true)
        const pane = c?.querySelector(`.tab-pane[data-for="${radio.id}"]`)
        const anchor = pane?.querySelector('.tab-toc-anchor')
        if (anchor && anchor.id) {
          history.replaceState(null, '', `#${anchor.id}`)
          syncToCHighlight(anchor.id)
        }
      }
    })
  })
})

window.addEventListener("resize", () => setupTabbers(false))
// Pass 4: Final catch-all for slow assets
window.addEventListener("load", () => initAll(true))