import Storage from "putainde-localstorage";
import {version} from "../package";
const storage = Storage.create({namespace: "com.criticalthinking.fun-time-refactored"});

if(storage.get("version") !== version) {
  console.log("Clearing invalid storage");
  storage.clear();
  storage.set("version", version);
}

export default storage;
