import {isCordova} from "util/detect-platform";
import {DragDropContext} from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import HTML5Backend from "react-dnd-html5-backend";

const backend = isCordova() ? TouchBackend : HTML5Backend; // use touch backend on mobile devices

export default DragDropContext(backend);
