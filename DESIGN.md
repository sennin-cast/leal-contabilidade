# DESIGN.md — LN INTEGRA (Contabilidade e Psicologia)

> Sistema visual fundamentado pelas skills **UI/UX Pro Max** e **frontend-design** (*Warm Espresso & Aged Parchment Editorial*).

## 1. Conceito & Posicionamento
- **Marca:** LN INTEGRA — Contabilidade e Psicologia
- **Sensações-chave:** Autoridade contábil, solidez, acolhimento humano e leitura confortável.
- **Diretriz:** Superfícies em bege quente encorpado (`#E4DAC9` e `#D8CCB8`) combinadas com blocos âncora em espresso profundo (`#221D18`), tipografia editorial (`Cormorant Garamond` + `Manrope`) e contraste elevado (WCAG AA/AAA) para leitura sem esforço.

---

## 2. Paleta de Cores Oficial (Alto Contraste)

| Token | Hex | Uso principal |
|---|---|---|
| `sand` | `#E4DAC9` | Fundo principal do site (bege quente encorpado) |
| `linen-deep` | `#D8CCB8` | Fundos alternados e faixas de separação |
| `parchment` | `#EDE5D8` | Superfície de cards e formulários sobre fundo bege |
| `espresso` | `#221D18` | Hero (com marca d'água), faixa de CTA final e rodapé |
| `ink` | `#1A1714` | Títulos e textos principais sobre fundo claro (>11:1 contraste) |
| `umber` | `#3A3128` | Parágrafos, rótulos e textos de apoio (>7.8:1 contraste) |
| `gold` | `#C6A15B` | Detalhes, ícones e bordas sobre fundo espresso |
| `gold-ink` | `#7A5B22` | Destaques dourados/bronze sobre fundo bege (>5.2:1 contraste) |
| `border-warm` | `#C4B69F` | Bordas estruturais e divisores |

---

## 3. Tipografia & Acessibilidade
- **Títulos:** `Cormorant Garamond` (400, 500, 600, 700).
- **Corpo & UI:** `Manrope` (400, 500, 600, 700).
- Todos os elementos interativos possuem `cursor-pointer`, foco visível (`focus-visible:ring-2`) e suporte a `prefers-reduced-motion`.
