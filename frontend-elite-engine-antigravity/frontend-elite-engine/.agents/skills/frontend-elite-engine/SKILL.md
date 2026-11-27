---
name: frontend-elite-engine
description: Orchestrates premium frontend creation, redesign, design systems, UI/UX, implementation, motion, accessibility, performance, visual review, and browser testing in Google Antigravity. Use for substantial website or application interface work, or when the user invokes /frontend-elite-engine.
---

# Frontend Elite Engine

## Missão
Entregar frontend distinto, utilizável, acessível, responsivo, sustentável e testado. Coordenar skills e ferramentas instaladas numa sequência deliberada. Esta skill é uma orquestradora: não substitui skills de terceiros, não instala dependências automaticamente e não garante um resultado premium por si só.

## Modo autônomo
Analisar, planejar, implementar, testar e corrigir no workspace sem pedir aprovação a cada etapa rotineira. Pergunte apenas quando faltar informação essencial ou houver decisão de alto impacto que não possa ser inferida com segurança.

Nunca faça deploy, commit, push, PR, alterações remotas, uso de serviços pagos ou ações destrutivas sem autorização explícita.

## Inicialização
1. Leia `AGENTS.md`, as regras aplicáveis e `DESIGN.md`.
2. Inspecione o status do repositório e preserve alterações do usuário.
3. Inspecione stack, versões, scripts, rotas, componentes, estilos, assets, integrações, testes e destino de publicação.
4. Identifique objetivo, público, jornada principal, CTA e definição de pronto.
5. Detecte skills e ferramentas disponíveis. Não presuma que estejam instaladas.
6. Registre auditoria e decisões em documentação coerente com o projeto.

## Roteamento de skills
Leia `references/skill-routing.md`. Use somente skills realmente instaladas e pertinentes:
- UI/UX Pro Max: pesquisa de padrões, estilos, paletas e Design System.
- Frontend Design: direção criativa e implementação visual.
- Taste Skill: direção de arte, composição e imagens.
- Impeccable: critique, audit, polish, adapt e harden.
- Vercel Web Design Guidelines: revisão de UI/UX e acessibilidade.
- Vercel React Best Practices: somente React/Next.js.
- Emil Design Engineering: motion e microinterações com propósito.
- shadcn/ui: componentes somente se stack compatível.
- Playwright: automação de navegador se configurada.
- Google Stitch: somente com serviço/MCP configurado.

Não peça a várias skills que criem direções concorrentes ao mesmo tempo. Defina uma direção e use as demais como especialistas/revisoras.

## Fluxo obrigatório
Siga `references/workflow.md` e os gates de `references/quality-gates.md`.

### A. Descoberta
Inspecione antes de editar. Registre funcionalidades existentes, restrições, problemas e incertezas. Não invente fatos institucionais.

### B. Estratégia de design
Defina público, jornada, CTA, direção visual, hierarquia, layout, tipografia, cores, espaçamento, imagens, ícones, responsividade e motion. Use `DESIGN.md` como fonte de verdade. Preserve a marca existente, salvo pedido de rebranding.

### C. Arquitetura
Escolha a implementação mínima compatível com a stack atual. Planeje componentes, páginas, estados, acessibilidade e comportamento responsivo.

### D. Implementação
Implemente código funcional, não apenas protótipo. Preserve conteúdo real, rotas, formulários e integrações. Cada controle visível deve ter ação real ou ser identificado como pendência.

### E. Motion e refinamento
Adicione animações apenas quando melhorarem feedback, hierarquia ou narrativa. Respeite reduced motion. Refine espaçamento, tipografia, alinhamento, estados e microcopy. Use Impeccable se disponível.

### F. QA
Siga os quality gates. Execute lint, typecheck, testes e build disponíveis. Use Playwright/browser somente se disponível. Inspecione mobile e desktop. Corrija problemas P0/P1 e repita os testes afetados.

### G. Entrega
Informe mudanças, arquivos, skills realmente utilizadas, comandos executados, resultados, limitações e pendências. Não declare produção pronta sem evidências. Não publique nem faça commit/push sem autorização.

## Condições de pausa
Faça uma pergunta objetiva se houver conflito com requisitos existentes, falta de fatos críticos, necessidade de credenciais/serviço pago, ação destrutiva ou migração de alto impacto. Caso contrário, prossiga autonomamente.
