const fs = require('fs');

//Pegar o caminho do arquivo
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile('./arquivos/texto-web.txt', 'utf-8', (erro, texto) => {
    console.log(texto);
})

// console.log(link);