// electron/main.js
import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // optional
    }
  });

  // const isDev = process.env.NODE_ENV === 'development';
  const isDev = true;
  const URL = isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../dist/index.html')}`;
  win.loadURL(URL);
}

app.whenReady().then(createWindow);
