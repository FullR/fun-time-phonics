import stringMirror from "util/string-mirror";
import actionHandlers from "./action-handlers";

export default stringMirror(...Object.keys(actionHandlers));
