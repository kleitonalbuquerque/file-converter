const fs = require("fs");

class Reader {
  Read(filepath) {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        console.log("Ops! Algo deu errado!");
      } else {
        console.log(data);
      }
    });
  }
}

module.exports = Reader;
