
const beginning = (correctLetter, letter) => ({type: "beginning", letter, correctLetter});
const middle = (letter) => ({type: "middle", letter});
const ending = (letter) => ({type: "ending", letter});

export default [
  {words: ["bud", "bed", "bad"], correctWord: "bed", incorrectTypes: {
    bud: middle("e"),
    bad: middle("e")
  }},
  {words: ["cut", "cap", "cat"], correctWord: "cat", incorrectTypes: {
    cut: middle("a"),
    cap: ending("t")
  }},
  {words: ["big", "dig", "dog"], correctWord: "dig", incorrectTypes: {
    big: beginning("b", "d"),
    dog: middle("i")
  }},
  {words: ["fin", "fan", "fun"], correctWord: "fun", incorrectTypes: {
    fin: middle("u"),
    fan: middle("u")
  }},
  {words: ["goose", "geese", "gas"], correctWord: "gas", incorrectTypes: {
    goose: middle("u"),
    geese: middle("u")
  }},
  {words: ["hip", "hop", "happy"], correctWord: "hop", incorrectTypes: {
    hip: middle("o"),
    happy: middle("o")
  }},
  {words: ["jug", "jig", "jog"], correctWord: "jog", incorrectTypes: {
    jug: middle("o"),
    jig: middle("o")
  }},
  {words: ["kite", "kid", "cot"], correctWord: "cot", incorrectTypes: {
    kite: middle("o"),
    kid: middle("o")
  }},
  {words: ["log", "ledge", "leg"], correctWord: "leg", incorrectTypes: {
    log: middle("e"),
    ledge: ending("g")
  }},
  {words: ["map", "mop", "mob"], correctWord: "mop", incorrectTypes: {
    map: middle("o"),
    mob: ending("p")
  }},
  {words: ["nut", "net", "knot"], correctWord: "nut", incorrectTypes: {
    net: middle("u"),
    knot: middle("u")
  }},
  {words: ["big", "dig", "pig"], correctWord: "pig", incorrectTypes: {
    big: beginning("b", "p"),
    dig: beginning("d", "p")
  }},
  {words: ["road", "red", "rip"], correctWord: "red", incorrectTypes: {
    road: middle("e"),
    rip: middle("e")
  }},
  {words: ["sleep", "sap", "sip"], correctWord: "sip", incorrectTypes: {
    sleep: middle("i"),
    sap: middle("i")
  }},
  {words: ["tan", "tin", "ten"], correctWord: "ten", incorrectTypes: {
    tan: middle("e"),
    tin: middle("e")
  }},
  {words: ["tip", "type", "tap"], correctWord: "tip", incorrectTypes: {
    type: middle("i"),
    tap: middle("i")
  }},
  {words: ["vat", "vet", "vote"], correctWord: "vat", incorrectTypes: {
    vet: middle("a"),
    vote: middle("a")
  }},
  {words: ["white", "wet", "water"], correctWord: "wet", incorrectTypes: {
    white: middle("e"),
    water: middle("e")
  }},
  {words: ["yolk", "yuck", "yak"], correctWord: "yak", incorrectTypes: {
    yolk: middle("a"),
    yuck: middle("a")
  }},
  {words: ["zit", "zoo", "zip"], correctWord: "zip", incorrectTypes: {
    zit: ending("t"),
    zoo: middle("i")
  }},
  {words: ["cup", "cap", "cub"], correctWord: "cup", incorrectTypes: {
    cap: middle("u"),
    cub: ending("p")
  }},
  {words: ["Dan", "den", "denim"], correctWord: "den", incorrectTypes: {
    Dan: middle("e"),
    denim: ending("n")
  }},
  {words: ["fork", "fox", "box"], correctWord: "fox", incorrectTypes: {
    fork: middle("o"),
    box: beginning("f")
  }},
  {words: ["gun", "gym", "gum"], correctWord: "gum", incorrectTypes: {
    gun: middle("u"),
    gym: ending("m")
  }},
  {words: ["hit", "hot", "hat"], correctWord: "hat", incorrectTypes: {
    hit: middle("a"),
    hot: middle("a")
  }},
  {words: ["Jill", "jet", "gem"], correctWord: "jet", incorrectTypes: {
    Jill: middle("e"),
    gem: ending("t")
  }},
  {words: ["lip", "lick", "lap"], correctWord: "lip", incorrectTypes: {
    lick: ending("p"),
    lap: middle("i")
  }},
  {words: ["nut", "mud", "mad"], correctWord: "mad", incorrectTypes: {
    nut: middle("a"),
    mud: middle("a")
  }},
  {words: ["nun", "nap", "knob"], correctWord: "nun", incorrectTypes: {
    nap: middle("u"),
    knob: middle("u")
  }},
  {words: ["pit", "pet", "pot"], correctWord: "pot", incorrectTypes: {
    pit: middle("o"),
    pet: middle("o")
  }},
  {words: ["run", "ring", "room"], correctWord: "run", incorrectTypes: {
    ring: middle("u"),
    room: middle("u")
  }},
  {words: ["socks", "six", "sax"], correctWord: "six", incorrectTypes: {
    socks: middle("i"),
    sax: middle("i")
  }}
];
