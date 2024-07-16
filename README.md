# Entrevista Frontend - README

Teste Técnico de Programação Front-end

## Descrição

Desafio:
Crie uma aplicação web completa e funcional utilizando React ou Angular, que atenda aos seguintes requisitos:

Tela de Login: Deve pedir as informações de email e senha.

Tela de Tabela de Usuários: Exiba uma lista paginada de usuários com as seguintes informações:
nome, email, Nível de Acesso (1 a 5)

Implemente as funcionalidades de CRUD (Criar, Ler, Atualizar e Deletar) de usuários.

## Documentação

Infelizmente não consegui fazer a autenticação do usuário para login, então clicando no botão de login ele já redireciona para a tabela. A imagem da tela de login também não consegui fazer exatamente como no figma, passei um pouco de trabalho, e então acabei optando por editar a imagem no photoshop do que encher de divisórias no código.

Na tabela temos algumas opções, no botão de "adicionar usuários", abre um modal para preencher as informações, com validação na parte de confirmar senha, dando um erro caso as senhas estejam diferentes, tentei fazer outras validações como de no minímo 8 caracteres na senha, mas acabei não conseguindo a tempo;

Também temos o botão no ícone de lápis, abrindo outro modal, para editar o usuário;

Ao clicar no nome do usuário na lista, você é redirecionado para a página do usuário, contendo um espaço para o avatar, que ao ficar vazio, fica com a inicial do nome de cada usuário, e um botão de voltar para a tabela, além das informações do usuário claro.

O ícone da lixeira, que seria para excluir o usuário acabei não conseguindo fazer também, não encontrei o endpoint na API disponibilizada, e também não consegui achar nenhuma solução.

Deixei a página de login e a página de usuário responsiva, mas a página da tabela acabei não conseguindo.

## Como Rodar o Projeto

1 - Clone o Repositório

```bash
  git clone https://github.com/YortonFilho/CadastroDeUsuarios-CREATUS
```
    
2 - Instale as Dependências:

```bash
  cd CadastroDeUsuarios-CREATUS
  npm install
```
    
3 - Inicie o Projeto

```bash
  npm run dev
```
    

