class Table {
  constructor(arr) {
    this.header = arr[0]; // pega o primeiro elemento do array (tabela)
    arr.shift(); // remove o primeiro elemento da tabela (header)
    this.rows = arr; // pega as linhas da tabela
  }

  get rowCount() {
    return this.rows.length;
  }

  get columnCount() {
    return this.header.length;
  }
}

module.exports = Table;
