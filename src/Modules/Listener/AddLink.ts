import { getBlock, getFocus, removeFocus, fixStyles } from "./ListenerHelper";

export default function addLink(e: Event, tools: Array<string>) {
    const preview_node = document.querySelector('.editor-preview-box')
    const focused = getFocus()
    const base = getBlock(focused)
    const link = prompt('provide your link here')
    const linkElement = document.createElement('a')
    linkElement.href = link
    linkElement.innerText = link
    focused?.appendChild(linkElement) ?? preview_node.appendChild(linkElement)
    linkElement.addEventListener('click', (e: Event) => {
        removeFocus()
        linkElement.setAttribute('focused', 'true')
        fixStyles(e.target as HTMLElement, tools)
    })
}