const { Menu, shell } = require("electron");
module.exports = appWin => {
  //menu template
  let template = [
    {
      label: "Items",
      submenu: [
        {
          label: "Add new",
          accelerator: "Ctrl+O",
          click: () => {
            appWin.send("menu-show-modal");
          },
        },
        {
          label: "Read Item",
          accelerator: "Ctrl+Enter",
          click: () => {
            appWin.send("menu-open-item");
          },
        },
        {
          label: "Delete Item",
          accelerator: "Ctrl+Backspace",
          click: () => {
            appWin.send("menu-delete-item");
          },
        },
        {
          label: "Open in Browser", //it'll allow the user to open the selected link in the browser
          accelerator: "Ctrl+Shift+Enter",
          click: () => {
            appWin.send("menu-open-item-native");
          },
        },
        {
            label: "Search Items", //it'll allow the user to open the selected link in the browser
            accelerator: "Ctrl+S",
            click: () => {
              appWin.send("menu-search");
            },
          },
      ],
    },
    {
      role: "editMenu",
    },
    {
      role: "windowMenu",
    },
    {
      role: "help",
      submenu: [
        {
          label: "Learn More",
          click: () => {
            shell.openExternal("https://github.com/KumariRicha?tab=projects");
          },
        },
      ],
    },
  ];

  //Create Mac app menu
  // if(process.platform === 'darwin') template.unshift({role:'appMenu'})
  // build menu
  let menu = Menu.buildFromTemplate(template);

  //set this menu for the main application
  Menu.setApplicationMenu(menu);
};
