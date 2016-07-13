const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;

// if(process.env.NODE_ENV === "development") {
//   require("electron-debug")();
// }

app.on("window-all-closed", () => app.quit());

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    title: "Fun-Time Phonics™",
    width: 1024, height: 768,
    minWidth: 1024, minHeight: 768,
    center: true,
    maximized: true
  });
  app.setAppUserModelId("com.criticalthinking.fun-time-phonics");
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.maximize();
});
