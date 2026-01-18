const { app, BrowserWindow, ipcMain } = require('electron/main')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,

    resizable:false,
    frame:false,
    titleBarOverlay: false,
    titleBarStyle: 'hidden',
    

    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration:false,
        contextIsolation:true,
    }
  })
  win.loadFile('src/index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})

ipcMain.on('quit-app', () => {
  app.quit(); // Closes the entire application gracefully
});