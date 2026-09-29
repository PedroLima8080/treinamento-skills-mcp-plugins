# 2. Skill robusta: arquivos de apoio

- **Antes:** só o `SKILL.md` (a skill do tema 1)
- **Depois:** `SKILL.md` curto + arquivos de apoio

```
qualidade-moni/
├── SKILL.md                         ← fluxo e ponteiros
├── reference.md                     ← regras (lido só quando precisa)
└── scripts/buscar-console-log.sh    ← executado, não carregado: só a saída entra no contexto
```

- Mantém o `SKILL.md` curto
- O script dá um resultado determinístico (grep)
- `${CLAUDE_SKILL_DIR}` aponta para a pasta da skill
