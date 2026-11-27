# DESIGN.md — LN INTEGRA (Contabilidade e Psicologia)

> Sistema visual fundamentado pela skill **UI/UX Pro Max** (Direção: *Trust & Authority* + *Enterprise Gateway* adaptada à estética editorial contemporânea da LN INTEGRA).

## 1. Conceito & Posicionamento
- **Marca:** LN INTEGRA — Contabilidade e Psicologia
- **Sensações-chave:** Autoridade contábil, confiança empresarial, acolhimento humano, organização e sofisticação.
- **Diretriz:** Estética editorial, minimalista e contemporânea, com amplo respiro visual, tipografia serifada de autoridade (`Cormorant Garamond`) combinada com sans-serif de alta legibilidade (`Manrope`), e uso criterioso de dourado champagne sobre superfícies claras.

---

## 2. Paleta de Cores & Contraste (WCAG AA+)

| Token | Hex | Uso principal |
|---|---|---|
| `off-white` | `#F8F6F0` | Fundo principal do site |
| `beige` | `#E9E3D9` | Fundos secundários alternados, superfícies suaves e divisores |
| `gold` | `#C2A36A` | Detalhes arquitetônicos, bordas finas, ícones lineares e indicadores |
| `gold-aged` | `#94743E` | Textos de destaque dourado sobre fundo claro (contraste aprimorado) e estados hover |
| `greige` | `#B7AEA1` | Bordas sutis e separadores |
| `brown` | `#5C4A33` | Textos de apoio e parágrafos sobre fundos claros (contraste ≥ 4.5:1) |
| `graphite` | `#34322F` | Tipografia principal, títulos, botões primários e âncoras visuais |

### Regras de Contraste e Acessibilidade
- Textos de corpo sobre `#F8F6F0` ou `#E9E3D9` devem usar `ink-primary` (`#34322F`) ou `ink-secondary` (`#5C4A33`).
- Todos os elementos interativos possuem `cursor-pointer`, transição suave (`150–300ms`) e anel de foco visível (`focus-visible:ring-2 focus-visible:ring-[#C2A36A] focus-visible:ring-offset-2`).
- Nenhum emoji é utilizado como ícone de interface; todos os ícones são SVG via `lucide-react`.

---

## 3. Tipografia
- **Títulos (Serifada Editorial):** `Cormorant Garamond` (pesos 400, 500, 600, 700; itálico para palavras-chave de destaque).
- **Corpo & Interface (Sans-serif):** `Manrope` (pesos 300, 400, 500, 600, 700).

---

## 4. Espaçamento, Bordas & Movimento
- **Container padrão:** `max-w-7xl mx-auto px-5 sm:px-8`
- **Bordas:** `1px solid` com `beige` (`#E9E3D9`) ou `gold/35`.
- **Cantos:** Levemente arredondados (`rounded-lg` = 8px, `rounded-xl` = 12px, `rounded-2xl` = 16px).
- **Movimento:** Fade-in suave ao rolar a página (`IntersectionObserver`), microinterações discretas em botões e accordions, respeitando integralmente `@media (prefers-reduced-motion: reduce)`.
