const fs = require("fs");

fs.writeFile("./texto", "Novo conteúdo do arquivo", (err) => {
  if (err) {
    console.log("Erro durante salvamento...");
  }
});
