import React from "react";
import WebLink from "components/web-link";
import bembam from "bembam";
import pureUpdate from "pure-update";
require("./style.scss");

export default class OtherProduct extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {src, href, children, className} = this.props;
    const cn = bembam("Other-product", className);

    return (
      <div {...this.props} className={cn} src={null}>
        <WebLink className={cn.el("thumbnail")} href={href}>
          <img src={src}/>
        </WebLink>
        <div className={cn.el("content")}>
          {children}
        </div>
      </div>
    );
  }
}
