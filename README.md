# Facile Challenge 🚀

## Rodando o projeto
```bash
git clone git@github.com:danielpalmares/facile-challenge.git
```

```bash
cd facile-challenge
```

```bash
yarn
```

```bash
yarn dev
```

## Variáveis ambiente
Siga o arquivo de exemplo (.env.example) e crie um arquivo .env na raiz do projeto, com o mesmo formato, com seus dados.

## Rodando as migrations
```bash
npx knex migrate:latest
```
ou
```bash
npx knex migrate:up <migration_filename>
```

## Documentação da API

### Criando criptografia
```
POST /encrypts/:name
```

response body, status: 201
```json
{
  "id": 1,
}
```

response body, status: 422
```json
{
  "code": 422,
  "message": "O campo nome está errado ou não foi especificado!"
}
```

### Recebendo criptografia
```
GET /encrypts/:id
```

response body, status: 200
```json
{
  "id": 1,
  "encrypted_name": "hello world"
}
```

response body, status: 422
```json
{
  "code": 422,
  "message": "O campo id está errado ou não foi especificado!"
}
```
