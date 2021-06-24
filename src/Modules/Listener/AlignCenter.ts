import { getBlock, getFocus } from "./ListenerHelper";

export default function alignCenter(e: Event, tools: Array<string>) {
    const focused = getFocus()
    const base = getBlock(focused)
    
}