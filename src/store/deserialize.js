
export default function deserialize(storedState) {
  return {
    ...storedState,
    route: "splash",
    lastRoute: null
  };
}
