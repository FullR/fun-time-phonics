import {DragDropContext} from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import HTML5Backend from "react-dnd-html5-backend";

const backend = TouchBackend;

export default DragDropContext(backend);
