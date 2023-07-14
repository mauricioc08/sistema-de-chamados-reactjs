# Sistema de Chamados em Reactjs

O Sistema de Chamados é um aplicativo de gerenciamento de chamados de suporte. Os usuários podem criar chamados, acompanhar o status e receber suporte personalizado. Os administradores têm acesso a recursos adicionais, como gerenciamento de usuários, categorias de chamados e relatórios.

## Pré-requisitos

Antes de começar, certifique-se de cumprir os seguintes requisitos:

- Node.js instalado
- Conta do Firebase com projeto configurado
- Banco de dados Firestore configurado no projeto do Firebase
- Autenticação com e-mail/senha configurada no projeto do Firebase

## Instalação

Siga estas etapas para configurar e executar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/mauricioc08/sistema-de-chamados-reactjs.git
```
Navegue para o diretório do projeto:

```bash
cd sistema-chamados
```
Instale as dependências do projeto:

```bash
npm install
```
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

```bash
REACT_APP_API_KEY=<SUA_API_KEY_DO_FIREBASE>
REACT_APP_AUTH_DOMAIN=<SEU_AUTH_DOMAIN_DO_FIREBASE>
REACT_APP_PROJECT_ID=<SEU_PROJECT_ID_DO_FIREBASE>
REACT_APP_STORAGE_BUCKET=<SEU_STORAGE_BUCKET_DO_FIREBASE>
REACT_APP_MESSAGING_SENDER_ID=<SEU_MESSAGING_SENDER_ID_DO_FIREBASE>
REACT_APP_APP_ID=<SEU_APP_ID_DO_FIREBASE>
```
Certifique-se de substituir os valores <...> pelas informações corretas do seu projeto do Firebase.

Execute o projeto:

```bash
npm start
```
O aplicativo será executado em http://localhost:3000.

## Uso

## Autenticação

- Na página inicial, você encontrará opções para fazer login ou se cadastrar como um novo usuário.
- Clique em "Cadastre-se" para criar uma nova conta. Preencha o formulário de cadastro com seu nome, e-mail e senha e clique em "Registrar".
- Se você já tiver uma conta, clique em "Login" e insira seu e-mail e senha para fazer login no sistema.
## Cadastro de Usuário
- Após fazer login, você poderá editar suas informações de perfil clicando em "Perfil" no canto superior esquerdo da página.
- No formulário de edição de perfil, você pode alterar seu nome e foto. Clique em "Salvar" para atualizar suas informações.
## Cadastro de Empresa
- Os administradores podem cadastrar empresas no sistema.
- Na página "Clientes".
- Na página de Clientes, você pode adicionar uma nova empresa clicando em "Adicionar Empresa". Preencha o formulário com o nome e descrição da empresa e clique em "Salvar".
## Cadastro de Chamados
- Na página inicial, você pode criar um novo chamado clicando em "Novo Chamado".
- Preencha o formulário de criação do chamado com as informações necessárias, como título, descrição e categoria.
- Após criar o chamado, ele será exibido na lista de chamados na página inicial.
## Acompanhamento de Chamados
- Na página inicial, você pode ver uma lista dos chamados criados por você.
- Clique em um chamado para ver detalhes adicionais, como o status atual, as respostas e as interações relacionadas.
## Gerenciamento de Usuários (Administradores)
- Os administradores têm acesso ao gerenciamento de usuários.
- Na página "Administração", clique em "Regras".
- Na página de regras, você pode visualizar a lista de usuários registrados no sistema.
- É possível editar as informações do usuário, .
- Os administradores também têm a opção de excluir um usuário do sistema.
## Gerenciamento de Empresas (Administradores)
- Os administradores têm acesso ao gerenciamento de empresas.
- Na página "Administração", clique em "Empresas".
- Na página de empresas, você pode visualizar a lista de empresas cadastradas no sistema.
- É possível editar as informações da empresa, como nome e descrição.
- Os administradores também têm a opção de excluir uma empresa do sistema.
## Gerenciamento de Chamados (Administradores)
- Os administradores têm acesso ao gerenciamento de chamados.
- Na página "Administração", clique em "Chamados".
- Na página de chamados, você pode visualizar a lista de todos os chamados registrados no sistema.
- É possível filtrar os chamados por categoria e status.
- Os administradores podem alterar o status de um chamado, atribuí-lo a um usuário específico e adicionar respostas.
## Contribuição
Contribuições são bem-vindas! Se você tiver algum problema, sugestão ou solicitação de recursos, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença
- Este projeto está licenciado sob a MIT License.
