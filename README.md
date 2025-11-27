# 🌸 Blog Pessoal
<p align="center"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="70" alt="React Logo" /> &nbsp;&nbsp; <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="70" alt="TypeScript Logo" /> &nbsp;&nbsp; <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="70" alt="Vite Logo" /> </p>

Um projeto desenvolvido como parte do Bootcamp Generation Brasil, criando um Blog Pessoal completo, com autenticação, cadastro, CRUD de postagens e temas, alertas personalizados e integração com API REST.

Ideal para portfólio e prática de desenvolvimento Front-End! ✨

<br  />

## ✨ Funcionalidades

✔ Cadastro de usuário
✔ Login com geração de token
✔ Persistência do usuário via Context API
✔ CRUD de Temas
✔ CRUD de Postagens
✔ Atualização de Perfil
✔ Alertas personalizados com Toast
✔ Layout moderno e responsivo
✔ Consumo de API REST (Spring Boot)

<br  />

## 🎨 Estilização com Tailwind CSS

O projeto utiliza Tailwind CSS para toda a estilização da interface.
As classes são aplicadas diretamente nos componentes .tsx, dispensando arquivos .css individuais.

Isso deixa o código mais limpo, moderno e fácil de manter, além de permitir uma construção rápida de layouts responsivos.

<br  />

## 🗂 Estrutura Completa do Projeto
```pgsql
📁 blogpessoal_react/
│
├── 📁 node_modules/
│
├── 📁 public/
│   └── 📄 vite.svg
│
├── 📁 src/
│   │
│   ├── 📁 assets/
│   │   └── 📄 react.svg
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 footer/
│   │   │   └── 📄 Footer.tsx
│   │   │
│   │   ├── 📁 navbar/
│   │   │   └── 📄 Navbar.tsx
│   │   │
│   │   ├── 📁 postagem/
│   │   │   ├── 📁 cardpostagem/
│   │   │   │   └── 📄 CardPostagem.tsx
│   │   │   ├── 📁 deletarpostagem/
│   │   │   │   └── 📄 DeletarPostagem.tsx
│   │   │   ├── 📁 formpostagem/
│   │   │   │   └── 📄 FormPostagem.tsx
│   │   │   ├── 📁 listapostagem/
│   │   │   │   └── 📄 ListaPostagem.tsx
│   │   │   └── 📁 modalpostagem/
│   │   │       └── 📄 ModalPostagem.tsx
│   │   │
│   │   └── 📁 tema/
│   │       ├── 📁 cardtema/
│   │       │   └── 📄 CardTema.tsx
│   │       ├── 📁 deletartema/
│   │       │   └── 📄 DeletarTema.tsx
│   │       ├── 📁 formtema/
│   │       │   └── 📄 FormTema.tsx
│   │       └── 📁 listatemas/
│   │           └── 📄 ListaTemas.tsx
│   │
│   ├── 📁 contexts/
│   │   └── 📄 AuthContext.tsx
│   │
│   ├── 📁 models/
│   │   ├── 📄 Postagem.ts
│   │   ├── 📄 Temas.ts
│   │   ├── 📄 Usuario.ts
│   │   └── 📄 UsuarioLogin.ts
│   │
│   ├── 📁 pages/
│   │   ├── 📁 cadastro/
│   │   │   └── 📄 Cadastro.tsx
│   │   ├── 📁 home/
│   │   │   └── 📄 Home.tsx
│   │   ├── 📁 login/
│   │   │   └── 📄 Login.tsx
│   │   └── 📁 perfil/
│   │       ├── 📄 Perfil.tsx
│   │       └── 📄 AtualizarPerfil.tsx
│   │
│   ├── 📁 services/
│   │   └── 📄 Service.ts
│   │
│   ├── 📁 utils/
│   │   └── 📄 ToastAlert.ts
│   │
│   ├── 📄 App.css
│   ├── 📄 App.tsx
│   ├── 📄 index.css
│   └── 📄 main.tsx
│
├── 📄 .env
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
└── 📄 vite.config.ts

```

<br  />

## 🚀 Como rodar o projeto localmente
### 1️⃣ Clone o repositório:
```bash
git clone https://github.com/Rayssa-Ferraz/blogpessoal_react.git
cd blogpessoal_react
```

### 2️⃣ Instale as dependências:
```bash
npm install
```

### 3️⃣ Configure o arquivo .env:
```ini
VITE_API_URL=https://sua-api.com.br
```

### 4️⃣ Execute o projeto:
```bash
npm run dev
```

Acesse em:
```arduino
http://localhost:5173
```

<br  />


🧭 Rotas principais
| Rota                     | Página           |
| ------------------------ | ---------------- |
| `/`                      | Home             |
| `/login`                 | Login            |
| `/cadastro`              | Cadastro         |
| `/perfil`                | Atualizar Perfil |
| `/postagens`             | Listar Postagens |
| `/postagens/cadastrar`   | Criar Postagem   |
| `/postagens/deletar/:id` | Deletar Postagem |
| `/temas`                 | Listar Temas     |
| `/temas/cadastrar`       | Criar Tema       |
| `/temas/deletar/:id`     | Deletar Tema     |

<br  />

## 🔌 Integração com API

O projeto consome a API do Blog Pessoal em Spring Boot, utilizando:

- POST /usuarios/cadastrar

- POST /usuarios/logar

- GET/POST/PUT/DELETE /postagens

- GET/POST/PUT/DELETE /temas

Toda a comunicação é centralizada em **Service.ts** usando Axios.

<br  />

## 🔔 Alertas Personalizados — ToastAlert

Para melhorar a experiência do usuário, o projeto possui alertas visuais centralizados no arquivo:
```bash
src/utils/ToastAlert.ts
```

### 📌 Exemplos de uso:
```ts
import { ToastAlert } from "../utils/ToastAlert";

ToastAlert("Usuário cadastrado com sucesso!", "sucesso");
ToastAlert("Senha ou email inválidos!", "erro");
ToastAlert("Você precisa estar logado!", "info");
```

Tipos suportados:

- "sucesso"

- "erro"

- "warn"

- "info"

Esses alertas aparecem de forma elegante na tela e deixam o sistema mais profissional e intuitivo.

<br  />

## 🧰 Tecnologias Utilizadas

- React

- TypeScript

- Vite

- Axios

- Context API

- React Router DOM

- ToastAlert / React Toastify

- HTML5 & CSS3

<br  />


## ⭐Autora⭐

👩‍💻 Desenvolvido por [**Rayssa**](https://github.com/Rayssa-Ferraz).  
📧 Para dúvidas, sugestões ou colaborações, entre em contato:
**rayssa_nana@hotmail.com**  
🌎 [Meu Site](https://rayssa-ferraz.github.io/PORTFOLIO)



