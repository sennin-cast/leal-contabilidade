# DESIGN.md — LN INTEGRA (Contabilidade e Psicologia)

> Sistema visual construído com **Impeccable** (*Modern Warm Editorial Studio* — moderno, jovem, legível e livre de clichês visuais genéricos).

## 1. Direção Estética & Tipografia
- **Display:** `Bricolage Grotesque` (500, 600, 700) — geométrica expressiva, contemporânea e humana, com tracking `-0.03em` em títulos principais.
- **Corpo & Interface:** `Hanken Grotesk` (400, 500, 600, 700) — leitura limpa, jovem e precisa, com `tabular-nums` para telefones e registros profissionais.
- **Regras estruturais:** Sem kickers/eyebrows acima de títulos, sem numeração decorativa artificial, sem grades repetitivas de cards idênticos.

## 2. Paleta de Cores (Bege Encorpado + Espresso de Alto Contraste)
- `sand`: `#E4DAC9` (fundo principal quente e confortável)
- `linen`: `#D8CCB8` (superfícies alternadas)
- `parchment`: `#EDE5D8` (cards e superfícies elevadas)
- `espresso`: `#1C1814` (Hero com marca d'água, faixa de CTA e rodapé)
- `ink`: `#181512` (texto principal sobre bege)
- `umber`: `#3A3128` (texto secundário de alta legibilidade)
- `gold`: `#C6A15B` (destaques e ações sobre fundo escuro)
- `gold-ink`: `#7A5B22` (destaques bronze sobre fundo bege)
- `border`: `#C4B69F` (divisórias e bordas sutis)

## 3. Motion, Interação & Acessibilidade
- **Curvas de easing:** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` para entradas e microinterações; `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)` para drawers.
- **Feedback tátil:** Botões e controles interativos usam `active:scale-[0.98]` e `touch-action: manipulation`.
- **Foco adaptativo:** `--focus-offset` alterna entre `#E4DAC9` (superfícies claras) e `#1C1814` (`.surface-dark`), garantindo contraste de foco visível em toda a página.
- **Âncoras e modais:** `section[id]` usa `scroll-margin-top: 5.5rem` para compensar o header fixo; modais e drawers usam `overscroll-behavior: contain`, trava de scroll e restauração de foco; `prefers-reduced-motion` desativa animações.
