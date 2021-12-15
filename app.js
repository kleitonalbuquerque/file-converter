var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var read = new Reader();

async function main() {
  var dados = await read.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  // console.log(usuarios.header);
  console.log(usuarios.rows);
}

main();
