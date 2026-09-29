# 1. O que é MCP

**MCP (Model Context Protocol)** = um jeito padrão de ligar o Claude a sistemas externos: banco de dados, API, GitHub, Jira...
É o "USB-C" das IAs: um servidor MCP pluga em qualquer cliente que fale MCP.

O `loja.db` (nesta pasta) é o banco da loja, usado pelo `antes/` e pelo `depois/`.

- **Antes:** "usando comandos do sqlite, cadastre o cliente..." → o Claude improvisa: procura o `sqlite3`, tenta outro caminho, descobre as tabelas e as colunas... vários comandos e vários pedidos de permissão
- **Depois:** "cadastre o cliente..." → o Claude chama `cadastrar_cliente` e `consultar` do servidor MCP. Direto

Na pasta `depois/`:
- `server.js`: o servidor MCP, com as tools `listar_tabelas`, `consultar(sql)` e `cadastrar_cliente`
- `.mcp.json`: registra o servidor no projeto (o mesmo que `claude mcp add loja --scope project -- node --no-warnings server.js`)
- **Segurança:** o `consultar` só aceita SELECT. Para escrever, só pelas tools que você criou (`cadastrar_cliente`). Peça "apague os clientes" e o servidor recusa

| | Skill | MCP |
|---|---|---|
| O que é | Instruções (Markdown) | Um programa (servidor) |
| Dá ao Claude | **Como** fazer | **Acesso** a dados e ações |
| Exemplo | "revise seguindo a qualidade moni" | "consulte e cadastre no banco da loja" |

> Entre uma demo e outra, recrie o banco: `cd depois && npm run preparar`
