# 🏔️ Instinto Nômade - Site Profissional

Site responsivo focado em aventuras, sobrevivência e autoconhecimento.

---

## 📋 Estrutura do Projeto

```
nomade-turismo/
├── index.html           # Página principal (estrutura semântica)
├── css/
│   └── style.css        # Estilos completos com Dark/Light Mode
├── js/
│   └── script.js        # Lógica de tema e interatividades
├── img/                 # Imagens e ícones (adicionar fotos aqui)
└── README.md            # Este arquivo
```

---

## 🎨 Sistema de Temas Dark/Light

### Como Funciona:

1. **Modo Padrão**: Escuro (tons terrosos/natureza)
2. **Modo Claro**: Alternativa com tons mais claros
3. **Detecção Automática**: Detecta preferência do SO (`prefers-color-scheme`)
4. **Persistência**: Salva preferência do usuário em `localStorage`

### Variáveis CSS Principais:

```css
/* Modo Escuro */
--bg-primary: #0d0d0d;
--color-primary: #c4934f;    /* Bronze */
--text-primary: #e8e8e8;

/* Modo Claro */
--bg-primary: #fef9f3;
--color-primary: #8b6f47;    /* Terra */
--text-primary: #1a1a1a;
```

### Toggle Manual:

Botão de alternância está no **canto superior direito** da navbar com ícone sol/lua.

---

## 🔧 Funcionalidades JavaScript

### 1. **ThemeManager** - Sistema de Temas
- Carrega tema salvo ou detecta preferência do SO
- Alterna entre dark/light com localStorage
- Atualiza ícone do botão de tema

### 2. **MobileMenu** - Menu Responsivo
- Toggle do menu em mobile
- Ícone muda de barras (☰) para fechar (✕)
- Fecha ao clicar em link ou fora do menu

### 3. **ScrollAnimations** - Animações ao Scroll
- Revela elementos com `data-animate` ao entrar em viewport
- Usa Intersection Observer para performance

### 4. **NavbarScroll** - Efeito da Navbar
- Aumenta sombra ao scrollar
- Feedback visual do scroll

### 5. **ContactForm** - Formulário de Contato
- Validação de campos obrigatórios
- Validação de email
- Feedback visual de sucesso/erro

---

## 📱 Responsividade

### Breakpoints:

| Dispositivo | Largura | Ajustes |
|---|---|---|
| Desktop | > 1024px | Grid completo |
| Tablet | 768px - 1024px | Grid reduzido |
| Mobile | < 768px | Menu suspenso, coluna única |
| Mini | < 480px | Texto menor, espaçamento otimizado |

---

## 🎯 Seções do Site

### 1. **Hero Section**
- Tagline principal: "Sobreviva. Conheça seus limites."
- CTA destacado
- Background com gradiente animado

### 2. **Filosofia** (4 Cards)
- Resiliência
- Autoconhecimento
- Domínio Técnico
- Conexão com Natureza

### 3. **Atividades** (3 Cards)
- Rapel Vertical
- Montanhismo
- Tecnicas de Sobrevivencia convencionais e não convencionais 

### 4. **Depoimentos** (3 Cards)
- Com avaliação em estrelas
- Feedback de clientes

### 5. **Contato**
- Formulário interativo
- Informações de contato
- Redes sociais

---

##

---

## 📦 Paleta de Cores

### Modo Escuro (Padrão):
- **Primária**: `#c4934f` (Bronze)
- **Secundária**: `#a67c52` (Marrom)
- **Acento**: `#d4a574` (Dourado)
- **Background**: `#0d0d0d` (Preto profundo)
- **Texto**: `#e8e8e8` (Branco macio)

### Modo Claro:
- **Primária**: `#8b6f47` (Terra)
- **Secundária**: `#6b5a3f` (Marrom escuro)
- **Acento**: `#c4934f` (Bronze)
- **Background**: `#fef9f3` (Bege claro)
- **Texto**: `#1a1a1a` (Preto)

---

## 📝 Tipografia

- **Primary Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Secondary Font**: Georgia (para headings)
- **Tamanhos**: Escala fluida baseada em rem

---

## ⚡ Performance

-  CSS Variables para tema dinâmico
-  Intersection Observer para animações
-  LocalStorage para persistência
-  FontAwesome CDN (não necessário baixar localmente)
-  Sem JavaScript pesado ou dependências externas
-  Scroll behavior suave nativo

---

## 🔍 SEO

- Meta tags descritivas
- Estrutura semântica HTML5
- Títulos e heading hierarquizados
- Alt text nos ícones FontAwesome

---

## 🛠️ Próximas Melhorias Sugeridas

- [ ] Adicionar imagens 
- [ ] Integrar backend para formulário de contato
- [ ] Animações parallax no hero
- [ ] Gallery/Portfólio de experiências
- [ ] Blog de dicas de sobrevivebcia
- [ ] Agendamento online
- [ ] Integração com redes sociais

---

## 📄 Licença

Criado para **Instinto Nômade** © 2026

---

## 📞 Contato & Suporte

**Email**: contato@???????????.com  
**Telefone**: (11) 99999-9999  
**Localização**: ??????/Brasil/

---

**Desenvolvido com cuidado e atenção para Instinto Nômade** 🏔️
