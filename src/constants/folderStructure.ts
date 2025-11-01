import ContactMe from "../Components/ContactMe"

export interface IFolderStructure {
    key: string,
    type: "folder",
    x: number,
    y: number,
    w: number,
    h: number,
    tempX?: number,
    tempY?: number,
    label: string,
    icon?: Icon
    folderDetails: IFolderDetails
}

export type Icon = "default" | "explorer"

export type OpenFolderType = "folder" | "explorer" 

export interface IFolderDetails {
    type: OpenFolderType,
    x: number,
    y: number,
    width: number, 
    height: number
    label?: string,
    Data?: React.FC
}

export const folderStructure: IFolderStructure[] = [
    {
        key: "about_me",
        type: "folder",
        label: "About me",
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        icon: "default",
        folderDetails: {
            type: "folder",
            x: 100,
            y: 100,
            width: 400,
            height: 400
        }
    },
    {
        key: "projects",
        type: "folder",
        label: "Projects",
        x: 0,
        y: 1,
        w: 1,
        h: 1,
        icon: "default",
        folderDetails: {
            type: "folder",
            x: 150,
            y: 150,
            width: 400,
            height: 400
        }
    },
    {
        key: "contact",
        type: "folder",
        label: "Contact Me",
        x: 0,
        y: 2,
        w: 1,
        h: 1,
        icon: "explorer",
        folderDetails: {
            type: "explorer",
            x: 200,
            y: 200,
            width: 400,
            height: 400,
            Data: ContactMe
        }
    },
    
]