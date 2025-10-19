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

3. Crie e edite `.env` na raiz (exemplo abaixo)

4. Suba serviços de infraestrutura

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

A API ficará disponível em `http://localhost:3000`

---

## Exemplo de .env

PORT=
NODE_ENV=
DATABASE_URL=
MONGODB_URI=
REDIS_URL=
RABBITMQ_URL=

---

## Testes

- Unit / integração:

```bash
npm test
```

- End-to-end:

```bash
npm run test:e2e
```

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

- Buscar cobrança por id
  - GET /charges/:id

---

## Observações

- Configure variáveis de ambiente para conectar Prisma, Redis, MongoDB e RabbitMQ.
- Docker Compose já inclui serviços necessários (Postgres, MongoDB, Redis, RabbitMQ).
- Swagger está configurado no bootstrap da aplicação.

---

## Contribuição

1. Abra uma issue descrevendo a mudança.
2. Crie um branch com um nome descritivo.
3. Rode lint/tests antes de abrir PR:

```bash
npm run lint
npm test
```

---

## Licença

MIT

---

## Autor

Mariana Bastos
