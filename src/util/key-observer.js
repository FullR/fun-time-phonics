const keyObserver = (key, observable) => observerComponent((Component, props, {value, error}) => {
  if(error) throw error;
  return typeof value !== "undefined" ?
    (<Component {...props} {...{[key]: value}}/>) :
    (<Component {...props}/>);
})(observable);

const spreadObserver = observerComponent((Component, props, {value, error}) => {
  if(error) throw error;
  if(value && typeof value === "object") {
    return (<Component {...props} {...value}/>);
  } else {
    return (<Component {...props}/>);
  }
});
