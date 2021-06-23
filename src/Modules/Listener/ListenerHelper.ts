export function removeFocus(className: String = null) {
    const node : HTMLElement = document.querySelector(className ? `.${className}` : '.editor-preview-box')
    node.childNodes.forEach(element => {
        // console.log(element.getAttribute('data-block-id'))
    })
}