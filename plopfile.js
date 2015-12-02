
const prompt = (name, message, type, validate) => ({type: type || "input", name, message, validate});

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Barebones React Component",
    prompts: [
      prompt("name", "Name?")
    ],
    actions: [{
      type: "add",
      path: "src/components/{{dashCase name}}.js",
      templateFile: "plop-templates/component.hb"
    }]
  });

  plop.setGenerator("consonant-vowel", {
    description: "Lessons covering a single consonant paired with a single vowel",
    prompts: [
      prompt("number", "Lesson number?"),
      prompt("letter", "Letter?"),
      prompt("vowel", "Vowel?")
    ],
    actions: [{
      type: "add",
      path: "src/components/levels/{{number}}.js",
      templateFile: "plop-templates/consonant-vowel.hb"
    }]
  });

  plop.setGenerator("consonant-vowel-review", {
    description: "Lessons covering a single consonant paired with a multiple vowels",
    prompts: [
      prompt("number", "Lesson number?"),
      prompt("letter", "Letter?")
    ],
    actions: [{
      type: "add",
      path: "src/components/levels/{{number}}.js",
      templateFile: "plop-templates/consonant-vowel-review.hb"
    }]
  });

  plop.setGenerator("multi-consonant-review", {
    description: "Lessons covering multiple consonants paired with multiple vowels",
    prompts: [
      prompt("number", "Lesson number?"),
      prompt("startLetter", "Start letter?"),
      prompt("endLetter", "End letter?")
    ],
    actions: [{
      type: "add",
      path: "src/components/levels/{{number}}.js",
      templateFile: "plop-templates/multi-consonant-review.hb"
    }]
  });
};
