# 7. Skills do dia a dia (dev / QA)

Tudo o que vimos, aplicado em skills reais. Abra o `claude` nesta pasta e digite `/`.

| Skill | Para quem | Uso | Conceitos |
|---|---|---|---|
| `/commit` | Dev | `/commit` | `disable-model-invocation` · `allowed-tools: Bash(git commit *)` · `` !`git diff --staged` `` |
| `/revisar-pr` | Dev | `/revisar-pr 42` | `$ARGUMENTS` dentro do `!` · `disallowed-tools: Edit Write` |
| `/casos-de-teste` | QA | `/casos-de-teste src/soma.js` ou "gera casos de teste pra soma" | invocação padrão · arquivo de apoio `template.md` · `$ARGUMENTS` |
| `/bug-report` | QA | `/bug-report botão salvar não responde` | `allowed-tools: Write` · `!` com `\|\| echo` (não aborta sem git) |
| `/explicar-erro` | Dev / QA | cole um stack trace | invocação padrão (o Claude aciona sozinho) |
| `padroes-do-projeto` | Todos | não aparece no `/` | `user-invocable: false`: conhecimento de fundo |

## Pontos para fechar a palestra

- **Ação com efeito colateral** (commit, PR, bug) → `disable-model-invocation: true`
- **Conhecimento** (padrões, regras) → `user-invocable: false`
- **Contexto que sempre precisa** (diff, branch) → `!`
- **Ferramenta que sempre vai usar** (commit, salvar arquivo) → `allowed-tools`
- **Só olhar, nunca mexer** (revisão) → `disallowed-tools`

> `/commit` precisa de um repositório git com algo em stage; `/revisar-pr` precisa do `gh` autenticado e de um PR aberto.
