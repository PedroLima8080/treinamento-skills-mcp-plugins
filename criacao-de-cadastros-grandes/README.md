# Palestra: Criação a partir de exemplos

Quando você pede "faça uma landing page", o Claude **decide sozinho** o que olhar e qual estilo seguir.
Quando você aponta **exemplos**, ele segue o padrão, e não fica livre para inventar.

> **Não descreva o padrão. Mostre o padrão.**

## Estrutura

```
criacao-de-cadastros-grandes/
├── src/                      ← 10 landing pages, cada uma com um padrão diferente
│   ├── 01-petshop.html
│   ├── ...
│   └── 10-advocacia.html
└── playground/               ← 10 padrões, 5 exemplos de cada
    ├── brutalista/
    │   ├── 1-loja-de-skate.html
    │   ├── ...
    │   └── 5-grafica-rapida.html
    └── ...
```

Cada arquivo é um HTML único (CSS inline, sem dependências): basta abrir no navegador.

## Os padrões

| Padrão (`playground/`) | Landing page (`src/`) | Características |
|---|---|---|
| `cartoon-pastel` | 01-petshop | tons pastel, contorno escuro, tudo arredondado, balão de fala |
| `neon-escuro` | 02-lavacar | fundo preto, ciano e magenta com brilho, tudo em caixa alta |
| `rustico-serifa` | 03-pizzaria | papel kraft, serifa, cardápio com pontilhado, ornamentos ✦ |
| `brutalista` | 04-academia | amarelo e preto, bordas grossas, sombra dura, fonte monoespaçada |
| `clinico-minimalista` | 05-clinica-odontologica | branco e azul, formulário no topo, FAQ, rodapé em colunas |
| `editorial-elegante` | 06-floricultura | itálico gigante, seções numeradas 01–04, sem cards |
| `glassmorphism` | 07-escola-de-idiomas | gradiente roxo/azul/rosa, cards de vidro com blur |
| `retro-70` | 08-padaria | listras laranja/marrom, sol raiado, serviços em selos redondos |
| `terminal` | 09-assistencia-tecnica | tela de terminal verde, comandos `$`, tabela de serviços |
| `sidebar-corporativo` | 10-advocacia | menu lateral azul-marinho e dourado, formulário de contato |

## O que se repete e o que varia

Os 5 exemplos de cada pasta mantêm a **identidade** do padrão: cores, fontes, bordas, sombras e a estrutura base (topo, hero, serviços, sobre, depoimento, rodapé).
O que muda entre eles são as **situações**: cada exemplo resolve componentes diferentes, sempre no estilo do padrão.

| Componente | Exemplo de onde aparece |
|---|---|
| Menu flutuante / menu hambúrguer | `terminal/3-pecas-de-pc` / `cartoon-pastel/4-clinica-veterinaria` |
| Animações ao rolar / números animados | `rustico-serifa/2-cervejaria` / `brutalista/4-academia-de-muay-thai` |
| Efeitos ao passar o mouse | `retro-70/1-loja-de-discos` |
| Galeria / letreiro rolando | `neon-escuro/1-estudio-de-tatuagem` / `editorial-elegante/3-galeria-de-arte` |
| Planos / abas de serviços | `glassmorphism/2-curso-de-programacao` / `brutalista/5-grafica-rapida` |
| Oferta com contagem regressiva | `retro-70/2-lanchonete` |
| Carrossel de depoimentos | `sidebar-corporativo/4-corretora-de-seguros` |
| Equipe / linha do tempo | `clinico-minimalista/2-fisioterapia` / `glassmorphism/5-consultoria-de-ti` |
| Perguntas frequentes / como funciona | `neon-escuro/5-som-automotivo` / `editorial-elegante/5-estudio-de-fotografia` |
| Mapa / newsletter / modal de agendamento | `terminal/5-suporte-de-ti` / `rustico-serifa/5-emporio-de-queijos` / `clinico-minimalista/4-psicologia` |
| WhatsApp flutuante / voltar ao topo / barra de progresso | `sidebar-corporativo/1-imobiliaria` / `neon-escuro/4-estudio-de-gravacao` / `terminal/1-provedor-de-internet` |
| Barra de aviso / aviso de cookies | `glassmorphism/5-consultoria-de-ti` / `retro-70/4-brecho` |

Os componentes usam as variáveis CSS do padrão (`--cor`, `--borda`, `--raio`, `--sombra`, `--fonte-titulo`...), declaradas em `:root` em cada exemplo.
Por isso um carrossel no `terminal` tem borda tracejada verde, e no `cartoon-pastel` tem contorno grosso e cantos redondos.

Com 5 exemplos diferentes, o Claude aprende o **padrão** (o que se repete) e ganha um **repertório** de situações já resolvidas nele. Assim, dá para pedir coisas como "com menu flutuante e FAQ" sem ele inventar um estilo novo.

## Demo

Abra o `claude` dentro de `criacao-de-cadastros-grandes/`.

**Antes (sem exemplos):**

```
faça uma landing page para uma barbearia em src/11-barbearia.html
```

O Claude escolhe sozinho: pode ler todas as páginas do `src/` e misturar estilos, ou pode inventar um estilo novo. Cada execução sai diferente.

**Depois (com exemplos):**

```
faça uma landing page para uma barbearia em src/11-barbearia.html,
use o padrão ./playground/brutalista (leia apenas essa pasta)
```

A página sai com a mesma estrutura, cores e componentes dos 5 exemplos, só com o conteúdo de barbearia.

Para mostrar que funciona com qualquer padrão, repita o pedido trocando a pasta: `./playground/terminal`, `./playground/retro-70`...

**Indo além (combinando situações):**

```
faça uma landing page para uma barbearia em src/12-barbearia.html,
use o padrão ./playground/terminal (leia apenas essa pasta),
com menu hambúrguer, planos, carrossel de depoimentos e botão de WhatsApp
```

Nenhum exemplo do `terminal` tem menu hambúrguer, mas outras pastas têm. O Claude precisa aplicar o componente no estilo do padrão, e é aí que as variáveis CSS ajudam.

> Dica: antes da demo, apague as páginas geradas (`src/11-*.html`, `src/12-*.html`).
