Inicia um servidor HTTP local para testar o site.

Porta: $ARGUMENTS (padrão: 8080 se não informada)

Execute os seguintes passos:

1. Determine a porta: use `$ARGUMENTS` se fornecido, caso contrário use `8080`
2. Inicie o servidor com o Bash tool em background:
   ```
   python3 -m http.server <porta>
   ```
   Execute a partir do diretório raiz do projeto (`/Users/rbomfim/Documents/git/rbomfimprov2`).
3. Informe ao usuário:
   - URL de acesso: `http://localhost:<porta>`
   - URL do protótipo: `http://localhost:<porta>/prototype/prototype_portfolio.html`
   - Como encerrar: Ctrl+C no terminal ou encerre o processo
