/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 1️⃣ SISTEMA DE TEMA (Dark/Light Mode) */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.htmlElement = document.documentElement;
        this.storageKey = 'instinto-nômade-theme';
        this.init();
    }

    init() {
        // Carregar tema salvo ou detectar preferência do SO
        this.loadTheme();
        
        // Configurar listener do botão toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Detectar mudanças de preferência do SO
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                if (!this.hasUserPreference()) {
                    this.setTheme(e.matches ? 'light' : 'dark');
                }
            });
        }
    }

    loadTheme() {
        // 1. Verificar localStorage
        const savedTheme = localStorage.getItem(this.storageKey);
        if (savedTheme) {
            this.setTheme(savedTheme);
            return;
        }

        // 2. Verificar preferência do SO
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            this.setTheme('light');
        } else {
            this.setTheme('dark');
        }
    }

    setTheme(theme) {
        this.htmlElement.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        localStorage.setItem(this.storageKey, theme);
    }

    toggleTheme() {
        const currentTheme = this.htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateIcon(theme) {
        if (!this.themeToggle) return;
        
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    hasUserPreference() {
        return localStorage.getItem(this.storageKey) !== null;
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 2️⃣ MENU MOBILE */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class MobileMenu {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobile-menu');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu .nav-link');
        this.init();
    }

    init() {
        if (this.mobileMenuBtn && this.navMenu) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggle());
            this.setupLinkListeners();
            this.setupClickOutside();
        }
    }

    toggle() {
        this.navMenu.classList.toggle('active');
        this.updateIcon();
    }

    updateIcon() {
        const icon = this.mobileMenuBtn.querySelector('i');
        if (this.navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    setupLinkListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && 
                !this.mobileMenuBtn.contains(e.target) &&
                this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 3️⃣ SCROLL BEHAVIORS & ANIMAÇÕES */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), this.observerOptions);
        this.init();
    }

    init() {
        // Animar elementos com data-animate ao entrar em viewport
        const elementsToAnimate = document.querySelectorAll('[data-animate]');
        elementsToAnimate.forEach(element => {
            this.observer.observe(element);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Parar de observar após animar (performance)
                this.observer.unobserve(entry.target);
            }
        });
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 4️⃣ NAVBAR SCROLL EFFECT */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        if (this.navbar) {
            window.addEventListener('scroll', () => this.handleScroll(), false);
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Adicionar classe ao scrollar para efeito visual
        if (scrollTop > 100) {
            this.navbar.style.boxShadow = 'var(--shadow-lg)';
        } else {
            this.navbar.style.boxShadow = 'var(--shadow-md)';
        }

        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 5️⃣ FORMULÁRIO DE CONTATO */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class ContactForm {
    constructor() {
        this.form = document.getElementById('form-contato');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Validar campos
        if (!this.validateForm()) {
            return;
        }

        // Obter dados do formulário
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Aqui você implementaria a chamada para sua API
        console.log('Formulário enviado:', data);

        // Feedback visual
        this.showSuccessMessage();
        this.form.reset();

        // Limpar mensagem após 3 segundos
        setTimeout(() => this.clearMessages(), 3000);
    }

    validateForm() {
        const nome = this.form.querySelector('#nome').value.trim();
        const email = this.form.querySelector('#email').value.trim();
        const telefone = this.form.querySelector('#telefone').value.trim();

        if (!nome || !email || !telefone) {
            this.showErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        if (!this.validateEmail(email)) {
            this.showErrorMessage('Por favor, insira um email válido.');
            return false;
        }

        return true;
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    showSuccessMessage() {
        this.showMessage('✅ Mensagem enviada com sucesso! Em breve entraremos em contato.', 'success');
    }

    showErrorMessage(message) {
        this.showMessage(`❌ ${message}`, 'error');
    }

    showMessage(message, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message-${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 4px;
            background-color: ${type === 'success' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
            color: ${type === 'success' ? '#4ade80' : '#ef4444'};
            border: 1px solid ${type === 'success' ? '#4ade80' : '#ef4444'};
        `;
        this.form.insertBefore(messageEl, this.form.firstChild);
    }

    clearMessages() {
        const messages = this.form.querySelectorAll('.form-message');
        messages.forEach(msg => msg.remove());
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 6️⃣ SMOOTH SCROLL PARA LINKS */
/* ═══════════════════════════════════════════════════════════════════════════════ */

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // O comportamento smooth já está em :root { scroll-behavior: smooth; }
        // Mas podemos adicionar lógica adicional aqui se necessário
    }
}

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 7️⃣ INICIALIZAÇÃO GERAL */
/* ═══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos os componentes
    new ThemeManager();
    new MobileMenu();
    new ScrollAnimations();
    new NavbarScroll();
    new ContactForm();
    new SmoothScroll();

    console.log('🏔️ Instinto Nômade - Sistema de temas e funcionalidades ativado!');
});

/* ═══════════════════════════════════════════════════════════════════════════════ */
/* 8️⃣ UTILITÁRIOS GLOBAIS */
/* ═══════════════════════════════════════════════════════════════════════════════ */

// Função helper para scroll suave para elemento específico
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para detectar device type
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para adicionar classes em batch
function addClasses(element, classes) {
    if (element && classes) {
        classes.forEach(cls => element.classList.add(cls));
    }
}

// Função para remover classes em batch
function removeClasses(element, classes) {
    if (element && classes) {
        classes.forEach(cls => element.classList.remove(cls));
    }
}
