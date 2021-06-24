import { getFocus, removeFocus } from "./ListenerHelper";

export default function bold(e : Event,tools : Array<string>) {
    console.log(e)
    const node = document.querySelector('.editor-preview-box')
    const focused = getFocus()
    if (focused?.innerHTML.trim() == '') {
        focused.classList.add('bold-text')
        focused.focus()
    }
}