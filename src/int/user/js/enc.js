const encryption = () => {
  var enc = "";
  for (var i = 0; i < encChar.length; i++) {
    enc = enc + encChar[i];
  }
  return enc;
};

const characters = {
  "0122": "a",
  "1000": "b",
  "1010": "c",
  "1002": "d",
  "0222": "e",
  "0010": "f",
  "1102": "g",
  "0000": "h",
  "0022": "i",
  "0111": "j",
  "1012": "k",
  "0100": "l",
  "1122": "m",
  "1022": "n",
  "1112": "o",
  "0110": "p",
  "1101": "q",
  "0102": "r",
  "0002": "s",
  "1222": "t",
  "0012": "u",
  "0001": "v",
  "0112": "w",
  "1001": "x",
  "1011": "y",
  "1100": "z",
  "0301": ".",
};

const encChar = [
  characters["0001"],
  characters["0122"],
  characters["1222"],
  characters["0100"],
  characters["1022"],
  characters["0222"],
  characters["1222"],
  characters["0301"],
  characters["1122"],
  characters["1011"],
  characters["0010"],
  characters["1222"],
  characters["0110"],
  characters["0301"],
  characters["1112"],
  characters["0102"],
  characters["1102"],
];
