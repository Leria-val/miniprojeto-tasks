#  Mini-Projeto TASKS

API desenvolvida para o gerenciamento de tarefas (CRUD), utilizando **Node.js**, **Express** e **Sequelize**. Este projeto foi estruturado para suportar persistência de dados via PostgreSQL (ou SQLite para portabilidade).

##  Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express
* **ORM:** Sequelize
* **Banco de Dados:** PostgreSQL (Configurado na porta 5433)
* **Variáveis de Ambiente:** Dotenv

---

##  Estrutura do Projeto

```text
├─ src/ (ou raiz)
│  ├─ database/       # Conexão com o banco (sqlConnection.js)
│  ├─ controllers/    # Lógica de negócio (taskController.js)
│  ├─ models/         # Definição da tabela Task
│  ├─ routes/         # Definição dos endpoints (taskRoutes.js)
│  └─ server.js       # Ponto de entrada da aplicação
├─ .env               # Configurações sensíveis
├─ package.json       # Dependências e scripts
└─ README.md          # Documentação

```

---

##  Como Rodar a Aplicação

1. **Instale as dependências:**
```bash
npm install

```


2. **Configure o banco de dados:**
No seu PostgreSQL (via pgAdmin), crie um banco chamado `tasks_db`.
3. **Configure o `.env`:**
Certifique-se de que as credenciais coincidem (exemplo: porta `5433`).
4. **Inicie o servidor:**
```bash
npm run dev

```


5. **Sincronize as tabelas:**
Acesse `http://localhost:3000/sync` no navegador para criar automaticamente a tabela no banco e uma tarefa de teste.

---

##  Endpoints da API

A API responde no padrão: `{ success, data, message }`.

| Método | Endpoint | Descrição |
| --- | --- | --- |
| **GET** | `/tasks` | Retorna todas as tarefas. |
| **GET** | `/tasks/:id` | Retorna uma tarefa específica. |
| **POST** | `/tasks` | Cria uma nova tarefa. |
| **PUT** | `/tasks/:id` | Atualiza uma tarefa existente. |
| **DELETE** | `/tasks/:id` | Remove uma tarefa. |

###  Exemplo de Body (JSON) para POST/PUT:

```json
{
  "title": "Estudar Node.js",
  "description": "Finalizar o mini-projeto de Back-end",
  "completed": false
}

```

---

##  Checklist de Requisitos (Final)

* [x] **Modelo:** Atributos `title` (obrigatório), `description` e `completed`.
* [x] **CRUD:** Implementação completa de todos os métodos HTTP.
* [x] **Tratamento de Erros:** Retorno de `404` para IDs inexistentes e `400` para campos obrigatórios ausentes.
* [x] **Persistência:** Integração total com Sequelize e banco SQL.

---

###  Consideração Final

O projeto está pronto para testes via **Postman**. Caso o banco de dados PostgreSQL não esteja disponível, o sistema foi preparado para uma migração rápida para **SQLite** visando a portabilidade da entrega.
