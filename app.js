var Reader = require("./Reader");
var Writer = require("./Whiter");
var PDFWriter = require("./PDFWriter");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");

var reader = new Reader();
var writer = new Writer();

async function main() {
  var dados = await reader.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  // usuarios.rows.push(["Luiz Paulo", "Formação Linux", "SO", "12"]);

  // console.log(usuarios.header);
  // console.log(usuarios.rows);
  // console.log(usuarios.rowCount);
  // console.log(usuarios.columnCount);

  var html = await HtmlParser.Parse(usuarios);

  writer.whrite("./fs/" + Date.now() + ".html", html); // gera o arquivo dentro do path fs
  PDFWriter.writePDF("./fs/" + Date.now() + ".pdf", html);
  console.log(html);
}

main();
