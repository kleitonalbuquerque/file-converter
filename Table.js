class Table {
  constructor(arr) {
    this.header = arr[0]; // pega o primeiro elemento do array (tabela)
    arr.shift(); // remove o primeiro elemento da tabela (header)
    this.rows = arr; // pega as linhas da tabela
  }
}

module.exports = Table;
