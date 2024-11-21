const { app, BrowserWindow } = require('electron')
require('./env.js')

let mainWindow

app.on('ready', () => {
    const { screen } = require('electron')
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    // Create the main window
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // Enable GPU acceleration
            enableBlinkFeatures: 'CSSBackdropFilter',
        },
    })

    mainWindow.loadURL(process.env.APP_URL || 'https://www.google.com')

    process.env.ENVIRONMENT === 'development' && mainWindow.webContents.openDevTools()
})

app.on('window-all-closed', () => {
    // Quit the app unless it's macOS (common behavior)
    if (process.platform !== 'darwin') app.quit()
})
