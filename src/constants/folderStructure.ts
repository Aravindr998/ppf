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
    folderDetails: IFolderDetails
}

export interface IFolderDetails {
    type: "folder",
    x: number,
    y: number,
    width: number, 
    height: number
    label?: string
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
        folderDetails: {
            type: "folder",
            x: 200,
            y: 200,
            width: 400,
            height: 400
        }
    },
    
]