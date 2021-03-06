import bold_png from '../asset/bold.png'
import center_align from '../asset/center-align.png'
interface creatorFinder {
    [key: string]: Function
}

export default function toolCreator(type: string, content: string | null | HTMLElement = null, className: string | null = null) {
    const available: Array<creatorFinder> = [
        { 'bold': () => bold() },
        { "text-block": () => TextBlock() },
        { "align-center": () => createCenter() },
        { "link": () => createLink() },
    ]
    if (type == 'i') {
        let element = document.createElement('i')
        if (!content && !className) {
            return element
        }
        if (className) {
            element.classList.add(className)
        }
        if (typeof content == 'string') {
            element.innerText = content
            return element
        }
        if (content) {
            element.appendChild(content)
            return element
        }
    }
    const valid = available.find(element => {
        return Object.keys(element).includes(type)
    })
    if (valid) {
        return valid[type]()

    }
}
const bold = () => {
    let icon = new Image()
    icon.src = bold_png
    return icon
}

const createCenter = () => {
    let icon = new Image()
    icon.src = center_align
    return icon
}
const TextBlock = () => {
    let icon = document.createElement('p')
    icon.innerHTML = "T"
    return icon
}
const createLink = () => {
    let icon = document.createElement('p')
    icon.innerHTML = "L"
    return icon
}