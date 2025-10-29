import { useState, type MouseEvent } from "react"
import Folder from "./Folder"

const Desktop = () => {
    const [selected, setSelected] = useState(false)
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setSelected(true)
    }
    const handleBlur = () => {
        setSelected(false)
    }
  return (
    <section className="desktop p-5">
        <Folder selected={selected} onClick={handleClick} onBlur={handleBlur} />
    </section>
  )
}

export default Desktop