/* 
   📁 ESTRUTURA RECOMENDADA DE IMAGENS
   ══════════════════════════════════════════════════════════════════
   
   Guia para organizar suas imagens no projeto "Instinto Nômade"
   
   ══════════════════════════════════════════════════════════════════
*/

/img
  ├── hero/
  │   ├── background-montanha.jpg (1920x1080, ~150-200KB)
  │   ├── background-rapel.jpg (1920x1080, ~150-200KB)
  │   └── background-natureza.jpg (1920x1080, ~150-200KB)
  │
  ├── activities/
  │   ├── rapel-vertical-01.jpg (600x400, ~80-100KB)
  │   ├── rapel-vertical-02.jpg (600x400, ~80-100KB)
  │   ├── montanhismo-01.jpg (600x400, ~80-100KB)
  │   ├── montanhismo-02.jpg (600x400, ~80-100KB)
  │   ├── survival-01.jpg (600x400, ~80-100KB)
  │   └── survival-02.jpg (600x400, ~80-100KB)
  │
  ├── testimonials/
  │   ├── avatar-joao.jpg (200x200, ~20KB)
  │   ├── avatar-maria.jpg (200x200, ~20KB)
  │   └── avatar-carlos.jpg (200x200, ~20KB)
  │
  ├── icons/
  │   ├── logo.svg (sem limite de tamanho, vetorial)
  │   ├── logo.png (200x200, ~15KB)
  │   ├── favicon.ico (16x16, ~5KB)
  │   ├── bussola.svg (ícone customizado)
  │   └── montanha.svg (ícone customizado)
  │
  └── gallery/
      ├── img-1.jpg
      ├── img-2.jpg
      ├── img-3.jpg
      └── ... (conforme necessário)


═════════════════════════════════════════════════════════════════════

📏 ESPECIFICAÇÕES RECOMENDADAS POR TIPO:

1. HERO BACKGROUND:
   ├─ Dimensão: 1920x1080 (16:9)
   ├─ Peso: 150-200KB
   ├─ Formato: JPG (comprimido)
   ├─ Características:
   │  ├─ Montanha, natureza, aventura
   │  ├─ Dramático e inspirador
   │  ├─ Contraste bom com texto
   │  └─ Possa ter overlay escuro

2. ACTIVITY CARDS:
   ├─ Dimensão: 600x400 (3:2)
   ├─ Peso: 80-100KB cada
   ├─ Formato: JPG ou WebP
   ├─ Características:
   │  ├─ Mostrar equipamento/atividade
   │  ├─ Cor vibrante
   │  ├─ Pessoas em ação
   │  └─ Seguro & profissional

3. TESTIMONIAL AVATARS:
   ├─ Dimensão: 200x200 (1:1)
   ├─ Peso: 15-25KB cada
   ├─ Formato: JPG
   ├─ Características:
   │  ├─ Retrato com fundo neutro
   │  ├─ Rosto bem visível
   │  ├─ Profissional
   │  └─ Rosto centralizado

4. LOGO:
   ├─ Dimensão: 300x300 (flexível)
   ├─ Peso: 5-15KB
   ├─ Formato: SVG (melhor) ou PNG transparente
   ├─ Características:
   │  ├─ Simples e memorável
   │  ├─ Legível em pequeno
   │  ├─ Funciona em claro e escuro
   │  └─ Escalável sem perder qualidade

5. FAVICON:
   ├─ Dimensão: 32x32 (múltiplos: 16, 32, 64)
   ├─ Peso: 5KB
   ├─ Formato: ICO ou PNG
   ├─ Características:
   │  ├─ Ícone simples do logo
   │  ├─ Reconhecível em abas de browser
   │  └─ Contrastante


═════════════════════════════════════════════════════════════════════

🖼️ COMO INTEGRAR AS IMAGENS:

1. HERO BACKGROUND (index.html):
   ─────────────────────────────
   Adicionar em CSS (style.css, .hero-background):
   
   .hero-background {
       background-image: url('../img/hero/background-montanha.jpg');
       background-size: cover;
       background-position: center;
       background-attachment: fixed; /* Parallax */
   }

2. ACTIVITY CARDS (já marcado no HTML):
   ─────────────────────────────────────
   Adicionar imagem em cada card (index.html, .atividade-card):
   
   <div class="atividade-card">
       <img src="img/activities/rapel-vertical-01.jpg" 
            alt="Rapel Vertical" class="atividade-imagem">
       <div class="atividade-icon">
           <i class="fas fa-person-hiking"></i>
       </div>
       ...
   </div>

   CSS para a imagem:
   
   .atividade-imagem {
       width: 100%;
       height: 250px;
       object-fit: cover;
       border-radius: 8px 8px 0 0;
       margin-bottom: var(--spacing-md);
   }

3. TESTIMONIAL AVATARS (opcional):
   ─────────────────────────────────
   <div class="depoimento-card">
       <img src="img/testimonials/avatar-joao.jpg" 
            alt="João Silva" class="depoimento-avatar">
       <div class="stars">...</div>
       ...
   </div>

