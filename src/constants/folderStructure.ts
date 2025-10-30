export interface IFolderStructure {
    key: string,
    type: "folder",
    x: number,
    y: number,
    w: number,
    h: number,
    tempX?: number,
    tempY?: number,
    label: string
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
    },
    {
        key: "projects",
        type: "folder",
        label: "Projects",
        x: 0,
        y: 1,
        w: 1,
        h: 1,
    },
    {
        key: "contact",
        type: "folder",
        label: "Contact Me",
        x: 0,
        y: 2,
        w: 1,
        h: 1,
    },
    
]