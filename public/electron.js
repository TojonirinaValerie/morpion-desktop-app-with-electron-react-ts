const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });

    // Création de la fenêtre de navigateur.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // et chargement de l'url de l'application.
    win.loadURL(startUrl);

    // Fermer
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });

    // Desactiver le redimension du fenetre
    win.on('will-resize', (event)=>{
        event.preventDefault();
    });

}
// Cette méthode sera appelée quand Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.whenReady().then(createWindow);

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. Dans ce cas il est courant
// que les applications et barre de menu restents actives jusqu'à ce que l'utilisateur quitte 
// de manière explicite par Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // Sur macOS il est commun de re-créer une fenêtre  lors 
    // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});

// ipcMain.on('close', ()=>{
//   app.quit();
// });