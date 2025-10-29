import type { MouseEvent } from "react"

const Folder = ({selected, onClick, onBlur}: {selected: boolean, onClick: (e: MouseEvent<HTMLButtonElement>) => void, onBlur: () => void}) => {
  return (
    <button id="folder" className={`w-24 h-24 flex flex-col text-center text-white text-shadow-sm text-shadow-black text-xs justify-center items-center p-1`} onClick={onClick} onBlur={onBlur}>
        <img src="/folder.ico" alt="Folder icon" className={`${selected ? "opacity-70": "opacity-100"}`} />
        <div className={`px-2 py-0.5 ${selected ? "bg-blue-600" : ""}`}>
            <span>New Folder</span>
        </div>
    </button>
  )
}

export default Folder