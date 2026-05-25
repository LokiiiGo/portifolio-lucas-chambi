# Portifólio de Lucas Chambi

Boas-vindas ao meu portifólio!

Este projeto é a minha plataforma para compartilhar um pouco sobre quem eu sou e o trabalho que venho realizando.

Ele foi construído com foco em **performance** e **experiência do usuário (UX)**, utilizando tecnologias do ecossistema JavaScript.

## Visão geral

O portifólio é um site de apresentação com seções organizadas em componentes, incluindo:
- **Sobre**: descrição e trajetória
- **Habilidades**: tecnologias e competências
- **Projetos**: lista de aplicações
- **Contato**: formas de comunicação
- **Rodapé**: informações finais

A interface é montada em componentes reutilizáveis, facilitando evolução e manutenção.

## Stack (tecnologias utilizadas)

- **React**
- **Vite**
- **Tailwind CSS**
- **ESLint** (qualidade de código)
- **framer-motion** (animações)
- **lucide-react** (ícones)

## Estrutura do projeto

- `index.html` — entrada do app
- `vite.config.js` — configuração do Vite
- `src/main.jsx` — bootstrap do React
- `src/App.jsx` — montagem das seções do portifólio
- `src/components/` — componentes principais do layout:
  - `Cabecalho.jsx`
  - `Sobre.jsx`
  - `Habilidades.jsx`
  - `Projetos.jsx`
  - `Contato.jsx`
  - `Rodape.jsx`
- `src/App.css` — estilos adicionais (quando aplicável)
- `public/` — assets estáticos (imagens e ícones)

## Como executar (local)

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Como gerar build

```bash
npm run build
```

## Preview do build

```bash
npm run preview
```