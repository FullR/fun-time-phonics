export default function getEventKey(event) {
  if(window.event) {
    return event.keyCode;
  } else if(event.which) {
    return event.which;
  }
}
