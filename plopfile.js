const _ = require("lodash");
const prompt = (name, message, type, validate) => ({type: type || "input", name, message, validate});

function kebabCase(text) {
  return _.kebabCase(text);
}

function upperDashCase(text) {
  return _.capitalize(_.kebabCase(text));
}

module.exports = (plop) => {
  plop.addHelper("kebabCase", kebabCase);
  plop.addHelper("upperDashCase", upperDashCase);

  plop.setGenerator("component", {
    description: "Simple SCSS styled React component",
    prompts: [
      {name: "name", message: "Name?", type: "input"}
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{dashCase name}}/index.js",
        templateFile: "plop-templates/component.hb"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/style.scss",
        templateFile: "plop-templates/component-style.hb"
      }
    ]
  });

  plop.setGenerator("module", {
    description: "Empty module with test file",
    prompts: [
      {name: "name", message: "Name?", type: "input"},
      {name: "path", message: "Path?", type: "directory"}
    ],
    actions: [
      {
        type: "add",
        path: "src/{{path}}/{{dashCase name}}/index.js",
        templateFile: "plop-templates/module.hb"
      },
      {
        type: "add",
        path: "src/{{path}}/{{dashCase name}}/{{dashCase name}}.test.js",
        templateFile: "plop-templates/module-test.hb"
      }
    ]
  });
};
