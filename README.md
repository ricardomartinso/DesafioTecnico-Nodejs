# CPFs Restritos-API

Um projeto de desafio técnico proposto para criação de uma API para possibilitar a análise antifraude do ecommerce através do listamento de CPFS restritos em uma planilha eletrônica

<p align="center">
  <img src="https://user-images.githubusercontent.com/87649154/217006765-eba4eb62-b105-48ff-8d03-ce8165e94d78.png"/>
</p>
<h1 align="center">
  CPFs Restritos-API
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Descrição

CPFs Restritos-API simula uma REST API que possibilita a criação de CPFS restritos. Nesta planilha são adicionados CPFs com risco de fraude, utilizei as seguintes tecnologias no projeto: NodeJs, Typescript, ExpressJs, PostgreSQL, PrismaORM, Jest e Docker.

</br>

<br/>

# Motivações de tecnologia

Utilizei alguma das tecnologias que mais venho me aprimorando no último ano que é o Typescript com PostgreSQL, PrismaORM, Jest para testes unitários e Docker, utilizei do padrão RESTful para a criação da API e arquitetei o código no modelo MVC (Model View Controller), onde está demonstrado dentro da pasta /src.

</br>

## Features

- Adicione um CPF a lista restrita de CPFS.
- Verificar se um determinado CPF está na lista restrita.
- Remover um CPF da lista restrita.
- Visualizar todos os CPFs que estão na lista restrita.

</br>

## Referência da API

## Cadastre um CPF na lista restrita.

```http
POST /cpf
```

#### Request:

| Body  | Type                  | Description       |
| :---- | :-------------------- | :---------------- |
| `cpf` | `string (CPF VÁLIDO)` | **Required**. CPF |

#### Response:

Status: 201 CREATED

#

## Verifica se um CPF está adicionado na lista restrita

```http
GET /cpf/{cpf}
```

#### Request:

| PATH PARAM | Type                  | Description       |
| :--------- | :-------------------- | :---------------- |
| `cpf`      | `string (CPF VÁLIDO)` | **Required**. CPF |

`http://localhost:{porta}/cpf/{cpf}`

</br>

#### Response:

```json
{
  "cpf": "81268848190",
  "createdAt": "DATA NO FORMATO ISO 8601 - UTC"
}
```

#

## Deletar um CPF da lista de restritos.

```http
DELETE /cpf/{cpf}
```

#### Request:

| PATH PARAM | Type                  | Description       |
| :--------- | :-------------------- | :---------------- |
| `cpf`      | `string (CPF VÁLIDO)` | **Required**. CPF |

#### Response:

Status: 200 OK

#

## Listar todos os CPFs restritos.

```http
GET /cpf
```

#### Response:

```json
{
  [
    { "cpf": "64852893055", "createdAt": "2019-12-17T22:22:08.547Z"} ,
    { "cpf": "81268848190", "createdAt": "2023-12-17T22:22:08.547Z"}
  ]
}
```

#

## Rode Localmente

Irá precisar de : Docker.

Clone o projeto

ou

Baixe o projeto e extraia

Vá para o diretório do projeto

```bash
  cd DesafioBackendMaxMilhas/
```

## Rodando pelo docker

Ao entrar, verifique se o .env está com as variáveis preenchidas e o DATABASE_URL que está abaixo de # DOCKER URL está descomentado.
Se estiver tudo certo acima, rode o comando no terminal dentro da pasta.

```bash
    docker-compose up
```

Com isso o Docker irá rodar e criar um Container para poder testar a aplicação

Obs: por padrão o Docker já irá rodar os testes unitários que eu fiz dentro da pasta /src/tests e logo em seguida ele abrirá o servidor
que ficará localizado na porta 5000

## Rodando localmente

Para rodar localmente você precisará do NPM e utilize os seguintes comandos:

```bash
    npm i && npm start
```

Em seguida você precisará descomentar o DATABASE_URL que está abaixo de DEVELOPMENT e utilizar as suas configurações do POSTGRES.

</br>

## Lições aprendidas

Nesse projeto pude me aprimorar bastante em como utilizar o Docker e rodar uma aplicação completa utilizando Typescript, Postgresql, Prisma e testes unitários e acredito que é um projeto bastante completo tanto para treinar quanto para me aprimorar.

</br>

## Autor

- Ricardo Martins é um Desenvolvedor Full-stack. Atualmente cursando Engenharia da Computação e querendo me tornar um Desenvolvedor!
  <br/>

#
