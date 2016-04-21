import React from "react";
import WebLink from "components/web-link";
import bembam from "bembam";
require("./style.scss");

export default class OtherProduct extends React.Component {
  render() {
    const {src, children, className} = this.props;
    const cn = bembam("Other-product", className);

    return (
      <WebLink {...this.props} className={cn} src={null}>
        <img className={cn.el("thumbnail")} src={src}/>
        <div className={cn.el("content")}>
          {children}
        </div>
      </WebLink>
    );
  }
}
