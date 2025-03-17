# AluraNodeJSBiblioteca

# Biblioteca de Identificação de Palavras Duplicadas

Este projeto é uma biblioteca desenvolvida em Node.js para identificar palavras duplicadas em textos. Ele recebe um arquivo de entrada, processa seu conteúdo e gera um arquivo de saída com a lista de palavras repetidas.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução para JavaScript no lado do servidor.
- **Commander.js** - Para criação de interface de linha de comando (CLI).
- **Chalk** - Para exibir mensagens coloridas no terminal.

## Instalação

Para utilizar a biblioteca, siga os passos abaixo:

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

A biblioteca pode ser utilizada via linha de comando (CLI).

### Exemplo de Uso via CLI

Execute o comando abaixo para identificar palavras duplicadas em um arquivo de texto:

```sh
node cli.js -t caminho/do/arquivo.txt -d caminho/do/destino
```

Onde:
- `-t` ou `--texto` especifica o caminho do arquivo de entrada.
- `-d` ou `--destino` especifica o diretório onde o resultado será salvo.

### Exemplo de Saída

Se o arquivo de entrada contiver:
```
Este é um texto de exemplo.
Este texto possui palavras repetidas, repetidas vezes.
```
A saída será salva em `resultado.txt` e pode conter:
```
palavras repetidas no parágrafo 2: repetidas
```

## Estrutura do Projeto

```
├── erros/
│   ├── funcoesErro.js
├── src/
│   ├── cli.js (Interface de Linha de Comando)
│   ├── index.js (Módulo principal)
│   ├── helpers.js (Funções auxiliares)
│   ├── erros/
└── package.json
```

## Funcionalidades Principais

- **`contaPalavras(texto)`**: Processa um texto e identifica palavras repetidas.
- **`verificaPalavrasDuplicadas(texto)`**: Analisa cada parágrafo e conta ocorrências de palavras com 3 ou mais letras.
- **`montaSaidaArquivo(listaPalavras)`**: Formata os resultados para salvar em um arquivo.
- **`cli.js`**: Interface de linha de comando para interagir com a biblioteca.

## Dependências

As seguintes dependências são utilizadas neste projeto:

```json
{
  "dependencies": {
    "chalk": "^5.2.0",
    "commander": "^11.0.0"
  }
}
```

## Contribuição

Sinta-se à vontade para abrir *issues* e enviar *pull requests* com melhorias e correções.



