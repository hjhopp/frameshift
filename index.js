const path = require("path");

const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname, {
    electron         : path.join(__dirname, "./node_modules", ".bin", "electron"),
    awaitWriteFinish : true
});

function createWindow() {
    const win = new BrowserWindow({
        width          : 800,
        height         : 600,
        icon           : "public/favicon2.png",
        webPreferences : {
            nodeIntegration : true,
        },
    });

    win.loadFile("public/index.html");
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
