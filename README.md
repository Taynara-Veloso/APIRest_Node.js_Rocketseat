# Api Rest With Node.js
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Executando Projeto
```
npm run dev
```
### Navegador 
```
localhost:3333/home
```

* Criar Pasta do projeto
* Criar o arquivo package.json
  ```
  npm init -y
  ```
* Criar pasta src
* Criar arquivo server.js
* Instalar TypeScript como uma dependência de desenvolvimento
  ```
  npm i -D typescript
  ```
  * O Node não suporta TypeScript
  * TypeScript pode ser considerado uma linguagem de programação?
    ```
    * Sim, apesar de antes ser considerado apenas um superset, com a presença de runtimes (Deno e Bun) que executam o TypeScript nativamente, ele pode ser considerado uma linguagem.
    ```
  * Qual é a principal vantagem do TypeScript em relação ao JavaScript?
    ```
    * TypeScript fornece tipagem estática, melhorando a qualidade do código e facilitando a manutenção.
    ```
  * O que é uma "interface" em TypeScript?
    ```
    * Um conjunto de tipos que especificam as propriedades e métodos que um objeto deve ter.
    ```
  * É possível usar TypeScript com o Fastify?
    ```
    * Sim, o Fastify tem suporte nativo ao TypeScript.
    ```
* Criar arquivo tsconfig.json
  `mudar versão do target para 2020`
  ```
  npx tsc --init
  ```
* Converter Arquivo .ts para .js
  ```
  npx tsc src/nomeDoArquivo.ts
  ```
* Instalar Fastify
  ```
  npm i fastify
  ```
  O que é o Fastify?
    * Um microframework web rápido e minimalista para Node.js
* Instalar Dependência `(ajuda a gerar o arquivo .js)`
  ```
  npm install -D @types/node
  ```
* Instalar Dependência `(automatiza o processo de transformar um arquivo .ts em .js o roda o arquivo .js)`
  ```
  npm install tsx -D
  ```
* Instalar Eslint (opcional)
  ```
  npm i eslint @rocketseat/eslint-config -D
  ```

## Knex
```
npm install knex sqlite3
```

## My First Migration

### migrations é um controlador de versão dentro do nosso banco de dados

Assim como você usa sistemas de controle de versão como o Git para gerenciar alterações no seu código-fonte, você pode usar migrações para manter o controle das alterações no banco de dados. Com migrações, você pode transferir seu banco de dados existente para outro estado e vice-versa: Essas transições de estado são salvas em arquivos de migração, que descrevem como chegar ao novo estado e como reverter as alterações para voltar ao estado antigo.

### configurando migrations

* criando arquivo knexfile.js `(importando as configurações do banco e exportando)`

* Configurando package.json
```json
"scripts": {
  "knex": "node --no-warnings --import tsx ./node_modules/knex/bin/cli.js",
}
```
```js
//para criar a migration
npm run knex -- migrate:make create-documents
```