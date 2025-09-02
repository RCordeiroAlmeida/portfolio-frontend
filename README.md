# Portfolio Frontend

Este é o frontend do projeto **Portfolio**, desenvolvido com **Vue 3**, **Vite** e **Tailwind CSS**.  
O projeto utiliza Tailwind com arquivos `input.css` e `output.css` para gerar os estilos.

---

## Tecnologias

- Vue 3
- Vite
- Tailwind CSS
- PostCSS
- Lucide Icons
- Animate.css

---

## Estrutura de Arquivos

portfolio-frontend/
├─ src/
│ ├─ components/ # Componentes Vue
│ ├─ input.css # Arquivo base do Tailwind
│ ├─ output.css # CSS gerado pelo Tailwind
│ └─ main.js # Entrada do Vue
├─ tailwind.config.js # Configuração do Tailwind
├─ postcss.config.js # Configuração do PostCSS
├─ package.json
├─ package-lock.json
└─ README.md



---

## Passo a passo para rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/RCordeiroAlmeida/portfolio-frontend.git
cd portfolio-frontend
2️⃣ Instalar dependências

npm install
3️⃣ Gerar o CSS do Tailwind
O projeto usa input.css como base. Para gerar output.css e manter atualizado:


npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
O --watch recompila o CSS automaticamente sempre que você salvar alterações no input.css ou nos componentes.

4️⃣ Rodar o projeto em desenvolvimento

npm run dev
Acesse no navegador o endereço mostrado pelo Vite, normalmente http://localhost:5173/.

Observações importantes
Nunca adicione node_modules/ ao repositório. Ele já está incluído no .gitignore.

Se o output.css não estiver no repositório, rode o comando de build do Tailwind antes de iniciar o projeto.

Para deploy em produção, você pode usar:


npm run build
O build irá gerar a pasta dist/.

Contato
Para dúvidas ou sugestões, entre em contato com Rafael Cordeiro.