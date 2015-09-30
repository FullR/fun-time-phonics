import Storage from "putainde-localstorage";
import {version} from "../package";
const log = debug("tctc:storage");
const storage = Storage.create({namespace: "com.criticalthinking.fun-time-phonics"});

if(storage.get("version") !== version) {
    console.log("Clearing invalid storage");
    storage.clear();
    storage.set("version", version);
}
log("localstorage:", storage);

export default storage;
