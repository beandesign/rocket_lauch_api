# Rocket Launch API

Projeto construído em Node com o objetivo de consumir e tratar os dados dos últimos e fúturos lançamentos de foquetes da SpaceX.
O código foi construído com alguns conceitos da Clean Architecture, que garante o desacoplamento do domínio em relação a questões de infraestrutura, frameworks, etc. A idéia é que seja fácil substituir e/ou acrescentar outras fontes de dados. Será simples acrescentar uma fonte de dados da NASA ou BlueOrigin se quisermos, ou até mesmo manipular e salvar os dados dessas origens em um database proprietário. Necessitando apenas criar um novo repositório e injetá-lo nos controllers.

4 endpoints foram criados muito similar a API da spacex. 
/upcoming
/next
/past
/latest
Todas as rotas contam com o prefixo default /v1/api

O deploy de uma versão em funcionamento foi feito no Heroku e conta com entrega continua a partir da branch main e pode ser acessado aqui.
https://rocket-launch-api-v1.herokuapp.com/v1/api/

## Todo

Algumas melhorias a serem implementadas.

- Adicionar testes de unidade e e2e
- Adicionar alguma ferramenta de log
- Adicionar alguma biblioteca de injeção de dependecia
- Substituir algumas classes concretas por interfaces

## Installation

Para rodar o projeto a primeira vez instale as dependencias e rode o primeiro build.

```sh
cd rocket_lauch_api
yarn install
yarn build
yarn start
```

