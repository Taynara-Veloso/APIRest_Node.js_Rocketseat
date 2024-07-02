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
### Para criar a migration
```bash
npm run knex -- migrate:make nome-da-migration
```

### Executar migration 
```bash
npm run knex -- migrate:latest
```

### Para desfazer uma migration e poder alterar
```bash
npm run knex -- migrate:rollback
```

#### Extensão DotEnv
Dotenv é um módulo de dependência zero que carrega variáveis ​​de ambiente de um .envarquivo em process.env. Armazenar a configuração no ambiente separada do código é baseado na metodologia The Twelve-Factor App .

[Documentação](https://www.npmjs.com/package/dotenv)
```bash
npm i dotenv
```
---
## Questions and Answers
### Qual é o principal objetivo da biblioteca Zod?
```
Validar tipos e formatos de dados
```
### Como é possível acessar uma variável ambiente em um programa escrito em JavaScript?
```
Usando a variável global process.env
```
### Em que situações é importante usar variáveis ambiente?
```
* Quando há informações sensíveis, como senhas ou tokens, que precisam ser mantidas em segredo
* Quando há configurações que precisam ser alteradas entre diferentes ambientes sem modificar o código-fonte
```
### O que são variáveis ambiente?
```
Variáveis que só existem em determinado ambiente, como o desenvolvimento ou produção
```
### Qual é o método do Knex para realizar uma query de seleção de todos os registros de uma tabela?
```
knex...select()
```
### Qual é o método do Knex para realizar uma query de inserção em uma tabela?
```
knex...insert()
```
### Qual é o comando do Knex para reverter a última migration aplicada?
```
knex migrate:rollback
```
### Qual é o comando do Knex para rodar todas as migrations pendentes?
```
knex migrate:latest
```
### Qual é o comando do Knex para criar uma nova migration?
```
knex migrate:make
```
### Por que é importante usar migrations ao invés de modificar diretamente o esquema do banco de dados?
```
* Porque migrations ajudam a manter a integridade dos dados
* Porque migrations permitem rollback de modificações
* Porque migrations tornam o processo de atualização do banco de dados mais fácil
* Porque migrations são mais rápidas que modificações diretas
```
### O que são migrations?
```
São scripts que modificam o esquema do banco de dados
```
### Com um query builder é possível trocar de banco de dados sem modificar as querys?
```
Depende da documentação e da compatibilidade do query builder com outros bancos de dados.
```
### Qual é a principal vantagem de usar um query builder em vez de um driver nativo no Node.js?
```
Um query builder é mais fácil de usar e oferece uma API mais intuitiva
```