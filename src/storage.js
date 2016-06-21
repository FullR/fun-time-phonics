import Storage from "putainde-localstorage";

function getStorage({namespace, version}) {
  const storage = Storage.create({namespace});

  if(storage.get("version") !== version) {
    console.log("Clearing invalid storage");
    storage.clear();
    storage.set("version", version);
  }

  return storage;
}

export default getStorage;
