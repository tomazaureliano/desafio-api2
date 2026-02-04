# MovieNight : Descubra o que assistir de forma fácil e rápida!
<img width="1864" height="831" alt="Captura de tela 2026-02-04 194010" src="https://github.com/user-attachments/assets/69bb7aa1-a054-4c51-b56f-023df6b85bf4" />


## Descrição

O MovieNight é uma plataforma moderna de exploração cinematográfica que oferece aos usuários um catálogo atualizado e detalhado sobre os filmes de maior sucesso. 

## Funcionamento

O projeto é um Web App com Landing Page, vitrine de contéudo com filtros de gênero e search bar integrada com API, e rotas dinâmicas com páginas individuais de filmes.

## Instruções de Execução

Para rodar o projeto localmente, siga os passos abaixo no terminal:

Clonar o Repositório:

`git clone [https://github.com/tomazaureliano/desafio-api2.git](https://github.com/tomazaureliano/desafio-api2/tree/master)`

Instalar Dependências:

`npm install`

> [!NOTE]
> Configurar Variáveis de Ambiente: Altere o nome de .env.example para .env.local e insira sua chave de API
>`NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui`

Executar o Servidor de Desenvolvimento:

`npm run dev`

Acesse o projeto em http://localhost:3000.

## API Utilizada

O projeto consome dados da TMDB API (The Movie Database), utilizando os seguintes recursos:

GET /movie/popular: Para alimentar a vitrine inicial.

GET /search/movie: Para a funcionalidade de busca por texto.

GET /discover/movie: Para a filtragem refinada por gêneros.

GET /movie/{id}: Para a recuperação de metadados na página de detalhes.

##Observações Técnicas

Configuração de Imagens: O arquivo next.config.ts foi configurado com remotePatterns para autorizar e otimizar o domínio image.tmdb.org, garantindo segurança e performance no carregamento dos pôsteres.

Componentização: Utilização de uma arquitetura baseada em componentes reutilizáveis (Button, MovieCard, SearchBar).

Server Components: As buscas de dados da API são realizadas no lado do servidor (Server-side), melhorando o SEO e a velocidade de carregamento inicial.

Dynamic Routing: Implementação de rotas dinâmicas [id] para renderização eficiente de milhares de páginas de filmes com um único template.


