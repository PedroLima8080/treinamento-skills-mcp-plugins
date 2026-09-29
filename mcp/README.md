# Palestra: MCP no Claude Code

Um exemplo só: um servidor MCP que dá ao Claude acesso ao **banco de dados de uma loja** (`loja.db`, SQLite com uma tabela de clientes).

> **Skill ensina o Claude a fazer. MCP dá acesso ao que ele não alcança.**

| # | Tema | O que muda |
|---|------|------------|
| 1 | [O que é MCP](01-o-que-e-mcp/) | rodar a query e colar o resultado no chat → o Claude consulta sozinho |

## Antes da palestra

```bash
cd mcp/01-o-que-e-mcp/depois
npm install   # instala o SDK e cria o loja.db
```

Para recriar o banco: `npm run preparar`.

Abra o `claude` **dentro** da pasta `antes/` ou `depois/`.
Na primeira vez, o Claude Code pergunta se você confia no `.mcp.json` do projeto: responda que sim.
