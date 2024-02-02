<h1 align="center">💡 API Node.js e MySQL - Entra21</h1>
<table>
<tr>
<td>
Este projeto é um CRUD básico feito em nodeJS e SQL utilizando bibliotecas como sequelize e express, além de utilizar postman para testar a API
</td>
</tr>
</table>


## 🛠️ Funcionalidades / Métodos
### `POST`
  - Este método serve para criar registros de produtos, entradas e saídas de estoque, salvando-os no banco de dados.

### `GET`
  - Este método é utilizado para buscar informações no banco de dados, exemplos destes métodos na apliacação são:
    - Obter Todos os Produtos / Entradas / Saidas;
    - Obter Produto / Entrada / Saida por Id;
    - Obter Entradas / Saídas pelo Id do Produto.

### `PUT`
  - Este método atualiza um registro nas Tabelas Produtos / Entradas_Estoque / Saidas_Estoque através da Primary Key.

### `DELETE`
  - Este método deleta um registro nas Tabelas Produtos / Entradas_Estoque / Saidas_Estoque através da Primary Key.


## ⚙️ Como usar

Para clonar essa aplicação você vai precisar [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) ( com [npm](http://npmjs.com)) instalados em seu computador. Após isso execute os seguintes comandos:

```bash
# Clone this repository
$ git clone https://github.com/Ariel-Alejandr0/ControleDeEstoqueApi.git

# Go into the repository
$ cd ControleDeEstoqueApi

# Install dependencies
$ npm install

# Run the app
$ node app.js
```

## Feito com

- [mysql](https://www.mysql.com/) - Flexible, scalable database.
- [Node](https://nodejs.org/en) -  JavaScript runtime environment.

## 🙇‍♂️ Agradecimentos

* [Ariel](https://github.com/Ariel-Alejandr0/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
