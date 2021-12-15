const fs = require("fs");

function modificarUsuario(nome, curso, categoria) {
  fs.readFile("./usuario.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Um erro aconteceu");
    } else {
      var conteudo = JSON.parse(data); // converte de texto para objeto javascript(JSON)

      conteudo.nome = nome;
      conteudo.curso = curso;
      conteudo.categoria = categoria;

      fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) => {
        if (err) {
          console.log("Um erro aconteceu durante a escrita");
        }
      }); // JSON.stringify(conteudo) converte deobjeto javascript(JSON) para texto

      console.log(conteudo);
    }
  });
}

modificarUsuario("José", "Formação Laravel", "PHP");
