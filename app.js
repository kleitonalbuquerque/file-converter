var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");

var read = new Reader();

async function main() {
  var dados = await read.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  // usuarios.rows.push(["Luiz Paulo", "Formação Linux", "SO", "12"]);

  // console.log(usuarios.header);
  // console.log(usuarios.rows);
  // console.log(usuarios.rowCount);
  // console.log(usuarios.columnCount);

  var html = await HtmlParser.Parse(usuarios);
  console.log(html);
}

main();
