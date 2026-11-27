# Frontend Elite Engine — Antigravity Project Pack

Pacote por projeto para coordenar design, engenharia frontend, motion, auditoria e testes no Google Antigravity.

## Instalação
1. Faça backup ou commit das alterações atuais.
2. Extraia o ZIP.
3. Copie o conteúdo da pasta `frontend-elite-engine/` para a raiz do projeto aberto no Antigravity.
4. Se já existirem `AGENTS.md`, `.agents/rules/` ou `.agents/skills/`, mescle os arquivos; não sobrescreva suas instruções sem revisar.
5. Abra a raiz do projeto no Antigravity e recarregue/inicie uma nova conversa.
6. Confirme em Customizations → Skills & Rules que `frontend-elite-engine` foi detectada.
7. Execute `/frontend-elite-engine`.

## Estrutura
```text
AGENTS.md
DESIGN.md
FRONTEND-ELITE-README.md
.agents/
  rules/
    01-design-quality.md
    02-frontend-engineering.md
    03-responsive-accessibility.md
    04-quality-assurance.md
  skills/frontend-elite-engine/
    SKILL.md
    references/
      workflow.md
      skill-routing.md
      quality-gates.md
    templates/
      project-audit.md
      delivery-report.md
  scripts/verify-frontend-elite.ps1
```

## Verificação
Na raiz do projeto:
```powershell
powershell -ExecutionPolicy Bypass -File .\.agents\scripts\verify-frontend-elite.ps1
```
O script só verifica a presença dos arquivos; não instala dependências nem altera o projeto.

## Skills e ferramentas externas
Este pacote é o orquestrador, não uma cópia nem instalador automático de ferramentas de terceiros. O agente deve detectar o que está realmente instalado.

| Recurso | Função | Condição |
|---|---|---|
| UI/UX Pro Max | Pesquisa de padrões e Design System | Se detectada |
| Frontend Design | Direção criativa | Se detectada |
| Taste Skill | Direção de arte | Se detectada |
| Impeccable | Crítica, auditoria e refinamento | Se instalado |
| Vercel Web Design Guidelines | Auditoria de UI/UX e acessibilidade | Se detectada |
| Vercel React Best Practices | Performance React/Next | Só em React/Next |
| Emil Design Engineering | Motion e microinterações | Se detectada |
| shadcn/ui | Componentes | Só se stack compatível |
| Playwright | Testes de navegador | Se configurado |
| Google Stitch | Design assistido por IA | Só com serviço/MCP configurado |

### Instalações opcionais
Execute separadamente e revise as alterações:
```powershell
npx impeccable install
npx skills add anthropics/skills --skill frontend-design
npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
npx skills add vercel-labs/agent-skills --skill react-best-practices
npx skills add emilkowalski/skills
```
Confirme nomes e instruções na documentação atual de cada repositório antes de instalar. shadcn/ui, Playwright e Google Stitch podem exigir configuração adicional e não são tratados como skills intercambiáveis.

## Autonomia e limites
O agente pode analisar, implementar, testar e corrigir alterações rotineiras no workspace. Exige autorização antes de deploy, commit, push, PR, alterações remotas, ações destrutivas, uso de credenciais/serviços pagos ou migração estrutural de framework.

## Documentação oficial
- https://antigravity.google/docs/skills
- https://antigravity.google/docs/rules/
- https://antigravity.google/docs/customization-discovery/
- https://antigravity.google/docs/learn/prompting
