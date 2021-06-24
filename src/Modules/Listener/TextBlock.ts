import Editor from "../Editor"
import { removeFocus } from "./ListenerHelper"

export default function TextBlock(e : Event, tools : Array<string>) {
    console.log(e)
    const node = document.querySelector('.editor-preview-box')
    const element = document.createElement('p')
    element.contentEditable = 'true'
    element.setAttribute('data-block-id', `block-${node.childNodes.length + 1}`)
    element.setAttribute('data-block-type', 'text')
    node.appendChild(element)
    //focus fix
    removeFocus()
    element.addEventListener('click', () => {
        removeFocus()
        element.setAttribute('focused', 'true')
    })
    element.setAttribute('focused', 'true')
    element.focus()
}