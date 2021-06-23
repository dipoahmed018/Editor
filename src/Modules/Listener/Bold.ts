export default function bold(node:HTMLElement) {
    // const selectd = document.getSelection()
    // console.log(selectd.getRangeAt(0))
    const startNode = document.getElementById('start')
    const endNode = document.getElementById('end')
    const range = new Range()
    range.setStart(startNode.firstChild, 2)
    range.setEnd(endNode.firstChild, 4)
    document.getSelection().addRange(range)
}   