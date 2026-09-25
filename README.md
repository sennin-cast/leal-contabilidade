# Leal Assessoria Contábil - Landing Page de Alta Conversão

Landing page institucional e estratégica de alta conversão desenvolvida para a **Leal Assessoria Contábil**, seguindo a estética **"Fintech & Luxury Minimalist"** e em estrita conformidade com o Código de Ética Profissional do Contador (Resolução CFC nº 803/1996), Conselho Regional de Contabilidade do Rio de Janeiro (CRC/RJ) e Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).

---

## 🏛️ Dados Institucionais & Responsabilidade Técnica

- **Razão Social / Marca:** Leal Assessoria Contábil
- **Responsáveis Técnicos e Registros Profissionais:**
  - **Ademar Rodrigues Leal** – *Contador Fundador* – **CRC/RJ 062692/O-8** (Fundado em 1989)
  - **Lucas Heckert Leal** – *Contador e Diretor Executivo* – **CRC/RJ 119264/O-8** (Desde 2016)
- **Sede Própria:** Rua Otávio Tarquino, 507, Loja – Centro, Nova Iguaçu - RJ, CEP: 26210-171, Brasil.
- **WhatsApp / Contato Oficial:** [(21) 99644-76004](https://wa.me/55219964476004)
- **Horário:** Segunda a Sexta das 08:30 às 17:30 (Plataforma digital 24/7)

---

## 👨‍💻 Créditos de Desenvolvimento

- **Desenvolvedor Frontend / UI/UX:** Esdras Dantas
- **WhatsApp:** [(21) 97945-1436](https://wa.me/5521979451436)

---

## 🚀 Stack Tecnológica

- **Frontend:** React 18 + TypeScript + Vite 6
- **Estilização:** Tailwind CSS 3.4 com tokens customizados de luxo & fintech
- **Ícones:** Lucide React
- **Arquitetura:** Componentes modulares, tipagem estrita, SEO semântico e Schema JSON-LD (`AccountingService`, `LocalBusiness`, `FAQPage`)
- **Deploy Contínuo:** GitHub Actions com deploy automatizado no GitHub Pages (`.github/workflows/deploy.yml`)

---

## 🎨 Paleta de Cores & Design Tokens

| Tom | Hexadecimal | Aplicação |
|---|---|---|
| **Azul Marinho Nobre** | `#0D1B2A` / `#070D16` | Backgrounds profundos e contrastes executivos |
| **Ouro / Dourado Clássico** | `#C5A869` / `#D4AF37` | Acentos nobres, botões de ação e bordas |
| **Azul Cobalto** | `#2563EB` / `#1E40AF` | Indicadores de tecnologia e botões secundários |
| **Verde Esmeralda Fintech** | `#10B981` / `#059669` | Indicadores de economia, status online e WhatsApp |
| **Cinza Grafite & Slate** | `#1E293B` / `#F8FAFC` | Cards glassmorphism e tipografia de alto contraste |

---

## 📱 Seções da Landing Page

1. **Topbar Regulatória:** Exibição imediata dos registros no CRC/RJ, SLA de atendimento em até 15 minutos e WhatsApp direto.
2. **Navbar Flutuante:** Logotipo oficial `Logo.jpg`, menu suave com âncoras e botão CTA para WhatsApp.
3. **Hero Section (Above the Fold):** Headline persuasiva, subheadline explicativa, duplo CTA ("Quero Reduzir Meus Impostos" e "Calcular Minha Economia") e trust badges (Google 4.9, 35+ anos, CRC ativo, 100% digital e LGPD).
4. **Grid de Especialidades por Nicho:**
   - Médicos, Clínicas e Saúde (Equiparação Hospitalar + Fator R)
   - Prestadores de Serviços & TI (Anexo III 6% + Isenção em remessas internacionais)
   - E-commerce & Negócios Digitais (Segregação de receitas e monofásicos)
   - Advogados & Engenheiros (Sociedade Unipessoal e honorários)
   - Comércio & PMEs (BPO financeiro e garantia contra multas)
5. **Os 5 Pilares de Serviços Oficiais:**
   - 01. Abertura e Regularização de Empresas
   - 02. Escrituração Contábil e Fiscal
   - 03. Gestão de Departamento Pessoal
   - 04. Planejamento Tributário
   - 05. Consultoria Financeira e Gerencial
6. **Trocar de Contador é Simples e Rápido:** Processo descomplicado em 3 passos (Diagnóstico Gratuito -> Migração Guiada -> Integração & Início).
7. **Simulador / Calculadora de Economia Tributária:** Componente dinâmico que recalcula em tempo real a alíquota atual vs alíquota otimizada, com projeção mensal e anual e botão de envio de laudo para WhatsApp.
8. **Diferenciais Tecnológicos & Parceiros ERP:** Atendimento em 15 minutos, plataforma na nuvem 24/7, conformidade LGPD e parcerias com Omie, ContaAzul, Totvs, Domínio e Certisign.
9. **Nossa História (Tradição e Inovação):** Destaque para o fundador Ademar Rodrigues Leal (1989) e a modernização com Lucas Heckert Leal (2016), com a foto oficial `lucasleal.png`.
10. **Prova Social & Métricas:** Depoimentos de empresários, nota 4.9 no Google e métrica de mais de R$ 18 Milhões economizados legalmente.
11. **Localização Interativa (Google Maps):** Embed interativo da sede na Rua Otávio Tarquino, 507, Nova Iguaçu, botões de rota GPS (Google Maps e Waze) e horários.
12. **FAQ Antiobjeções:** Acordeão dinâmico com respostas para as 5 principais dúvidas dos clientes.
13. **Rodapé Institucional & LGPD:** Dados completos, responsabilidade técnica, conformidade com o Código de Ética do CFC e créditos do desenvolvedor Esdras Dantas.
14. **Modal de Qualificação em 2 Etapas:** Formulário com máscaras de Telefone e CNPJ.
15. **Botão Flutuante de WhatsApp:** Pulsante com balão de atenção "Atendimento em até 15 min".

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18+)
- npm instalado

### Rodar localmente em desenvolvimento:
```bash
npm install
npm run dev
```
Acesse `http://localhost:3000/` no navegador.

### Gerar build de produção:
```bash
npm run build
```
Os arquivos otimizados e prontos para hospedagem estática serão gerados na pasta `/dist`.

### Publicação no GitHub Pages:
O repositório já conta com o fluxo de integração contínua em `.github/workflows/deploy.yml`. Basta criar um repositório no GitHub, enviar os arquivos e ativar o **GitHub Pages** nas configurações do repositório apontando para **GitHub Actions**.
