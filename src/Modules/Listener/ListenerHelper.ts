export function removeFocus(className: String = null) {
    const childrens: NodeList = document.querySelector(className ? `.${className}` : '.editor-preview-box')?.childNodes
    if (childrens.length > 0) {
        recurseFocusRemover(childrens)
    }
    function recurseFocusRemover(Nodes: NodeList): void {
        Nodes.forEach((element: HTMLElement) => {
            if (element instanceof HTMLElement) {
                element.setAttribute('focused', 'false')
                if (element.childNodes?.length > 0) {
                    recurseFocusRemover(element.childNodes)
                }
            }
        });
    }
}

export function getFocus(className: String = null): (undefined | HTMLElement) {
    const childrens: NodeList = document.querySelector(className ? `.${className}` : '.editor-preview-box')?.childNodes
    let focused: (HTMLElement | undefined) = undefined;
    if (childrens.length > 0) {
        getFocusedElement(childrens)
    }
    function getFocusedElement(Nodes: NodeList) {
        Nodes.forEach((element: HTMLElement) => {
            if (element instanceof HTMLElement) {
                if (element.getAttribute('focused') == 'true') {
                    focused = element
                    return false
                }
                if (element.childNodes?.length > 0) {
                    getFocusedElement(element.childNodes)
                }
            }
        });
    }
    return focused
}

export function styleExists(node: HTMLElement, ClassList : Array<String>) : (Array<String> | null) {
    const available : Array<String> = [];
    ClassList.forEach((className : string) => {
        node.classList.contains(className) ? available.push(className) : null
    })
    return available.length < 1 ? null : available;
}

export function getBlock(node:HTMLElement) : HTMLElement | undefined {
    if (node instanceof HTMLElement && !node.classList.contains('editor-preview-box') && node.parentElement) {
        return node.getAttribute('data-block-id') ? node : getBlock(node.parentElement)
    }
    return undefined
}

export function fixStyles(node: HTMLElement, classList : Array<string>) {

}