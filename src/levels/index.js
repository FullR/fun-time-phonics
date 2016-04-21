import Level1 from "./1";
import Level1m from "./1-m";
import Level1l from "./1-l";
import Level1n from "./1-n";
import Level1r from "./1-r";
import Level1g from "./1-g";
import Level1s from "./1-s";
import Level2 from "./2";
import Level2d from "./2-d";
import Level2p from "./2-p";
import Level2k from "./2-k";
import Level2f from "./2-f";
import Level2m from "./2-m";
import Level2b from "./2-b";
import Level3 from "./3";
import Level4 from "./4";
import Level5 from "./5";
import Level6 from "./6";
import Level7 from "./7";
import Level8 from "./8";
import Level9 from "./9";
import Level10 from "./10";
import Level11 from "./11";
import Level12 from "./12";

const levels = {
  "1": Level1,
  "1-m": Level1m,
  "1-l": Level1l,
  "1-n": Level1n,
  "1-r": Level1r,
  "1-g": Level1g,
  "1-s": Level1s,
  "2": Level2,
  "2-d": Level2d,
  "2-p": Level2p,
  "2-k": Level2k,
  "2-f": Level2f,
  "2-m": Level2m,
  "2-b": Level2b,
  "3": Level3,
  "4": Level4,
  "5": Level5,
  "6": Level6,
  "7": Level7,
  "8": Level8,
  "9": Level9,
  "10": Level10,
  "11": Level11,
  "12": Level12
};

levels.get = function getLevelFromId(levelId) {
  if(levels.hasOwnProperty(levelId)) {
    return levels[levelId];
  } else {
    throw new Error(`No level exists with the id: ${levelId}`);
  }
};

export default levels;
