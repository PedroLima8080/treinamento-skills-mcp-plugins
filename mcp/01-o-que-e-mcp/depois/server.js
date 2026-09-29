import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { DatabaseSync } from 'node:sqlite';

// Banco da loja (na vida real: Firebird, Postgres, SQL Server...)
const db = new DatabaseSync(`${import.meta.dirname}/../loja.db`);
const texto = (t) => ({ content: [{ type: 'text', text: t }] });

const server = new Server({ name: 'loja', version: '1.0.0' }, { capabilities: { tools: {} } });

// 1. Quais tools existem (o Claude lê isto para decidir o que chamar)
const tools = [
  {
    name: 'listar_tabelas',
    description: 'Mostra as tabelas e colunas do banco da loja',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'consultar',
    description: 'Executa uma consulta SQL (somente SELECT) no banco da loja',
    inputSchema: {
      type: 'object',
      properties: { sql: { type: 'string', description: 'Consulta SELECT' } },
      required: ['sql'],
    },
  },
  {
    name: 'cadastrar_cliente',
    description: 'Cadastra um novo cliente na loja',
    inputSchema: {
      type: 'object',
      properties: {
        nome: { type: 'string' },
        email: { type: 'string' },
        cidade: { type: 'string' },
      },
      required: ['nome', 'cidade'],
    },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

// 2. O que cada tool faz quando o Claude chama
server.setRequestHandler(CallToolRequestSchema, async ({ params }) => {
  try {
    if (params.name === 'listar_tabelas') {
      const tabelas = db.prepare("SELECT sql FROM sqlite_master WHERE type = 'table'").all();
      return texto(tabelas.map((t) => t.sql).join('\n'));
    }

    if (params.name === 'consultar') {
      // Segurança: SQL livre só para leitura
      if (!/^\s*select\b/i.test(params.arguments.sql)) throw new Error('Só é permitido SELECT');
      const linhas = db.prepare(params.arguments.sql).all();
      return texto(JSON.stringify(linhas, null, 2));
    }

    if (params.name === 'cadastrar_cliente') {
      const { nome, email = null, cidade } = params.arguments;
      const { lastInsertRowid } = db
        .prepare('INSERT INTO clientes (nome, email, cidade) VALUES (?, ?, ?)')
        .run(nome, email, cidade);
      return texto(`Cliente ${lastInsertRowid} cadastrado: ${nome} (${cidade})`);
    }

    throw new Error(`Tool desconhecida: ${params.name}`);
  } catch (erro) {
    return { ...texto(`Erro: ${erro.message}`), isError: true };
  }
});

await server.connect(new StdioServerTransport());
