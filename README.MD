# Grupo Stars e seus colaboradores 
## Instalação
### Pré-requisitos
MongoDb, caso não tenha faça o download [Aqui](https://www.mongodb.com/try#community)
 
Node.js, caso não tenha faça o download [Aqui](https://nodejs.org/en/)

### Instalando as Dependências
+ Abra o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto cd "C:\Users\NomeDoComputador\Documents\...".
Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

+ npm start

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

node_modules - que contêm os packages do npm que precisará para o projeto.

+ Crie na raiz da pasta "backend" um arquivo de nome “.env” e dentro dele digite
MONGODB_CONNECTION='coloque aqui a url de conexão com o banco mongodb'
Além disso, se quiser escolher a porta para conexão, digite abaixo do item mencionado 
PORT=Número da porta

### Executando a Aplicação
Agora com pasta raiz do projeto aberta no cmd, basta iniciar o servidor Node e a aplicação React usando o comando:

npm run dev

- Esse comando irá iniciar as duas partes da aplicação ao mesmo tempo.

## Utilizando a aplicação
### Para que serve essa aplicação?

Essa aplicação foi criada com o objetivo de permitir a criação e visualização das empresas e colaboradores que compõem o Grupo Stars.

### Como utilizar?

Na pagina inicial são apresentadas todas as empresas cadastradas, clique no nome da empresa para saber suas informações e visualizar os seus colaboradores. Além disso, para acessar os dados de um colaborador também deve-se clicar em seu nome. Para registrar uma nova empresa deve-se clicar no botão “Adicionar empresa”, na página inicial. Para registrar  um colaborador, é necessário acessar as informações de alguma empresa, clicando em seu nome e posteriormente acessar o botão “adicionar colaborador” no canto superior direito.
