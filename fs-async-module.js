const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, success) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = success;

  readFile("./content/second.txt", "utf8", (err, success) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = success;

    writeFile(
      "./content/async-fist-and-second",
      `This are the both files: ${first}, ${second}`,
      (err, success) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(success);
      }
    );
  });
});
