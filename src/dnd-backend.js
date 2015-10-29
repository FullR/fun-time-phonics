import htmlBackend from "react-dnd-html5-backend";
import touchBackend from "react-dnd-touch-backend";
let currentBackend = window.platform && window.platform.isCordova ? touchBackend : htmlBackend;

export default currentBackend;
