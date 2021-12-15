const fs = require("fs");

fs.readFile("./mariana", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Ocorreu uma falha durante a leitura do arquivo!");
  } else {
    console.log(data);
  }
});
