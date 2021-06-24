import resolver from "./Resolver";
import bold from './Listener/Bold';
import createTool from './ToolCreator'
import TextBlock from './Listener/TextBlock'
import alignCenter from './Listener/AlignCenter'
import addLink from './Listener/AddLink'

interface toolsdetails { name: string; listener: Function; element: Function }
class Editor {
    private node: HTMLElement
    private contentBox: HTMLElement
    private toolBox: HTMLElement
    tools: Array<toolsdetails> = [{
        "name": 'bold-text',
        "listener": bold,
        "element": () => createTool('bold'),
    },
    {
        "name": 'text-block',
        "listener": TextBlock,
        "element": () => createTool('text-block'),
    },
    {
        "name": "align-center",
        "listener": alignCenter,
        'element': () => createTool('align-center'),
    },
    {
        "name": "link",
        "listener": addLink,
        "element": () => createTool('link'),
    }

]
    
    constructor(node: HTMLElement, optionType: 'icon' | 'box' = 'icon', newTools: Array<toolsdetails> | null = null) {
        this.node = node
        this.createToolbar()
        this.setOptions(optionType)
        this.tools = newTools ? { ...this.tools, ...newTools } : this.tools
    }


    private setOptions = (optionType: string) => {
        this.toolBox.classList.add(optionType == 'box' ? 'top-toolbar' : 'float-toolbar')
        this.contentBox.classList.add('editor-preview-box')
    }
    private createToolbar = () => {
        //initial editor wrapper
        this.toolBox = document.createElement('div')
        this.contentBox = document.createElement('div')
        this.node.appendChild(this.toolBox)
        this.node.appendChild(this.contentBox)

        this.tools.forEach(e => {
            const { name, listener, element } = e
            const tool_element = element()
            const wrapper = document.createElement('div')
            wrapper.classList.add('tool')
            wrapper.appendChild(tool_element)
            this.toolBox.appendChild(wrapper)
            let tools = this.tools.map(styles => styles.name)
            wrapper.addEventListener('click', (e) => listener(e, tools))
        })
      
    }
}
export const convertToHtml = (json: object) => resolver(json)




export default Editor