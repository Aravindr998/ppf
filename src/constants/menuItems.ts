export interface MenuItem {
  left: string
  right?: string
  more?: string[]
}

export interface Menu {
  label: string
  submenu: MenuItem[][]
}

export interface MenuItems {
  [key: string]: Menu
}

export const menuItems: MenuItems = {
    file: {
        label: "File",
        submenu: [
            [
                {
                    left: "New",
                    more: [
                        "Window",
                        "Message",
                        "Post",
                        "Contact",
                        "Internet Call"
                    ]
                },
                {
                    left: "Open",
                    right: "Ctrl+O"
                },
                {
                    left: "Edit",
                },
                {
                    left: "Save",
                    right: "Ctrl+S"
                },
                {
                    left: "Save As",
                }
            ],
            [
                {
                    left: "Page Setup",
                },
                {
                    left: "Print",
                    right: "Ctrl+P",
                },
                {
                    left: "Print Preview",
                }
            ],
            [
                {
                    left: "Send",
                    more: [
                        "Page by Email",
                        "Link by Email",
                        "Shortcut to Desktop",
                    ]
                },
                {
                    left: "Import and Export",
                }
            ],
            [
                {
                    left: "Properties",
                },
                {
                    left: "Work Offline",
                },
                {
                    left: "Close",
                }
            ],
        ]
    },
    edit: {
        label: "Edit",
        submenu: [
            [
                {
                    left: "Cut",
                    right: "Ctrl+X"
                },
                {
                    left: "Copy",
                    right: "Ctrl+C"
                },
                {
                    left: "Paste",
                    right: "Ctrl+V"
                },
            ],
            [
                {
                    left: "Select All",
                    right: "Ctrl+A"
                }
            ],
            [
                {
                    left: "Find(On This Page)",
                    right: "Ctrl+F"
                }
            ],
        ]
    },
    view: {
        label: "View",
        submenu: [
            [
                {
                    left: "Toolbars",
                },
                {
                    left: "Status Bar",
                },
                {
                    left: "Explore Bar",
                },
            ],
            [
                {
                    left: "Goto",
                },
                {
                    left: "Stop",
                },
                {
                    left: "Refresh",
                },
            ],
            [
                {
                    left: "Text Size",
                },
                {
                    left: "Encoding",
                },
            ],
            [
                {
                    left: "Source",
                },
                {
                    left: "Privacy Report",
                },
                {
                    left: "Fullscreen",
                    right: "F11"
                },
            ],
        ]
    },
    favorites: {
        label: "Favorites",
        submenu: [
            [
                {
                    left: "Add to Favorites"
                },
                {
                    left: "Organize Favorites"
                },
            ]
        ]
    },
    tools: {
        label: "Tools",
        submenu: [
            [
                { left: "Mail and News" },
                { left: "Pop-up Blocker" },
                { left: "Manage Add-ons..." },
                { left: "Synchronize..." },
                { left: "Windows Update" }
            ],
            [
                { left: "Windows Messenger" },
                { left: "Diagnose Connection Problems..." },
                { left: "Internet Options..." }
            ]
        ],
    },
    help: {
        label: "Help",
        submenu: [
            [
                { left: "Contents and Index" },
                { left: "Tip of the Day" },
                { left: "For Netscape Users" },
                { left: "Online Support" },
                { left: "Send Feedback" }
            ],
            [
                { left: "About Internet Explorer" }
            ]
        ]

    }
}