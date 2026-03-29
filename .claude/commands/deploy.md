Processo seguro de deploy para GitHub Pages.

Antes de fazer push, execute estes passos em ordem:

1. **Validação completa:** Execute o comando /validate
2. **Revisão de código:** Execute o code-reviewer agent nos arquivos modificados
3. **Git status:** Mostre os arquivos modificados com `git status`
4. **Diff review:** Mostre um resumo das mudanças com `git diff --stat`
5. **Confirmação:** Pergunte ao usuário se deseja prosseguir

Se o usuário confirmar:
6. `git add .`
7. `git commit -m "mensagem"` — use Conventional Commits (feat:, fix:, style:, docs:)
8. Peça confirmação final antes do push
9. `git push origin main`

Se houver erros na validação, liste-os e pergunte se o usuário quer corrigir antes de continuar.

Motivo do deploy: $ARGUMENTS
