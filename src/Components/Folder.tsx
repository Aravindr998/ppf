import { type HTMLAttributes, type MouseEvent } from "react"
import type { Icon } from "../constants/folderStructure";

interface IFolder extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean, 
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void, 
  onButtonBlur?: () => void, 
  label?: string,
  onButtonDoubleClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  icon?: Icon
}

const icons = {
  default: "/folder.ico",
  explorer: "/ie.ico"
}


const Folder = ({selected, onButtonClick, onButtonBlur, label, onButtonDoubleClick, icon="default",  ...props}: IFolder) => {
  return (
    <>
    <div {...props}>
      <button
        id="folder"
        className={`w-24 h-24 flex flex-col text-center text-white text-shadow-sm text-shadow-black text-xs justify-center items-center p-1`}
        onClick={onButtonClick}
        onBlur={onButtonBlur}
        onDoubleClick={onButtonDoubleClick}
      >
        <img draggable={false} src={icons[icon]} alt="Folder icon" className={`${selected ? "opacity-70" : "opacity-100"}`} />
        <div className={`px-2 py-0.5 ${selected ? "bg-blue-600" : ""}`}>
          <span>{label}</span>
        </div>
      </button>
    </div>
   
    </>
  );
}

export default Folder