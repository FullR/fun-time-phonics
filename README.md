## Setup
```bash
npm install
npm run setup
```

## Compile
Builds files in `src` and places the compiled project into `dist`.
```bash
npm run compile
```

## Test in browser
Open a web browser to `127.0.0.1:8080` to test the app.
```bash
npm run dev-server
```

## Build Cordova project
```bash
npm run build-cordova
```

## Open Cordova project in XCode
```bash
npm run xcode
```

## Re-convert wav files
Converts all `.wav` files located in the `raw-audio` directory into `.mp3` and `.ogg` files and places them into
the `audio` directory without changing the folder structure or filenames (except extentions).
```bash
npm run convert-audio
```
