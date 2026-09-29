---
name: revisar-pr
description: Revisa um pull request pelo número
argument-hint: <numero-do-pr>
disable-model-invocation: true
disallowed-tools: Edit Write
---

## PR #$ARGUMENTS

!`gh pr view $ARGUMENTS`

!`gh pr diff $ARGUMENTS`

Revise o PR acima. Para cada problema: `arquivo:linha`, severidade (🔴 bloqueante, 🟡 sugestão) e a correção.
Termine com um resumo de 3 linhas. Não altere nenhum arquivo.
