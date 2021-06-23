import converter from "./Converter";
import resolver from "./Resolver";
import bold from './Listener/Bold';
import createTool from './ToolCreator'

interface toolsdetails { name: string; listener: Function; element: Function }
class Editor {
    _node: HTMLElement
    _contentBox: HTMLElement
    _toolBox: HTMLElement

    tools: Array<toolsdetails> = [{
        "name": 'bold',
        "listener": bold,
        "element": () => createTool('bold'),
    }]
    constructor(node: HTMLElement, optionType: 'icon' | 'box' = 'icon', newTools: Array<toolsdetails> | null = null) {
        this._node = node
        this._createToolbar()
        this._setOptions(optionType)
        this.tools = newTools ? { ...this.tools, ...newTools } : this.tools
    }
    _setOptions = (optionType: string) => {
        this._toolBox.classList.add(optionType == 'box' ? 'top-toolbar' : 'float-toolbar')
        this._contentBox.classList.add('editor-preview-box')
    }
    _createToolbar = () => {
        //initial editor wrapper
        this._toolBox = document.createElement('div')
        this._contentBox = document.createElement('div')
        this._node.appendChild(this._toolBox)
        this._node.appendChild(this._contentBox)

        this.tools.forEach(e => {
            const { name, listener, element } = e
            const tool_element = element()
            const wrapper = document.createElement('div')
            wrapper.classList.add('tool')
            wrapper.appendChild(tool_element)
            this._toolBox.appendChild(wrapper)
            wrapper.addEventListener('click', () => listener(this._contentBox))
        })
    }
    covertToJson = () => converter(this._node)
}
export const convertToHtml = (json: object) => resolver(json)




export default Editor