import { useEffect, useRef, useState, type MouseEvent } from "react"
import { folderStructure, type IFolderStructure } from "../constants/folderStructure"
import Folder from "./Folder"

const Desktop = () => {
  const [dragging, setDragging] = useState<IFolderStructure | null>(null)
  const [dragOffset, setDragOffset] = useState({x: 0, y: 0})
  const [folders, setFolders] = useState(folderStructure)
  const [selected, setSelected] = useState(null)
  const [dragStartPos, setDragStartPos] = useState({x: 0, y: 0})
  const desktopRef = useRef<HTMLDivElement>(null)

   const GRID_SIZE = 120
   const FOLDER_SIZE = 100

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>, folder: IFolderStructure) => {
    if (e.button !== 0 ) return
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setDragging(folder)
  }

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!dragging || !desktopRef.current) return

    const desktopRect = desktopRef.current.getBoundingClientRect()
    const mouseX = e.clientX - desktopRect.left - dragOffset.x
    const mouseY = e.clientY - desktopRect.top - dragOffset.y

    setFolders(prevState => {
      return prevState.map(item => {
        if (item.key === dragging.key) {
          return {...item, tempX: mouseX, tempY: mouseY}
        } else {
          return item
        }
      })
    })
  } 

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [dragging, dragOffset])

  return (
    <div ref={desktopRef} className="w-full h-screen bg-linear-to-br from-blue-400 via-blue-500 to-purple-600 relative overflow-hidden select-none">
      {
        folders.map(item => {
          const posX = item.tempX !== undefined ? item.tempX : item.x * GRID_SIZE
          const posY = item.tempY !== undefined ? item.tempY : item.y * GRID_SIZE
          return (
            <div style={{
                left: `${posX}px`,
                right: `${posY}px`,
                width: `${FOLDER_SIZE}px`,
                height: `${FOLDER_SIZE}px`
            }} 
            onMouseDown={(e) => handleMouseDown(e, item)}
            >
              <Folder label={item.label} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Desktop