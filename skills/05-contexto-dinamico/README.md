# 5. Injeção de contexto dinâmico

- **Antes:** "Rode `grep ...`" → o Claude **decide** rodar (tool call)
- **Depois:** `` !`grep -rn "console.log" src` `` → o **shell** roda antes e o Claude recebe o resultado pronto

Pontos:
- `!` só vale no início da linha ou após espaço (`` X=!`cmd` `` fica literal)
- Se o comando falhar, a skill inteira aborta. Demo: `mv src src-off`, `/qualidade-moni`, `mv src-off src`
  - Exceção: `grep` sem resultado (exit 1) é tratado como normal
- Não roda em skills sincronizadas da conta claude.ai
- `allowed-tools` = o Claude roda durante a conversa. `!` = o shell roda antes de o modelo ver a skill
