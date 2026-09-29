---
name: bug-report
description: Registra um bug no padrão do time a partir de uma descrição curta
argument-hint: <descrição do bug>
disable-model-invocation: true
allowed-tools: Write
---

## Ambiente (coletado pelo shell)

- Branch: !`git branch --show-current 2>/dev/null || echo "sem git"`
- Últimos commits: !`git log --oneline -3 2>/dev/null || echo "sem git"`

## Tarefa

Registre o bug: "$ARGUMENTS"

Salve em `bugs/<data-de-hoje>-<slug>.md` com as seções:
**Título**, **Passos para reproduzir**, **Resultado esperado**, **Resultado obtido**, **Ambiente** (use os dados acima) e **Severidade**.
Se faltar informação para os passos, deixe `<preencher>`.
