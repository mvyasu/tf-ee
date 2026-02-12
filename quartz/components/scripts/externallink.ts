function setupExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]')
    links.forEach(link => {
        // Check if the link is actually external (not pointing to your own site)
        if (link instanceof HTMLAnchorElement && !link.href.includes(window.location.hostname)) {
        link.setAttribute("target", "_blank")
        link.setAttribute("rel", "noopener noreferrer")
        }
    })
}

document.addEventListener("nav", setupExternalLinks)
//setupExternalLinks()