import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react"
import { folderStructure, type IFolderDetails, type IFolderStructure } from "../constants/folderStructure"
import Folder from "./Folder"
import { Rnd } from "react-rnd"
import OpenFolder from "./OpenFolder"

const Desktop = () => {
  const [dragging, setDragging] = useState<IFolderStructure | null>(null)
  const [dragOffset, setDragOffset] = useState({x: 0, y: 0})
  const [folders, setFolders] = useState(folderStructure)
  const [selected, setSelected] = useState<string>("")
  const desktopRef = useRef<HTMLDivElement>(null)
  const [openFolders, setOpenFolders] = useState<Record<string, IFolderDetails>>({})

   const GRID_SIZE = 100
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

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
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
  }, [dragOffset.x, dragOffset.y, dragging])

  const handleMouseUp = useCallback((e: globalThis.MouseEvent) => {
    if (!dragging || !desktopRef.current) return
    const desktopRect = desktopRef.current.getBoundingClientRect()
    const mouseX = e.clientX - desktopRect.left - dragOffset.x + FOLDER_SIZE/2
    const mouseY = e.clientY - desktopRect.top - dragOffset.y + FOLDER_SIZE/2

    const gridX = Math.max(0, Math.floor(mouseX / GRID_SIZE))
    const gridY = Math.max(0, Math.floor(mouseY / GRID_SIZE))
    
    setFolders(prev => {
      return prev.map(item => {
        if (item.key === dragging.key) {
          return {...item, x: gridX, y: gridY, tempX: undefined, tempY: undefined}
        } else {
          return {...item, tempX: undefined, tempY: undefined}
        }
      })
    })
    setDragging(null)
  }, [dragOffset.x, dragOffset.y, dragging])

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [dragging, handleMouseMove, handleMouseUp])

  const handleItemClick = (folder: IFolderStructure) => {
    setSelected(folder.key)
  }

  console.log(folders)

  const handleDoubleClick = (folder: IFolderStructure) => {
    const folderDetails = folder.folderDetails
    folderDetails.label = folder.label
    setOpenFolders(prevState => {
      return {
        ...prevState,
        [folder.key]: folderDetails
      }
    })
  }

  const handleCloseFolder = (key: string) => {
    setOpenFolders(prevState => {
      delete prevState[key]
      return {
        ...prevState,
      }
    })
  }

  console.log(openFolders)

  return (
    <div
      ref={desktopRef}
      className="w-full h-screen bg-[url('/xp.jpg')] bg-cover bg-center relative overflow-hidden select-none"
      style={{ cursor: dragging ? "grabbing" : "default" }}
    >
      {folders.map((item) => {
        const posX = item.tempX !== undefined ? item.tempX : item.x * GRID_SIZE;
        const posY = item.tempY !== undefined ? item.tempY : item.y * GRID_SIZE;
        const isDragging = dragging?.key === item.key;
        return (
          <div
            style={{
              left: `${posX}px`,
              top: `${posY}px`,
              width: `${FOLDER_SIZE}px`,
              height: `${FOLDER_SIZE}px`,
              transition: isDragging ? "none" : "all 0.2s ease-out",
            }}
            className="absolute"
            key={item.key}
            onMouseDown={(e) => handleMouseDown(e, item)}
          >
            <Folder
              label={item.label}
              onButtonClick={() => handleItemClick(item)}
              selected={item.key === selected}
              onDoubleClick={() => handleDoubleClick(item)}
              onButtonBlur={() => setSelected("")}
              icon={item.icon}
            />
          </div>
        );
      })}
      {Object.keys(openFolders).map((item) => {
        const details = openFolders[item]
        const Data = details.Data ? details.Data : () => <></>
        return (
          <Rnd
          key={item}
            size={{ width: details.width, height: details.height }}
            minWidth={300}
            minHeight={300}
            position={{ x: details.x, y: details.y }}
            onDragStop={(_, d) => setOpenFolders(prevState => {
              return {
                ...prevState,
                [item]: {
                  ...prevState[item],
                  x: d.x, y: d.y
                }
              }
            })}
            onResize={(_, __, ref) => setOpenFolders(prevState => {
              return {
                ...prevState,
                [item]: {
                  ...prevState[item],
                  width: ref.offsetWidth,
                  height: ref.offsetHeight
                }
              }
            })}
            dragHandleClassName="drag-handle"
            bounds={"parent"}
          >
            <OpenFolder handleCloseFolder={() => handleCloseFolder(item)} folderName={details.label || ""} type={details.type} >
              <Data />
            </OpenFolder>
          </Rnd>
        );
      })}
      {/* <OpenFolder /> */}
    </div>
  );
}

export default Desktop