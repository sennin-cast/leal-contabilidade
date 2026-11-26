# DESIGN.md — LN INTEGRA (Contabilidade e Psicologia)

## 1. Conceito & Posicionamento
- **Marca:** LN INTEGRA — Contabilidade e Psicologia
- **Sensações-chave:** Credibilidade, Acolhimento, Integração.
- **Referência estética:** Escritórios de arquitetura contemporânea, clínicas particulares sofisticadas e consultorias empresariais de alto padrão.
- **Diretriz:** Estética editorial, minimalista, com amplo respiro visual, tipografia serifada de autoridade combinada com sans-serif limpa, e uso moderado de dourado champagne sobre fundos claros.

---

## 2. Paleta de Cores Oficial

| Token | Hex | Uso principal |
|---|---|---|
| `off-white` | `#F8F6F0` | Fundo principal do site |
| `beige-light` | `#E9E3D9` | Fundos secundários alternados, superfícies suaves e divisores |
| `gold-champagne` | `#C2A36A` | Detalhes, bordas finas, ícones lineares, linhas e botões de destaque |
| `gold-aged` | `#A48650` | Estados hover do dourado, textos de destaque sobre fundo claro |
| `greige` | `#B7AEA1` | Bordas sutis, rótulos secundários e elementos discretos |
| `brown-sophisticated` | `#766044` | Subtítulos, textos de apoio e contrastes quentes |
| `graphite-warm` | `#34322F` | Tipografia principal, títulos e botões primários escuros |

### Proibições
- Não usar azul corporativo tradicional, roxo, neon ou gradientes chamativos.
- Não usar excesso de dourado em grandes blocos sólidos.
- Não usar fundos escuros pesados (`#0D1B2A` / `#080D14` removidos).

---

## 3. Tipografia
- **Títulos (Serifada Editorial):** `Cormorant Garamond` (pesos 400, 500, 600, 700; itálico para palavras-chave de destaque).
- **Corpo & Interface (Sans-serif):** `Manrope` (pesos 300, 400, 500, 600, 700).

---

## 4. Espaçamento, Bordas & Movimento
- **Bordas:** `1px solid` com `beige-light` (`#E9E3D9`) ou `gold-champagne/30`.
- **Cantos:** Levemente arredondados (`rounded-lg` = 8px, `rounded-xl` = 12px).
- **Movimento:** Fade-in suave ao rolar a página (`IntersectionObserver`), microinterações discretas em botões e links, respeitando `@media (prefers-reduced-motion: reduce)`.
