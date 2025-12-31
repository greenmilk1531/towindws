const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,   // 보안 OK
      contextIsolation: false   // preload 안 쓰니까 false
    },
    icon: path.join(__dirname, 'arma.ico')
  });

  win.loadFile('index.html');

  // 개발 중이면 콘솔 바로 열기 (선택)
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

// macOS 닫아도 앱 유지
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
