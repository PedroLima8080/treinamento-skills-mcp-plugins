# Palestra: Skills no Claude Code

Um exemplo só: a skill `qualidade-moni`, que valida que **não tem `console.log`** em `src/soma.js`.
A cada tema ela ganha um recurso. O `depois/` de um tema é o `antes/` do próximo.

| # | Tema | O que muda |
|---|------|------------|
| 1 | [O que é uma Skill + anatomia](01-o-que-e-skill/) | prompt repetitivo → `SKILL.md` criado ao vivo (frontmatter + corpo) |
| 2 | [Skill robusta](02-skill-robusta/) | + `reference.md` + `scripts/` |
| 3 | [Invocação](03-controlando-invocacao/) | + `disable-model-invocation: true` |
| 4 | [allowed-tools](04-allowed-tools/) | relatório `qualidade-moni.md` + `allowed-tools: Write` |
| 5 | [Contexto dinâmico](05-contexto-dinamico/) | `` !`grep -rn "console.log" src` `` |
| 6 | [Argumentos](06-argumentos/) | `` !`grep -n "console.log" $ARGUMENTS` `` |
| 7 | [Dia a dia (dev / QA)](07-exemplos-dia-a-dia/) | 6 skills reais combinando todos os conceitos |

Nenhum tema depende de git: não há preparação.

Em cada demo, abra o `claude` **dentro** da pasta `antes/` ou `depois/`.
