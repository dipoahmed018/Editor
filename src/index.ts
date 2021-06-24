import Editor from "./Modules/Editor";
import './index.scss'
const edit_box : HTMLElement = document.getElementById('editor-box')

const editor = new Editor(edit_box, 'box')
