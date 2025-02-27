# BeTalent - Employee Table

Este é um projeto desenvolvido para gerenciar e visualizar uma tabela de funcionários de maneira eficiente e responsiva.

![BeTalent Preview Desktop](./assets/screenshots/previewDesk.png)
![BeTalent Preview Mobile](./assets/screenshots/previewMob.png)

## 📋 **Sobre o projeto**

O BeTalent - Employee Table é um sistema que lista funcionários, permite pesquisar dinamicamente e visualizar detalhes de cada um. Ele é construído com **React, TypeScript e Tailwind CSS**, seguindo boas práticas de organização de código e responsividade.

## 🚀 **Tecnologias utilizadas**

- **React** - Biblioteca para construção de interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS** - Framework de estilos utilitários para facilitar a estilização.
- **Framer Motion** - Biblioteca para animações suaves na UI.
- **JSON Server** - Simulação de uma API REST para os funcionários.
- **React Router** - Gerenciamento de rotas do projeto.
- **Context API** - Gerenciamento global de estado.

## 📂 **Estrutura de Pastas**

```bash
📦 src
├── 📂 assets              # Imagens, ícones e outros arquivos estáticos
│   ├── 📂 icons
│   ├── 📂 logo
│   └── 📂 pictures
│
├── 📂 components          # Componentes reutilizáveis (Atoms, Layout, Ícones)
│   ├── 📂 atoms
│   ├── 📂 icons
│   ├── 📂 layout
│   └── 📂 logo
│
├── 📂 context             # Gerenciamento global de estados com Context API
│
├── 📂 types               # Tipagem reutilizáveis do projeto
│
├── 📂 features            # Feature principal: Employees
│   └── 📂 employees
│       ├── 📂 components 
│       └── 📂 services    # Comunicação com API Fake (JSON Server)
│
├── 📂 hooks               # Hooks reutilizáveis do projeto
│
├── 📂 pages               # Páginas do sistema
│
├── 📂 routes              # Configuração das rotas do React Router
│
├── 📂 styles              # Arquivos de estilos e configurações do Tailwind
│
├── 📂 utils               # Funções utilitárias como formatadores de dados
│
├── 📄 App.tsx             # Home do projeto
│
└── 📄 index.tsx           # Arquivo principal do React
```



 ## 📦 **Instalação e execução**

### 🔧 **Pré-requisitos**
Antes de começar, você precisará ter instalado na sua máquina:
- [Node.js](https://nodejs.org/en/) (versão recomendada: 16+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

### 📥 **1. Clonar o Repositório**
Abra o terminal e execute:
```bash
git clone https://github.com/rodrigotgranada/table-project.git
```
Depois, acesse a pasta do projeto:
```bash
cd table-project
```

---

### 📦 **2. Instalar as Dependências**
Se estiver usando **npm**, execute:
```bash
npm install
```
Ou, se preferir **yarn**:
```bash
yarn install
```

---

### 🔥 **3. Rodar o Projeto**
Este projeto possui **scripts npm** configurados para facilitar o desenvolvimento:

- 🔹 **Rodar apenas o frontend (React):**
  ```bash
  npm start
  ```
  Ou com **yarn**:
  ```bash
  yarn start
  ```

- 🔹 **Rodar apenas o servidor fake (JSON Server):**
  ```bash
  npm run server
  ```
  Isso iniciará o servidor em **http://localhost:3001**.

- 🔹 **Rodar frontend + servidor fake simultaneamente:**
  ```bash
  npm run start:full
  ```
  Isso iniciará o servidor **JSON Server** e o React ao mesmo tempo.

---

### 🏗️ **4. Construir a Aplicação para Produção**
Se deseja criar a versão otimizada para produção:
```bash
npm run build
```
Os arquivos otimizados estarão na pasta **/build**.

---

### ✅ **Tudo pronto!**
Agora, o projeto está rodando localmente. 🎉


## 🔍 **Funcionalidades**
✔️ Listagem de funcionários  
✔️ Pesquisa dinâmica com debounce  
✔️ Responsividade para mobile e desktop  
✔️ Expansão de detalhes no mobile  
✔️ Animações suaves com Framer Motion  
✔️ Roteamento de páginas com React Router  
✔️ Página de erro 404 para rotas inexistentes  