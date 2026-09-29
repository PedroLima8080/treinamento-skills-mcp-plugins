# Palestra: Marketplace de plugins

Skills e MCPs vivem dentro de **um projeto** (`.claude/skills`, `.mcp.json`).
Para compartilhar com **toda a empresa**, sem copiar pastas, empacotamos em **plugins** e publicamos num **marketplace**.

| Conceito | O que é |
|---|---|
| **Plugin** | Um pacote com skills, MCPs, agents... + um `plugin.json` (nome e versão) |
| **Marketplace** | Um catálogo de plugins (`marketplace.json`) |

## Estrutura

```
marketplace/
├── .claude-plugin/marketplace.json     ← catálogo "moni-palestra"
└── plugins/
    ├── moni-procedimentos/             ← plugin de SKILL (comum a todos)
    │   ├── .claude-plugin/plugin.json
    │   └── skills/moni-procedimentos/
    │       ├── SKILL.md
    │       └── procedimentos.md
    └── moni-wiki/                      ← plugin de MCP (busca na Wiki Moni)
        ├── .claude-plugin/plugin.json
        ├── .mcp.json                   ← usa ${CLAUDE_PLUGIN_ROOT}
        └── server.js                   ← sem dependências: só Node 18+
```

| Plugin | Tipo | Exemplo de uso |
|---|---|---|
| `moni-procedimentos` | Skill | "sou o último a sair do 1º piso, o que faço?" |
| `moni-wiki` | MCP | "busca na wiki sobre certificado SSL" (só na rede da Moni) |

## Instalar

Dentro do `claude`, em qualquer projeto:

```
/plugin marketplace add D:\Fontes\palestra\marketplace
/plugin install moni-wiki@moni-palestra
/plugin install moni-procedimentos@moni-palestra
/reload-plugins
```

Para o time: em vez do caminho local, use a URL do repositório git (ex.: GitLab interno).

## Gerar uma nova versão

1. Altere o plugin (ex.: `procedimentos.md`)
2. Suba a `version` em **dois** lugares:
   - `plugins/<plugin>/.claude-plugin/plugin.json`
   - `.claude-plugin/marketplace.json`
3. Commit + push (se estiver no git)

Quem já tem instalado atualiza com:

```
/plugin marketplace update moni-palestra
```

> **Sem mudar a `version`, ninguém recebe a atualização.**

Validar antes de publicar:

```powershell
claude plugin validate .\plugins\moni-wiki --strict
```
