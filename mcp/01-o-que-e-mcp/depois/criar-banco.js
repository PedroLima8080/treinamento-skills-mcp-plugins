// Cria o banco de exemplo (loja.db) em 01-o-que-e-mcp/, usado pelo antes/ e pelo depois/.
// Roda sozinho depois do `npm install`, ou com `npm run preparar`.
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';

const arquivo = `${import.meta.dirname}/../loja.db`;
fs.rmSync(arquivo, { force: true });

const db = new DatabaseSync(arquivo);
db.exec(`
  CREATE TABLE clientes (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, cidade TEXT);

  INSERT INTO clientes (nome, email, cidade) VALUES
    ('Ana Souza', 'ana@email.com', 'São Paulo'),
    ('Bruno Lima', 'bruno@email.com', 'Recife');
`);
db.close();

console.log('✅ loja.db criado');
