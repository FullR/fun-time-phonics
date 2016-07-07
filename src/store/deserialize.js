// adds session defaults to loaded state
export default function deserialize(storedState) {
  return {
    ...storedState,
    route: "splash",
    lastRoute: null
  };
}
