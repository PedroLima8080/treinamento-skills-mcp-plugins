---
name: qualidade-moni
description: Use quando o usuário perguntar se o projeto está no padrão de qualidade moni ou pedir para revisar a qualidade moni
argument-hint: <arquivo>
---

## Resultado da busca em $ARGUMENTS

!`grep -n "console.log" $ARGUMENTS`

Analise o resultado acima apenas.
Para cada um, informe `$ARGUMENTS:linha` e sugira remover.
Se não houver, responda: ✅ Nenhum console.log em $ARGUMENTS.
Se não for fornecido $ARGUMENTS, retorne exatamente "Defina o arquivo" e não faça mais nada!
