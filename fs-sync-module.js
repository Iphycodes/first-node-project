const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/first-and-second.txt",
  `This are the both files: ${first}, ${second}`,
  { flag: "a" }
);
