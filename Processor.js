class Processor {
  static Process(data) {
    var datasCSV = data.split("\r\n");
    var rows = [];

    datasCSV.forEach((row) => {
      var arr = row.split(";");
      rows.push(arr);
    });
    return rows;
    // console.log(rows);
  }
}

module.exports = Processor;
