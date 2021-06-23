import { removeFocus } from "./ListenerHelper";

export default function bold(classname : string = null) {
    const node = document.querySelector(classname ? `.${classname}` : '.editor-preview-box')
    removeFocus()
}