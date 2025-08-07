<h1>Quem joga?</h1>
<p>O Quem Joga? permite que os usuários acompanhem as ligas de futebol e os jogos programados para o dia atual. Ele oferece uma busca por liga, onde o usuário pode digitar o nome da liga desejada e, em seguida, visualizar os jogos programados para aquele dia. O app exibe informações detalhadas sobre os jogos, incluindo os times participantes, a hora do jogo e os logos das equipes. A interface é simples e fácil de usar, proporcionando uma experiência rápida e intuitiva para quem deseja se manter atualizado com os jogos de futebol.</p>
<br>

<img src="https://github.com/Caiorossi00/QuemJoga/blob/main/QuemJoga.png?raw=true" alt="Interface do app quem joga" />
<br>

<hr>

<h1>Frontend</h1>
  <p>Este é o frontend para a aplicação que consulta informações sobre ligas de futebol e jogos programados para o dia atual. Ele consome a API de Futebol e exibe os resultados de acordo com as interações do usuário.</p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>React</strong>: Biblioteca JavaScript para construção de interfaces de usuário.</li>
    <li><strong>Axios</strong>: Biblioteca para fazer requisições HTTP.</li>
    <li><strong>SCSS</strong>: SASS para estilização do frontend.</li>
  </ul>

  <h2>Componentes Principais</h2>

  <h3><code>Header</code></h3>
  <p>Componente responsável por mostrar o título, o campo de input para o nome da liga e o botão de pesquisa. O usuário pode buscar ligas e, ao encontrar a liga desejada, consultar os jogos programados para o dia atual.</p>

  <h4>Funcionalidades do <code>Header</code>:</h4>
  <ul>
    <li>Entrada de texto para digitar o nome da liga.</li>
    <li>Botão de pesquisa que envia a solicitação para a API.</li>
    <li>Exibe uma imagem ilustrativa ao lado do formulário.</li>
  </ul>

  <h3><code>Table</code></h3>
  <p>Componente responsável por exibir os jogos para o dia atual, listando os jogos de acordo com a liga selecionada.</p>

  <h4>Funcionalidades do <code>Table</code>:</h4>
  <ul>
    <li>Exibe a lista de jogos com os times e a hora do jogo.</li>
    <li>Se não houver jogos, exibe uma mensagem para que o usuário busque por uma liga.</li>
    <li>Formatação da hora do jogo no formato de hora e minuto.</li>
  </ul>

<hr>

<h1>Backend</h1>
<p>Este backend fornece informações sobre ligas de futebol e jogos programados para o dia atual, utilizando a API da RapidAPI de Futebol. A aplicação permite que os usuários consultem ligas e jogos de futebol por meio de endpoints REST.</p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>Node.js</strong>: Plataforma para execução de JavaScript no servidor.</li>
    <li><strong>Express</strong>: Framework para construção de APIs.</li>
    <li><strong>Axios</strong>: Biblioteca para fazer requisições HTTP.</li>
    <li><strong>CORS</strong>: Middleware para permitir requisições entre domínios diferentes.</li>
    <li><strong>dotenv</strong>: Carregamento de variáveis de ambiente a partir de um arquivo <code>.env</code>.</li>
  </ul>

  <h2>Funcionalidades</h2>

  <h3>1. Rota Principal (<code>/</code>)</h3>
  <p>Retorna uma mensagem simples indicando que a API está funcionando.</p>
  <p><strong>Método:</strong> GET</p>

  <h3>2. Obter todas as ligas de futebol (<code>/api/leagues</code>)</h3>
  <p>Retorna uma lista das ligas de futebol disponíveis através da API de Futebol.</p>
  <p><strong>Método:</strong> GET</p>
  <p><strong>Resposta:</strong> Um array de ligas com informações como <code>id</code>, <code>nome</code> e <code>país</code>.</p>

  <h3>3. Obter jogos para uma liga específica (<code>/api/games/:leagueId</code>)</h3>
  <p>Retorna os jogos programados para uma liga específica no dia atual.</p>
  <p><strong>Método:</strong> GET</p>
  <p><strong>Parâmetro:</strong> <code>leagueId</code> (ID da liga)</p>
  <p><strong>Resposta:</strong> Uma lista de jogos, contendo informações como <code>id</code>, <code>data</code>, <code>estádio</code>, <code>time_casa</code> e <code>time_fora</code>.</p>

  <h2>Endpoints</h2>

  <h3><code>GET /</code></h3>
  <p>Retorna uma mensagem simples indicando que a API está funcionando.</p>

  <h3><code>GET /api/leagues</code></h3>
  <p>Retorna a lista de ligas de futebol disponíveis.</p>

  <h3><code>GET /api/games/:leagueId</code></h3>
  <p>Retorna os jogos programados para o dia atual para uma liga específica.</p>

<hr>
<h2>Atualizações em 07/08</h2>

<p>No dia <strong>07/08</strong>, com mais conhecimento e experiência adquiridos, retornei ao projeto para corrigir e aprimorar alguns aspectos da aplicação. As principais melhorias e correções realizadas foram:</p>

<ul>
  <li><strong>Correção do CORS</strong> no backend para permitir requisições da aplicação frontend hospedada em diferentes domínios (local e produção).</li>
  
  <li><strong>Implementação do uso de variáveis de ambiente</strong> para configuração dinâmica das URLs da API, facilitando o desenvolvimento local e o deploy em produção.</li>
  
  <li><strong>Ajuste no frontend</strong> para consumir a API usando a variável de ambiente <code>REACT_APP_API_URL</code>, garantindo que as chamadas funcionem corretamente tanto localmente quanto em ambiente de produção.</li>
  
  <li><strong>Integração dos dados da API com imagens locais</strong> das ligas, para exibir logos e imagens mesmo quando a API não fornece imagens.</li>
  
  <li><strong>Melhorias na experiência do usuário</strong> na busca por ligas e na exibição de jogos, incluindo tratamento de erros e mensagens mais claras.</li>
</ul>

