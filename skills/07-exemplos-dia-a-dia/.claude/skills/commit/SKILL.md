---
name: commit
description: Cria um commit no padrão Conventional Commits com as mudanças em stage
disable-model-invocation: true
allowed-tools: Bash(git commit *)
---

## Mudanças em stage

!`git diff --staged`

Escreva uma mensagem no padrão `tipo(escopo): resumo` (feat, fix, refactor, test, docs, chore), em português, e faça o commit com `git commit -m`.
Se não houver nada em stage, avise e não faça nada.
