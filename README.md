# Pix Gateway API

API para gerenciamento de cobranças Pix construída com NestJS, Prisma, PostgreSQL e seguindo princípios de Clean Architecture.

## Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Linguagem fortemente tipada
- **Prisma** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **MongoDB** - Banco de dados NoSQL para dados não estruturados
- **Mongoose** - ODM para modelagem de dados MongoDB
- **Redis** - Cache em memória e gerenciamento de sessões
- **RabbitMQ** - Sistema de mensageria para comunicação assíncrona
- **Zod** - Validação de schemas e DTOs
- **Docker** - Containerização da aplicação
- **Swagger** - Documentação interativa da API

---

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

---

## Instalação

### 1. Clone o repositório

git clone https://github.com/seu-usuario/pix-gateway.git
cd pix-gateway

### 2. Instale as dependências

npm install

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

PORT=
NODE_ENV=
DATABASE_URL=
MONGODB_URI=
REDIS_URL=
RABBITMQ_URL=

### 4. Suba o banco de dados com Docker

docker-compose up -d

### 5. Execute as migrações do Prisma

npx prisma migrate dev

### 6. Inicie a aplicação

npm run start:dev

A API estará disponível em `http://localhost:3000`

---

## 📚 Documentação da API

Acesse a documentação interativa Swagger em:

http://localhost:3000/

---

## 🗂️ Estrutura do Projeto

src/
├── application/ # Casos de uso e lógica de negócio
│ └── charge/
│ ├── controllers/ # Controllers HTTP
│ ├── dto/ # DTOs e schemas Zod
│ └── services/ # Serviços da aplicação
├── domain/ # Entidades e regras de negócio
│ └── charge/
│ ├── charge.entity.ts
│ └── charge.repository.ts
├── infra/ # Infraestrutura e implementações
│ └── database/
│ ├── prisma/
│ └── repositories/
├── common/ # Código compartilhado
│ ├── pipes/ # Pipes de validação
│ └── filters/ # Filtros de exceção
└── main.ts # Ponto de entrada da aplicação

---

## 🛠️ Endpoints principais

### Criar Cobrança

POST /charges
Content-Type: application/json

{
"payer_name": "John Doe",
"payer_document": "12345678901",
"amount": 15000,
"description": "Pagamento reserva hotel"
}

### Buscar Cobrança por ID

GET /charges/:id

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👤 Autor

Desenvolvido por Mariana Bastos
