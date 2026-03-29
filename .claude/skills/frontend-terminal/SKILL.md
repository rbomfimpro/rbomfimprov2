---
name: frontend-terminal
description: >
  Skill para criar componentes visuais no estilo terminal SRE.
  Use quando precisar criar novos elementos de UI, seções ou
  componentes que sigam o design system terminal do projeto rbomfim.pro.
---

# Frontend Terminal Style — Design System

Este skill define como criar componentes no estilo terminal para o site rbomfim.pro.

## Anatomia de uma seção

Toda seção segue este padrão:

```html
<section class="section" aria-label="Descrição da seção">
  <p class="cmd">$ comando-tematico</p>
  <!-- conteúdo da seção -->
</section>
```

## Componentes disponíveis

### 1. Card com categoria

```html
<div class="stack-card">
  <p class="stack-label">NOME_CATEGORIA</p>
  <div class="tags">
    <span class="tag">Item</span>
  </div>
</div>
```

- Label sempre em MAIÚSCULAS com `letter-spacing: 1px`
- Tags são pills com fundo `--bg-secondary` e `border-radius: 6px`

### 2. Timeline item

```html
<div class="timeline-item">
  <div class="timeline-dot active"></div>  <!-- ou class="past" -->
  <p class="timeline-title">Cargo</p>
  <p class="timeline-company">Empresa</p>
  <p class="timeline-date">Período</p>
</div>
```

- Primeiro item (mais recente) = dot `active` (verde sólido)
- Demais items = dot `past` (outline)
- Empresa do item ativo em verde, demais em `--text-secondary`

### 3. Cert card

```html
<div class="cert-card">
  <p class="cert-label">CERTIFIED</p>
  <p class="cert-name">Nome da Certificação</p>
</div>
```

### 4. Linha de contato

```html
<div class="contact-row">
  <a href="mailto:email">email</a>
  <span class="separator">|</span>
  <a href="url">Label</a>
</div>
```

### 5. Cursor terminal (rodapé)

```html
<div class="cursor-line">
  <span class="cursor-prompt">#</span>
  <span class="cursor-block"></span>
</div>
```

A animação do cursor usa `animation: blink 1s step-end infinite` (liga/desliga abrupto).

## Regras ao criar novos componentes

1. Escolha um comando de terminal real/plausível para o título da seção
2. Use APENAS as custom properties definidas no `:root`
3. Mantenha `border-radius: 10px` para cards, `6px` para tags
4. Grid responsivo: `grid-template-columns: 1fr 1fr` → `1fr` em mobile
5. Nenhum ícone/imagem — apenas texto e formas CSS
6. Teste com `prefers-reduced-motion` (desativar animações)

## Comandos já usados

| Seção | Comando |
|-------|---------|
| Sobre | `$ whoami` |
| Stack | `$ kubectl get stack -o wide` |
| Carreira | `$ git log --oneline --career` |
| Certificações | `$ cat /etc/credentials` |
| Contato | `$ echo $CONTACT` |

## Sugestões para novas seções

| Seção | Comando sugerido |
|-------|-----------------|
| Projetos | `$ ls ~/projects` |
| Educação | `$ cat ~/.education` |
| Blog/Posts | `$ tail -f /var/log/thoughts` |
| Idiomas | `$ locale -a` |
| Interesses | `$ cat /proc/interests` |
