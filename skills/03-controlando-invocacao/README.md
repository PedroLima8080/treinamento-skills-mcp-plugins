# 3. Quem manda: controlando invocação

- **Antes:** padrão. "o projeto está no padrão de qualidade moni?" → o Claude invoca a skill sozinho
- **Depois:** `disable-model-invocation: true` → só roda com `/qualidade-moni`

| Frontmatter | Você | O Claude |
|---|:-:|:-:|
| padrão | ✅ | ✅ |
| `disable-model-invocation: true` | ✅ | ❌ |
| `user-invocable: false` | ❌ | ✅ |
