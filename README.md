# Gestão de Usuários - Backend

## Objetivo
Criar um backend robusto e escalável em **TypeScript**, seguindo a arquitetura **MVC (Model-View-Controller)**, que se conecte a um banco de dados relacional para gerenciar usuários com segurança e eficiência. O sistema inclui autenticação via JWT e é projetado para integração com um frontend, oferecendo suporte a operações de CRUD conforme necessário.

---

## Estrutura do Projeto
O backend é organizado nas seguintes camadas:

- **Controller**: Gerencia as requisições HTTP e delega ações aos serviços apropriados.
- **Routes**: Define as rotas da aplicação e mapeia para os controllers correspondentes.
- **Models**: Representa as entidades do banco de dados e a estrutura dos dados.
- **Repositories**: Executa a interação direta com o banco de dados, como operações de CRUD.
- **Services**: Implementa a lógica de negócios e interage com os repositórios.

---

## Requisitos e Tecnologias
- **Linguagem**: TypeScript
- **Banco de Dados**: Relacional (PostgreSQL/MySQL)
- **Autenticação**: JWT (JSON Web Token)
- **Ferramentas de Configuração**: Variáveis de ambiente para conexão com o banco de dados.
- **Framework Web**: Express.js

---

### Pré-requisitos
- **Node.js** (>= 14)
- **Gerenciador de Pacotes**: npm ou yarn
- **Banco de Dados**: PostgreSQL/MySQL

### Passos de Instalação
1. baixe o repositório.
2. Instale as dependências com `npm install`.
3. Execute `npx ts-node src/server.ts` para iniciar o servidor.

### Repositório Front-End:
- https://github.com/Gustavooohs/frontend
