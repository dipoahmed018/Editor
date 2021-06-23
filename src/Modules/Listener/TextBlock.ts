export default function TextBlock(classname: string = null) {
    const node = document.querySelector(classname ? `.${classname}` : '.editor-preview-box')
    const element = document.createElement('p')
    element.contentEditable = 'true'
    element.setAttribute('data-block-id', `block-${node.childNodes.length + 1}`)
    element.setAttribute('data-block-type', 'text')
    node.appendChild(element)
    element.focus()
}