const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("public/index.html");
    // win.webContents.openDevTools();

    ipcMain.handle("dark-mode:toggle", () => {
        nativeTheme.themeSource = nativeTheme.shouldUseDarkColors
            ? "light"
            : "dark";
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
