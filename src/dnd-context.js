import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

/* TODO: Add checks for mobile and use touch backend instead of html5 backend */

export default DragDropContext(HTML5Backend);