4. LOGO CUSTOMIZADO (index.html, .logo):
   ──────────────────────────────────────
   <a href="#inicio" class="logo">
       <img src="img/icons/logo.svg" alt="Logo Instinto Nômade">
       <span>Instinto Nômade</span>
   </a>

5. FAVICON (index.html, <head>):
   ──────────────────────────────
   <link rel="shortcut icon" href="img/icons/favicon.ico" type="image/x-icon">
   <link rel="icon" href="img/icons/favicon.ico" type="image/x-icon">


═════════════════════════════════════════════════════════════════════

🎨 DICAS DE EDIÇÃO/CRIAÇÃO:

Ferramentas Gratuitas Online:
├─ Canva (design): https://canva.com
├─ Pixlr (edição): https://pixlr.com
├─ Photopea (Photoshop online): https://photopea.com
├─ Pexels (fotos grátis): https://pexels.com
├─ Unsplash (fotos grátis): https://unsplash.com
└─ TinyPNG (compressão): https://tinypng.com

Ferramentas Desktop:
├─ GIMP (gratuito, tipo Photoshop)
├─ Krita (gratuito, digital art)
├─ Inkscape (gratuito, vetores/SVG)
└─ DaVinci Resolve (gratuito, vídeo)

Banco de Imagens:
├─ Pexels.com (qualidade alta, grátis)
├─ Unsplash.com (muitas opções, grátis)
├─ Pixabay.com (diverso, grátis)
├─ Adobe Stock (pago, profissional)
└─ Shutterstock (pago, profissional)


═════════════════════════════════════════════════════════════════════

✅ CHECKLIST DE IMAGENS:

Para cada imagem:
  ☐ Dimensão correta para tipo
  ☐ Comprimida (< 200KB)
  ☐ Formato otimizado (JPG/WebP)
  ☐ Alt text descritivo
  ☐ Nome descritivo em lowercase
  ☐ Sem espaços (usar hífen)
  ☐ Não usar acentos
  
Total do projeto:
  ☐ Hero: ~200KB
  ☐ Activities: ~500KB (6 imagens)
  ☐ Avatars: ~75KB (3 imagens)
  ☐ Icons: ~30KB
  ═══════════════════════════════
  ☐ TOTAL: ~805KB (aceitável)


═════════════════════════════════════════════════════════════════════

🚀 SCRIPT PARA OTIMIZAR IMAGENS (PYTHON):

Se usar Python, script para converter e comprimir:

────────────────────────────────────────────────────

#!/usr/bin/env python3
from PIL import Image
import os
import sys

def optimize_image(input_path, output_path, max_size=(1920, 1080)):
    """Redimensiona e comprime imagem"""
    img = Image.open(input_path)
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    
    # Converter para RGB se necessário
    if img.mode == 'RGBA':
        rgb_img = Image.new('RGB', img.size, (255, 255, 255))
        rgb_img.paste(img, mask=img.split()[3] if len(img.split()) == 4 else None)
        rgb_img.save(output_path, quality=85, optimize=True)
    else:
        img.save(output_path, quality=85, optimize=True)
    
    print(f"✅ Otimizado: {output_path}")

# Usar:
# optimize_image('imagem.jpg', 'imagem-otimizada.jpg')

────────────────────────────────────────────────────


═════════════════════════════════════════════════════════════════════

📝 EXEMPLO HTML COM IMAGENS:

<section id="atividades" class="atividades">
    <div class="container">
        <h2 class="section-title">Nossas Atividades</h2>
        <div class="atividades-grid">
            
            <div class="atividade-card">
                <img src="img/activities/rapel-vertical-01.jpg" 
                     alt="Participante fazendo rapel em parede vertical" 
                     class="atividade-imagem">
                <div class="atividade-icon">
                    <i class="fas fa-person-hiking"></i>
                </div>
                <h3>Rapel Vertical</h3>
                ...
            </div>

        </div>
    </div>
</section>

═════════════════════════════════════════════════════════════════════

🔗 REFERÊNCIAS RÁPIDAS:

Onde encontrar elementos visuais:
  • Montanhas: Unsplash, Pexels (buscar "mountain", "climbing")
  • Pessoas aventura: Unsplash (buscar "outdoor adventure")
  • Natureza: Pexels (buscar "nature", "forest")
  • Ícones: FontAwesome (já incluído)
  • Cores: Coolors.co (paletas profissionais)

═════════════════════════════════════════════════════════════════════

🎯 PRIORIDADE DE IMAGENS:

1. CRÍTICA (comece por aqui):
   ✓ Hero background (visual principal)
   ✓ Logo (identidade)

2. IMPORTANTE:
   ✓ Activity images (mostram oferecimento)
   ✓ Favicon

3. NICE-TO-HAVE:
   ✓ Avatar testimonials
   ✓ Gallery adicional

═════════════════════════════════════════════════════════════════════

Site sem imagens ainda funciona, mas com elas:
├─ Mais profissional ✓
├─ Maior engajamento ✓
├─ Melhor SEO ✓
├─ Confiança do cliente ✓

═════════════════════════════════════════════════════════════════════
*/
