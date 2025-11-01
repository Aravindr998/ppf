import { Menu, MenuButton, MenuDivider, MenuItem, SubMenu } from "@szhsin/react-menu"
import type { OpenFolderType } from "../constants/folderStructure"
import { menuItems } from "../constants/menuItems"
import { Fragment } from "react/jsx-runtime"
import '@szhsin/react-menu/dist/index.css';

export interface IOpenFolderProps {
    handleCloseFolder: () => void,
    folderName: string,
    children: React.ReactNode,
    type: OpenFolderType
}

const OpenFolder = ({ handleCloseFolder, folderName, children, type }: IOpenFolderProps) => {
    console.log(type)
    return (
        <div className='w-full h-full rounded-lg zoom-in-window bg-linear-to-b inset-shadow-sm inset-shadow-blue-300 from-blue-500 via-blue-600 to-blue-800'>
            <div className='bg-transparent text-white flex justify-between items-center p-2 rounded-lg drag-handle cursor-all-scroll h-1/'>
                <p className='font-bold text-md'>{folderName}</p>
                <div className='flex gap-2'>
                    <button className='bg-linear-to-b from-blue-400 via-blue-500 to-blue-400 rounded-sm border p-1 min-w-8 font-bold'>_</button>
                    <button className='bg-linear-to-b from-red-400 via-red-500 to-red-400 rounded border p-1 min-w-8 font-bold' onClick={handleCloseFolder}>X</button>
                </div>
            </div>
            <div className="bg-transparent w-full px-2 pb-2" style={{
                height: "calc(100% - 52px)"
            }}>
                <div className="bg-white w-full h-full rounded">
                    <div>
                        <div className="flex gap-2 text-sm">
                            {
                                Object.keys(menuItems).map(menuKey => {
                                    const menu = menuItems[menuKey]
                                    return (
                                        <Menu key={menuKey} className="inline-block" menuButton={<MenuButton>{menu.label}</MenuButton>}>
                                            {
                                                menu.submenu.map((divisions, index, array) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            {
                                                                divisions.map(item => {
                                                                    if (item.more) {
                                                                        return (
                                                                            <SubMenu label={item.left} key={item.left}>
                                                                                {
                                                                                    item.more.map(sub => {
                                                                                        return <MenuItem key={sub}>{sub}</MenuItem>
                                                                                    })
                                                                                }
                                                                            </SubMenu>
                                                                        )
                                                                    }
                                                                    return (
                                                                        <MenuItem key={item.left}>
                                                                            <div className="flex justify-between w-full">
                                                                                <span>{item.left}</span>
                                                                                {item.right && <span>{item.right}</span>}
                                                                            </div>
                                                                        </MenuItem>
                                                                    )
                                                                })
                                                            }
                                                            {index !== array.length - 1 && <MenuDivider />}
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </Menu>
                                    )

                                })
                            }
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default OpenFolder