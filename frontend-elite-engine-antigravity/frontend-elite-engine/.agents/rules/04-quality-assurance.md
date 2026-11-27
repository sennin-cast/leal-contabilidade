---
trigger: model_decision
description: Apply when validating, auditing, testing, polishing, preparing release, or reviewing frontend changes.
---

# Quality Assurance
- Diferencie auditoria estática, teste automatizado e inspeção visual.
- Use Vercel Web Design Guidelines se disponível.
- Use Impeccable para critique/audit/polish se instalado.
- Use Playwright somente se CLI/pacote/navegador estiver configurado.
- Valide links, navegação, formulários, menus e fluxos principais.
- Inspecione mobile e desktop quando houver navegador.
- Verifique console e network quando possível.
- Rode lint, typecheck, testes e build conforme scripts reais.
- Corrija problemas críticos/altos antes de concluir.
- Registre checks não executados como NOT RUN.
- Não faça deploy, commit ou push sem autorização.
