# Nodejs + ES5 + Eslint(airbnb) + Sequelize + Postgress + Jwt + Jest

## Iniciando o projeto.

- Criar o projeto com yarn.
- Implementar o express utilizando Classes. (middlewares e rotas).

## Nodemon e Sucrase
- Instalar o nodemon e sucrase e configura-los.
- package.json:

```
"scripts": {
  "dev": "nodemon src/server",
  "dev:debug": "nodemon --inspect src/server"
}

```
- nodemon.json:

```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

## Banco de Dados

- Utilizar [Sequelize](https://sequelize.org/) e Postgres.
- Libs (sequelize,pg e sequelize-cli -D);
- Organizar os arquivos. Migrations e Seeders.
- Configurar .sequelizerc. Exemplo [aki](https://gist.github.com/Ataide/088c87aadc2601cc0956063dc44d1a03).
- Configurar o config/database.js. [Exemplo](https://gist.github.com/Ataide/dd23205bd4536dad55c3139ef4a967a3) aki.
- Configurar o index.js dos models;

## Migrations

- Implementar migration paracriar a Tabela de Usuario.
``` yarn sequelize migration:create --name=create-anything ```
- Fields defines; { type: 'Sequelize.INTEGER', primaryKey: true, autoIncrement: true, allowNull: false, unique: true}
- Fields createdAt e updatedAt {Date e allowNull}.
- Executar migrations. 
``` yarn sequelize db:migrate ```

## Models
- Criar model de usuario e testar se estar salvando.

## Jest

- Para o jest tive que instalar o @sucrase/jest-plugin e configular no jest.cofig.js
```
transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },

```




 




