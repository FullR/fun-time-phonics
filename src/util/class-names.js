import {reduce} from "lodash";

export default function classNames(...manifests) {
  return manifests.map((manifest) => {
    if(typeof manifest === "string") return manifest;
    if(Array.isArray(manifest)) return manifest.join(" ");
    return reduce(manifest, (resultStr, conditional, className) => {
      if(conditional) {
        return `${resultStr} ${className}`;
      }
      return resultStr;
    }, "");
  }).join(" ");
}