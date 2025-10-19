# Pix Gateway API

API para gerenciamento de cobranças Pix construída com NestJS, TypeScript e Prisma, seguindo princípios de Clean Architecture. Suporta PostgreSQL, MongoDB, Redis e RabbitMQ.

## Tecnologias

- NestJS, TypeScript
- Prisma + PostgreSQL
- MongoDB + Mongoose
- Redis
- RabbitMQ
- Zod (validação)
- Docker & Docker Compose
- Swagger

---

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

---

## Instalação rápida

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pix-gateway.git
cd pix-gateway
```

2. Instale dependências

```bash
npm install
```

3. Crie e edite `.env` na raiz

PORT=
<br>
NODE_ENV=
<br>
DATABASE_URL=
<br>
MONGODB_URI=
<br>
REDIS_URL=
<br>
RABBITMQ_URL=

4. Suba serviços de infraestrutura via Docker

```bash
docker-compose up -d
```

5. Gere cliente Prisma e aplique migrations (usando npm scripts)

```bash
npm run generate
npm run migrate:dev
npm run studio
```

(ou, alternativamente)

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

6. Inicie a aplicação em modo desenvolvimento

```bash
npm run start:dev
```

A API ficará disponível em `http://localhost:3000/`

---

## Documentação (Swagger)

A documentação interativa está disponível em:
http://localhost:3000/swagger

---

## Estrutura do projeto

src/

- application/ # casos de uso, controllers e services
- domain/ # entidades e contratos
- infra/ # implementações (Prisma, Redis, RabbitMQ, Mongo)
- common/ # pipes, filters, utilitários
- main.ts # ponto de entrada

---

## Endpoints principais

- Criar cobrança
  - POST /charges
  - Body (JSON):

```json
{
  "payer_name": "John Doe",
  "payer_document": "12345678901",
  "amount": 15000,
  "description": "Pagamento reserva"
}
```

- Response (201 Created — exemplo):

```json
{
  "id": "cmgy9a17m00010q5sgppydsu2",
  "payer_name": "John Doe",
  "payer_document": "12345678901",
  "amount": 15000,
  "description": "Pagamento reserva",
  "status": "pending",
  "created_at": "2025-10-19T12:34:56.000Z"
}
```

- Buscar cobrança por id
  - GET /charges/:id
  - Param (id)
  - Response (200 OK — exemplo):

```json
{
  "id": "cmgy9a17m00010q5sgppydsu2",
  "payer_name": "John Doe",
  "payer_document": "12345678901",
  "amount": 15000,
  "description": "Pagamento reserva",
  "status": "paid",
  "paid_at": "2025-10-20T08:15:30.000Z",
  "created_at": "2025-10-19T12:34:56.000Z"
}
```

- Simular pagamento
  - POST /simulate-payment
  - Descrição: simula o processamento de pagamento para a cobrança indicada.
  - Body (JSON):

```json
{
  "charge_id": "cmgy9a17m00010q5sgppydsu2"
}
```

- Response (200 OK — exemplo):

```json
{
  "message": "Payment simulation queued"
}
```

---

## Observações

- Configure variáveis de ambiente para conectar Prisma, Redis, MongoDB e RabbitMQ.
- Docker Compose já inclui serviços necessários (Postgres, MongoDB, Redis, RabbitMQ).
- Swagger está configurado no bootstrap da aplicação.

---

## Licença

MIT

---

## Autor

Mariana Bastos
