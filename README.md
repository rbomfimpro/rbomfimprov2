# rbomfim.pro

Site profissional de **Rodrigo Bomfim** — Site Reliability Engineer.

Design inspirado em terminal/CLI com estética minimalista escura e acentos verdes.

> "A simplicidade é o maior grau de sofisticação."

## Preview

O site simula uma sessão de terminal onde cada seção é um comando:
- `$ whoami` — Apresentação
- `$ kubectl get stack -o wide` — Skills categorizadas
- `$ git log --oneline --career` — Trajetória profissional
- `$ cat /etc/credentials` — Certificações
- `$ echo $CONTACT` — Contato
- `# █` — Cursor piscando

## Stack

- HTML5 semântico
- CSS3 com custom properties
- JavaScript vanilla
- GitHub Pages

## Desenvolvimento local

```bash
python3 -m http.server 8080
```

## Desenvolvido com Claude Code

Este projeto foi desenvolvido utilizando [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) como ferramenta de aprendizado. A estrutura `.claude/` contém agents, commands e skills personalizados para o projeto.

## Licença

MIT
