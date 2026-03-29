# rbomfim.pro — Site Pessoal SRE

## Visão geral

Site profissional de Rodrigo Bomfim, Site Reliability Engineer, hospedado no GitHub Pages.
Design inspirado em terminal/CLI com estética minimalista escura e acentos verdes.

**Princípio:** "A simplicidade é o maior grau de sofisticação."

## Prototype
O processo seguiu três etapas: primeiro, foi criado um plano no Claude Web a partir de preferências pessoais e sugestões geradas pela ferramenta. Em seguida, esse plano foi materializado no protótipo prototype/prototype_portfolio.html. Por fim, com o protótipo aprovado, foram gerados o CLAUDE.md e todos os arquivos de configuração no diretório .claude/ (agents, commands, skills e settings).

## Stack

- **HTML5** semântico + **CSS3** (sem frameworks CSS)
- **JavaScript** vanilla (sem dependências de runtime)
- **Hospedagem:** GitHub Pages (repositório `rbomfimpro.github.io`)
- **Domínio:** rbomfim.pro
- **Fonte:** JetBrains Mono (Google Fonts) ou Fira Code como fallback

## Identidade visual

### Paleta de cores

```
--bg-primary:    #0d1117    (fundo principal)
--bg-secondary:  #161b22    (cards, tags)
--border:        #21262d    (bordas sutis)
--text-primary:  #e6edf3    (texto principal)
--text-secondary:#7d8590    (texto auxiliar, comandos)
--accent:        #3fb950    (verde terminal — destaques, labels, cursor)
```

### Princípios de design

- Monocromático escuro com acentos verdes
- Tipografia 100% monospace
- Cada seção simulada como comando de terminal ($ whoami, $ kubectl get stack, etc.)
- Cards com `border-radius: 10px` e borda `1px solid #21262d`
- Tags/pills para skills individuais
- Timeline com linha vertical e dots (verde ativo, outline para passado)
- Cursor bloco piscando (`#` + bloco verde) no rodapé
- Zero imagens decorativas — a informação é o design
- Responsivo: grid 2 colunas → 1 coluna em mobile

## Estrutura de arquivos

```
/
├── index.html          # Página única (SPA-like)
├── css/
│   └── style.css       # Estilos (custom properties + layout)
├── js/
│   └── main.js         # Animações e interatividade
├── assets/
│   └── favicon.svg     # Favicon terminal-style
├── CNAME               # Domínio customizado
├── .nojekyll           # Desativa Jekyll no GitHub Pages
└── README.md           # Documentação do repositório
```

## Seções do site

1. **$ whoami** — Nome, título (SRE), bio resumida
2. **$ kubectl get stack -o wide** — Grid 2x2 de cards categorizados (Cloud, Containers, Observability, IaC & CI/CD) com tags
3. **$ git log --oneline --career** — Timeline com linha vertical, dots coloridos, cargo + empresa + período
4. **$ cat /etc/credentials** — Certificações (LPIC-1, ITILv3)
5. **$ echo $CONTACT** — Email, LinkedIn, GitHub em linha horizontal com separadores
6. **# █** — Cursor bloco verde piscando (rodapé vivo)

## Dados do perfil

```yaml
nome: Rodrigo Bomfim
titulo: Site Reliability Engineer
localizacao: Joinville, SC
email: rbomfim.pro@gmail.com
linkedin: rbomfimpro
github: rbomfimpro

experiencia:
  - cargo: SRE
    empresa: Cortex Intelligence
    periodo: 08/2020 — 10/2023
  - cargo: Analista de Operações
    empresa: Bemobi
    periodo: 12/2018 — 08/2020
  - cargo: Analista de Suporte
    empresa: Betunel
    periodo: 07/2014 — 07/2018

formacao:
  - curso: Gestão de Tecnologia da Informação
    instituicao: Universidade Estácio de Sá
    periodo: 2012 — 2016

certificacoes:
  - LPIC-1 (Linux Professional Institute)
  - ITILv3 (IT Service Management)

stack:
  cloud: [EC2, ECS, VPC, Route53, IAM, S3, RDS, MSK]
  containers: [Docker, Kubernetes, Helm, ECS]
  observability: [Prometheus, Grafana, Datadog, CloudWatch, Graylog]
  iac_cicd: [Terraform, Ansible, GH Actions, Jenkins]
  languages: [Shell Scripting, Python]
  databases: [Postgres, Snowflake]
  tools: [Linux, Git, Apache]
```

## Comandos úteis

```bash
# Desenvolvimento local
python3 -m http.server 8080        # Servidor local
open http://localhost:8080          # Abrir no browser

# Deploy
git add . && git commit -m "feat: descrição" && git push

# Validação
npx html-validate index.html       # Validar HTML
npx lighthouse http://localhost:8080 --view  # Performance
```

## Padrões de código

- HTML: semântico, acessível (ARIA labels, alt texts, lang="pt-BR")
- CSS: custom properties para cores, mobile-first, sem `!important`
- JS: vanilla ES6+, sem transpiler, sem bundler
- Commits: Conventional Commits (feat:, fix:, style:, docs:)
- Sem dependências npm de runtime — apenas dev tools opcionais

## Acessibilidade

- Contraste mínimo WCAG AA entre texto e fundo
- Navegação por teclado funcional
- `prefers-reduced-motion` respeitado (desativa animação do cursor)
- Meta tags completas (Open Graph, description, viewport)

## Performance

- Alvo: Lighthouse 95+ em todas as categorias
- Fonte carregada com `font-display: swap`
- CSS e JS inline ou minificados
- Sem JavaScript bloqueante no carregamento inicial
