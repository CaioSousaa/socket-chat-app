<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://ik.imagekit.io/ably/ghost/prod/2021/03/socket-io-logo-1.jpeg?tr=w-1728,q-50" width="200" alt="Socket.io logo" /></a>
</p>

---

### Descrição

Esse projeto consiste na criação de um App Chat, na qual a comunicação acontece de forma simultânea entre os usuários. Para a desenvolver essa aplicação desenvolvi tanto o back-end, front-end como o servidor do Socket.io, carinha esse que é o responsável por permitir a comunicação de maneira simultânea. Optei por utilizar o mongoose como ORM para a comunicação com o banco não relacional MongoDB para persistir os dados da aplicação. Basicamente o usuário faz seu registro no Chat, e após isso ele pode interagir com todos os outros usuários já registrados

### Tecnologias utilizadas no projeto

- JavaScript
- NodeJs
- ExpressJs
- mongoose
- MongoDB
- react
- HTML/CSS
- socket.io
- Entre outros

---

### Arquitetura Back-end

Para o back-end utilizei o framework Express juntamente com o JavaScript, optei por utilizar o mongoose como ORM para a comunicação com o banco não relacional MongoDB para persistir os dados da aplicação.

A arquitetura do projeto está basicamente focada dentro da pasta src, a baixo segue a estrutura de pastas do projeto bem como a organização dos arquivos do mesmo:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
src
    - - controllers // Pasta que contém todos os arquivos que lidam com a lógica da aplicação, regras de negócios e tratamento de dados da aplicação
    - - models      // Pasta que contém os Schemas a serem seguidos para a entrada de dados da aplicação
    - - routes      // Pasta que contem as rotas para os serviços
    index.js
</pre>

Analisando a pasta <i>src/controllers</i> em especifico:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
- - chat
        - example.js  // Arquivo que lida com as regras de negócio do módulo chat

- - message
        - example.js  // Arquivo que lida com as regras de negócio do módulo message

- - user
        - example.js  // Arquivo que lida com as regras de negócio do módulo user
</pre>

Agora podemos analisar a pasta <i>src/models</i> em especifico:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
models
        - modelExample.js // Arquivo que define o esquema de dados e os atributos que cada módulo deve possuir.   
</pre>

Agora podemos analisar a pasta <i>src/routes</i> em especifico:

```
routes
        - routesExample.js // Arquivo que define as rotas da API, mapeando endpoints para os métodos correspondentes nos controladores de cada módulo.

```

Por fim iremos analisar agora o arquivo <i>index.js</i>:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
index.js  // Arquivo principal que inicializa a aplicação, configura o servidor e carrega as rotas e middleware necessários.
</pre>

### Arquitetura Front-end

Para o front-end, utilizei o React e JavaScript. A estrutura do projeto é organizada dentro da pasta client/src, com a seguinte hierarquia:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
src
    - - assets         // Pasta que contém arquivos estáticos, como imagens, fontes, etc.
    - - hooks          // Pasta que contém hooks personalizados reutilizáveis em diferentes componentes
    - - components     // Pasta que contém os componentes React da aplicação
    - - context        // Pasta que contém os contextos utilizados para gerenciar o estado global da aplicação
    - - pages          // Pasta que contém as páginas da aplicação, compostas por diferentes componentes
    - - utils          // Pasta que contém funções utilitárias reutilizáveis em diferentes partes da aplicação
    - - App.jsx        // Arquivo principal que define a estrutura da aplicação e suas rotas
    - - index.css      // Arquivo CSS global da aplicação
    - - main.jsx       // Arquivo principal que inicializa a aplicação e renderiza o componente principal (App)
</pre>

### Arquitetura Socket.io

Basicamente temos apenas o arquivo index.js.

No arquivo index.js, criamos o servidor para o Socket.io utilizando a biblioteca socket.io e o integramos com o servidor principal da aplicação. Através deste servidor, estabelecemos uma comunicação bidirecional em tempo real entre o servidor e o cliente.
