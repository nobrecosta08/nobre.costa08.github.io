# 🌍 Nômade Turismo

Bem-vindo ao **Nômade Turismo** - Sua plataforma definitiva para explorar o mundo e descobrir destinos incríveis!

## 📋 Sobre o Projeto

**Nômade Turismo** é um site moderno e responsivo dedicado a apresentar destinos turísticos exclusivos ao redor do mundo. Com design elegante e interface intuitiva, a plataforma oferece uma experiência imersiva para viajantes que buscam aventuras inesquecíveis.

### ✨ Características Principais

- 🎨 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Carregamento rápido e suave
- 🧭 **Navegação Intuitiva** - Menu mobile com animações fluidas
- 📱 **Mobile-First** - Desenvolvido com foco em dispositivos móveis
- ♿ **Acessibilidade** - Estrutura semântica HTML5 e SEO otimizado
- 🎯 **Clean Code** - Código limpo, bem organizado e fácil de manter

## 🏗️ Estrutura do Projeto

```
nomade-turismo/
├── index.html           # Página principal
├── css/
│   └── style.css        # Estilos responsivos (Flexbox, Grid, Media Queries)
├── js/
│   └── script.js        # Funcionalidades (Menu mobile, Scroll suave)
└── img/                 # Imagens e ícones
    ├── hero-bg.jpg      # Background da seção hero
    ├── destino1.jpg     # Maldivas
    ├── destino2.jpg     # Paris
    └── destino3.jpg     # Machu Picchu
```

## 🎨 Paleta de Cores

- **Primária**: `#d4a373` - Tom terroso/bege (Nômade)
- **Escura**: `#1a1a1a` - Preto profundo
- **Clara**: `#fefae0` - Bege claro
- **Branco**: `#ffffff` - Branco puro

## 🚀 Tecnologias Utilizadas

- **HTML5** - Markup semântico
- **CSS3** - Flexbox, CSS Grid, Media Queries
- **JavaScript (Vanilla)** - Menu responsivo e interatividade
- **Font Awesome 6** - Ícones modernos

## 📱 Responsividade

O site utiliza **mobile-first approach** com breakpoints:
- 📱 Mobile: até 768px
- 💻 Desktop: 768px+

## ⚙️ Funcionalidades JavaScript

### Menu Mobile
- Toggle de menu com clique no ícone hamburger
- Animação suave de entrada/saída
- Ícone muda de hamburger (☰) para fechar (✕)
- Fecha automaticamente ao clicar em um link

### Scroll Suave
- Navegação âncora com scroll smooth
- Transição elegante entre seções

## 🛠️ Como Usar

1. **Clone ou acesse o repositório:**
   ```bash
   git clone https://github.com/nobrecosta08/nobre.costa08.github.io.git
   cd nobre.costa08.github.io/nomade-turismo
   ```

2. **Abra no navegador:**
   - Clique duas vezes em `index.html` ou
   - Use um servidor local (recomendado)

3. **Servidor Local (Python 3):**
   ```bash
   python -m http.server 8000
   ```
   Acesse: `http://localhost:8000/nomade-turismo`

## 📖 Seções do Site

### 1. **Navbar Fixa**
- Logo "NÔMADE TURISMO" com destaque em cor primária
- Menu de navegação com links para seções
- Botão "Fale Conosco"
- Menu hamburger responsivo para mobile

### 2. **Hero Section**
- Background de imagem com overlay escuro
- Título principal: "Sua próxima aventura começa aqui"
- Subtítulo descritivo
- CTA (Call-to-Action) para explorar destinos

### 3. **Grid de Destinos**
- 3 cards de destinos em destaque
- Cards responsivos com imagens
- Informações e botões "Saiba Mais"
- Efeito hover elegante

## 📝 Personalização

### Mudar Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary: #d4a373;    /* Cor principal */
    --dark: #1a1a1a;       /* Texto escuro */
    --light: #fefae0;      /* Fundo claro */
    --white: #ffffff;      /* Branco */
}
```

### Adicionar Destinos
Adicione novos cards no HTML:
```html
<div class="card">
    <div class="card-img" style="background-image: url('img/novo-destino.jpg');"></div>
    <div class="card-info">
        <h3>Nome do Destino</h3>
        <p>Descrição breve</p>
        <a href="#" class="btn-card">Saiba Mais</a>
    </div>
</div>
```

## 🔍 SEO Otimizado

- Meta tags descritivas
- Estrutura semântica HTML5
- Open Graph pronto para social sharing
- Viewport configurado para mobile

## 🎯 Próximas Melhorias

- [ ] Seção "Sobre Nós"
- [ ] Formulário de contato funcional
- [ ] Galeria de imagens expandida
- [ ] Depoimentos de clientes
- [ ] Blog de viagens
- [ ] Sistema de agendamento
- [ ] Dark Mode

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através de:
- GitHub: [@nobrecosta08](https://github.com/nobrecosta08)
- Email: nobre.costa08@email.com

## 📄 Licença

Este projeto está disponível para uso pessoal e comercial.

---

**Desenvolvido com ❤️ para viajantes do mundo**

Feito por [Nobre Costa](https://github.com/nobrecosta08) | 2026
