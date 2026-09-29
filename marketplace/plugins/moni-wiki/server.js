// Servidor MCP da Wiki Moni, sem dependências: só precisa do Node 18+ (fetch nativo).
import readline from 'node:readline';

const WIKI = 'http://172.10.1.11:3001';

// 1. As tools que o servidor oferece (o Claude lê isto para decidir o que chamar)
const tools = [
  {
    name: 'buscar_wiki',
    description:
      'Busca páginas na Wiki Moni (procedimentos, módulos, versões, equipamentos homologados...). Retorna título e link.',
    inputSchema: {
      type: 'object',
      properties: { termo: { type: 'string', description: 'O que procurar' } },
      required: ['termo'],
    },
  },
];

// 2. O que a tool faz: pergunta para o GraphQL da wiki
async function buscarWiki({ termo }) {
  const query = 'query ($q: String!) { pages { search(query: $q) { results { title path locale } } } }';
  const resposta = await fetch(`${WIKI}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { q: termo } }),
  });
  const { data } = await resposta.json();
  const paginas = data.pages.search.results;

  if (!paginas.length) return `Nada encontrado na wiki para "${termo}".`;
  return paginas.map((p) => `- ${p.title}: ${WIKI}/${p.locale}/${p.path}`).join('\n');
}

// 3. Protocolo MCP: uma mensagem JSON por linha no stdin, a resposta sai no stdout
const enviar = (mensagem) => process.stdout.write(JSON.stringify({ jsonrpc: '2.0', ...mensagem }) + '\n');

readline.createInterface({ input: process.stdin }).on('line', async (linha) => {
  const { id, method, params } = JSON.parse(linha);

  if (method === 'initialize') {
    return enviar({
      id,
      result: {
        protocolVersion: params.protocolVersion,
        capabilities: { tools: {} },
        serverInfo: { name: 'moni-wiki', version: '1.0.0' },
      },
    });
  }

  if (method === 'ping') return enviar({ id, result: {} });

  if (method === 'tools/list') return enviar({ id, result: { tools } });

  if (method === 'tools/call') {
    try {
      const texto = await buscarWiki(params.arguments);
      return enviar({ id, result: { content: [{ type: 'text', text: texto }] } });
    } catch (erro) {
      const texto = `Erro ao acessar a wiki (está na rede da Moni?): ${erro.message}`;
      return enviar({ id, result: { content: [{ type: 'text', text: texto }], isError: true } });
    }
  }

  // Notificações (sem id) não têm resposta; o resto é método desconhecido
  if (id !== undefined) enviar({ id, error: { code: -32601, message: `Método não suportado: ${method}` } });
});
