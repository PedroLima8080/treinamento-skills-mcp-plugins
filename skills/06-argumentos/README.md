# 6. Passando argumentos

Dois arquivos em `src/`: `soma.js` (com `console.log`) e `multiplica.js` (sem).

- **Antes:** sempre busca em `src/` inteiro
- **Depois:** `` !`grep -n "console.log" $ARGUMENTS` `` → você escolhe o arquivo

```bash
/qualidade-moni src/soma.js         # acha o console.log
/qualidade-moni src/multiplica.js   # ✅ Nenhum console.log
```

`$ARGUMENTS` = tudo que veio depois do comando. `$0`, `$1` = por posição.
`argument-hint: <arquivo>` só aparece no autocomplete.
