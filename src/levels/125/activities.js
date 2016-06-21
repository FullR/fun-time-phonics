
const beginning = (correctLetter, letter) => ({type: "beginning", letter, correctLetter});
const middle = (letter) => ({type: "middle", letter});
const ending = (letter) => ({type: "ending", letter});

export default [
  {words: ["bud", "bed", "bad"], correctWord: "bed", incorrectTypes: {
    bud: middle("e"),
    bad: middle("e")
  }},
  {words: ["cut", "cap", "cat"], correctWord: "cat", shortInstructions: true, incorrectTypes: {
    cut: middle("a"),
    cap: ending("t")
  }},
  {words: ["big", "dig", "dog"], correctWord: "dig", shortInstructions: true, incorrectTypes: {
    big: beginning("b", "d"),
    dog: middle("i")
  }},
  {words: ["fin", "fan", "fun"], correctWord: "fun", shortInstructions: true, incorrectTypes: {
    fin: middle("u"),
    fan: middle("u")
  }},
  {words: ["goose", "geese", "gas"], correctWord: "gas", shortInstructions: true, incorrectTypes: {
    goose: middle("a"),
    geese: middle("a")
  }},
  {words: ["hip", "hop", "happy"], correctWord: "hop", shortInstructions: true, incorrectTypes: {
    hip: middle("o"),
    happy: middle("o")
  }},
  {words: ["jug", "jig", "jog"], correctWord: "jog", shortInstructions: true, incorrectTypes: {
    jug: middle("o"),
    jig: middle("o")
  }},
  {words: ["kite", "kid", "cot"], correctWord: "cot", shortInstructions: true, incorrectTypes: {
    kite: middle("o"),
    kid: middle("o")
  }},
  {words: ["log", "ledge", "leg"], correctWord: "leg", shortInstructions: true, incorrectTypes: {
    log: middle("e"),
    ledge: ending("g")
  }},
  {words: ["map", "mop", "mob"], correctWord: "mop", shortInstructions: true, incorrectTypes: {
    map: middle("o"),
    mob: ending("p")
  }},
  {words: ["nut", "net", "knot"], correctWord: "nut", shortInstructions: true, incorrectTypes: {
    net: middle("u"),
    knot: middle("u")
  }},
  {words: ["big", "dig", "pig"], correctWord: "pig", shortInstructions: true, incorrectTypes: {
    big: beginning("b", "p"),
    dig: beginning("d", "p")
  }},
  {words: ["road", "red", "rip"], correctWord: "red", shortInstructions: true, incorrectTypes: {
    road: middle("e"),
    rip: middle("e")
  }},
  {words: ["sleep", "sap", "sip"], correctWord: "sip", shortInstructions: true, incorrectTypes: {
    sleep: middle("i"),
    sap: middle("i")
  }},
  {words: ["tan", "tin", "ten"], correctWord: "ten", shortInstructions: true, incorrectTypes: {
    tan: middle("e"),
    tin: middle("e")
  }},
  {words: ["tip", "type", "tap"], correctWord: "tip", shortInstructions: true, incorrectTypes: {
    type: middle("i"),
    tap: middle("i")
  }},
  {words: ["vat", "vet", "vote"], correctWord: "vat", shortInstructions: true, incorrectTypes: {
    vet: middle("a"),
    vote: middle("a")
  }},
  {words: ["white", "wet", "water"], correctWord: "wet", shortInstructions: true, incorrectTypes: {
    white: middle("e"),
    water: middle("e")
  }},
  {words: ["yolk", "yuck", "yak"], correctWord: "yak", shortInstructions: true, incorrectTypes: {
    yolk: middle("a"),
    yuck: middle("a")
  }},
  {words: ["sip", "zoo", "zip"], correctWord: "zip", shortInstructions: true, incorrectTypes: {
    sip: beginning("s", "z"),
    zoo: middle("i")
  }},
  {words: ["cup", "cap", "cub"], correctWord: "cup", shortInstructions: true, incorrectTypes: {
    cap: middle("u"),
    cub: ending("p")
  }},
  {words: ["Dan", "den", "denim"], correctWord: "den", shortInstructions: true, incorrectTypes: {
    Dan: middle("e"),
    denim: ending("n")
  }},
  {words: ["fork", "fox", "box"], correctWord: "fox", shortInstructions: true, incorrectTypes: {
    fork: middle("o"),
    box: beginning("f")
  }},
  {words: ["gun", "gym", "gum"], correctWord: "gum", shortInstructions: true, incorrectTypes: {
    gun: middle("u"),
    gym: ending("m")
  }},
  {words: ["hit", "hot", "hat"], correctWord: "hat", shortInstructions: true, incorrectTypes: {
    hit: middle("a"),
    hot: middle("a")
  }},
  {words: ["Jill", "jet", "gem"], correctWord: "jet", shortInstructions: true, incorrectTypes: {
    Jill: middle("e"),
    gem: ending("t")
  }},
  {words: ["lip", "lick", "lap"], correctWord: "lip", shortInstructions: true, incorrectTypes: {
    lick: ending("p"),
    lap: middle("i")
  }},
  {words: ["maid", "mud", "mad"], correctWord: "mad", shortInstructions: true, incorrectTypes: {
    maid: middle("a"),
    mud: middle("a")
  }},
  {words: ["nun", "nap", "knob"], correctWord: "nun", shortInstructions: true, incorrectTypes: {
    nap: middle("u"),
    knob: middle("u")
  }},
  {words: ["pit", "pet", "pot"], correctWord: "pot", shortInstructions: true, incorrectTypes: {
    pit: middle("o"),
    pet: middle("o")
  }},
  {words: ["run", "ring", "room"], correctWord: "run", shortInstructions: true, incorrectTypes: {
    ring: middle("u"),
    room: middle("u")
  }},
  {words: ["socks", "six", "sax"], correctWord: "six", shortInstructions: true, incorrectTypes: {
    socks: middle("i"),
    sax: middle("i")
  }}
];
