# 4. allowed-tools

A skill agora salva o resultado em um relatório: `qualidade-moni.md`.

- **Antes:** `/qualidade-moni` → prompt pedindo permissão para criar `qualidade-moni.md`
- **Depois:** `allowed-tools: Write` → cria o relatório sem prompt

Pontos:
- Pré-aprova a ferramenta **só no turno** em que a skill foi invocada
- É **concessão, não restrição**: as outras ferramentas seguem as permissões normais
- `disallowed-tools` é o oposto: remove ferramentas enquanto a skill está ativa (ex.: `disallowed-tools: Edit`)

## Para a demo funcionar

```bash
claude --permission-mode default
```

- O rodapé **não** pode mostrar "accept edits", "auto" nem "bypass"
- No prompt de permissão do `antes/`, responda **"Yes"**, não "Yes, allow all edits during this session". A segunda opção liga o accept edits e a partir daí tudo passa direto
- Apague o `qualidade-moni.md` entre uma execução e outra
