import Storage from "putainde-localstorage";
import {version} from "../package";
const log = debug("tctc:storage");
const storage = Storage.create({namespace: "com.criticalthinking.fun-time-phonics"});

if(storage.get("version") !== version) {
    log("Clearing invalid storage");
    storage.clear();
    storage.set("version", version);
}

export default storage;
