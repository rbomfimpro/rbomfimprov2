Execute uma validação completa do site:

1. **HTML:** Verifique a estrutura semântica do `index.html`
   - Tags de abertura/fechamento corretas
   - Atributos obrigatórios presentes
   - Nenhum id duplicado

2. **CSS:** Analise o `css/style.css`
   - Todas as custom properties definidas no `:root`
   - Nenhuma cor hardcoded fora do `:root`
   - Media queries presentes para mobile (max-width: 600px)
   - `prefers-reduced-motion` implementado

3. **Acessibilidade:** Rode o a11y-auditor agent

4. **Design:** Rode o design-guardian agent

5. **Links:** Verifique se todos os hrefs são válidos (mailto:, https://)

6. **Performance:** Verifique se não há recursos bloqueantes

Apresente um relatório consolidado com:
- ✅ Itens aprovados
- ⚠️ Avisos
- ❌ Erros que devem ser corrigidos

$ARGUMENTS
