class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){ //com o GET ele tem que retornar algo
        return this.rows.length; //retorna a quantidade de rows
    }

    get ColumnCount(){
        return this.header.length; //retorna a quantidade de colunas
    }

}

module.exports = Table;