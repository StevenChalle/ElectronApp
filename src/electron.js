const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL('https://www.google.com'); // Vue Dev Server
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
