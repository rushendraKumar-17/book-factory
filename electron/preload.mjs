// electron/preload.js
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // expose APIs
});
