var Reader = require("./Reader");
var Processor = require("./Processor");

var read = new Reader();

async function main() {
  var dados = await read.Read("./users.csv");

  var dadosProcessados = Processor.Process(dados);
}

main();
