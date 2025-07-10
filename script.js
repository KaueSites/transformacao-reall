// ===================================
// SCRIPT PRINCIPAL DA PÁGINA DE VENDAS
// COPY PERSUASIVA E ALTA CONVERSÃO
// ===================================

// Declare global variables for tracking
const gtag =
  window.gtag ||
  (() => {}) // Google Analytics 4 // Google Analytics 4
const fbq =
  window.fbq ||
  (() => {}) // Facebook Pixel // Facebook Pixel
const rdstation =
  window.rdstation ||
  (() => {}) // RD Station // RD Station
const hj =
  window.hj ||
  (() => {}) // Hotjar // Hotjar
const clarity =
  window.clarity ||
  (() => {}) // Clarity // Clarity

document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // CONFIGURAÇÕES DE CONVERSÃO - EDITE AQUI
  // ===================================

  // EDITE: URL do seu sistema de pagamento
  const CHECKOUT_URL = "https://pay.hotmart.com/SEU_PRODUTO_ID"
  // Alternativas:
  // const CHECKOUT_URL = "https://monetizze.com.br/checkout/SEU_PRODUTO_ID"
  // const CHECKOUT_URL = "https://pagseguro.uol.com.br/checkout/SEU_PRODUTO_ID"

  // EDITE: ID do produto para tracking
  const PRODUCT_ID = "ebook-emagrecimento-realista-90-dias"

  // EDITE: Preço do produto
  const PRODUCT_PRICE = 29.9

  // ===================================
  // HEADER FLUTUANTE E SCROLL
  // ===================================

  const header = document.getElementById("header")
  const heroSection = document.getElementById("hero")

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Header com efeito de scroll
    if (scrollTop > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Botão flutuante aparece após hero
    const floatingCta = document.getElementById("floating-cta")
    const heroHeight = heroSection.offsetHeight

    if (scrollTop > heroHeight) {
      floatingCta.classList.add("show")
    } else {
      floatingCta.classList.remove("show")
    }

    // Tracking de engajamento por seção
    trackScrollDepth(scrollTop)
  }

  window.addEventListener("scroll", handleScroll)

  // ===================================
  // MENU MOBILE RESPONSIVO
  // ===================================

  const mobileToggle = document.getElementById("mobile-toggle")
  const navMenu = document.getElementById("nav-menu")

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileToggle.classList.toggle("active")
  })

  // Fechar menu ao clicar em link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileToggle.classList.remove("active")
    })
  })

  // ===================================
  // SCROLL SUAVE PARA ÂNCORAS
  // ===================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = header.offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Tracking de clique em âncora
        trackEvent("anchor_click", targetId)
      }
    })
  })

  // ===================================
  // SISTEMA DE COMPRA OTIMIZADO
  // ===================================

  const buyButtons = document.querySelectorAll("#buy-button, .btn-floating, .btn-header, .btn-primary")

  function handlePurchase(button) {
    // Prevenir cliques duplos
    if (button.classList.contains("loading")) return

    // Adicionar estado de loading
    button.classList.add("loading")
    button.style.pointerEvents = "none"

    // Tracking de tentativa de compra
    trackConversion("purchase_attempt")

    // Simular processamento (remova em produção)
    setTimeout(() => {
      // EDITE AQUI: Integração real com gateway de pagamento

      // Para Hotmart:
      window.open(`${CHECKOUT_URL}?src=landing-page&utm_source=direct`, "_blank")

      // Para Monetizze:
      // window.open(`${CHECKOUT_URL}?utm_source=landing-page`, '_blank');

      // Para PagSeguro:
      // window.open(`${CHECKOUT_URL}?reference=${PRODUCT_ID}`, '_blank');

      // Para Stripe:
      // window.open(`${CHECKOUT_URL}?client_reference_id=${PRODUCT_ID}`, '_blank');

      // Tracking de redirecionamento
      trackConversion("checkout_redirect")

      // Remover loading após redirecionamento
      setTimeout(() => {
        button.classList.remove("loading")
        button.style.pointerEvents = "auto"
      }, 3000)
    }, 1500)
  }

  // Event listeners para todos os botões de compra
  buyButtons.forEach((button) => {
    // Verificar se é realmente um botão de compra
    const isCheckoutButton =
      button.id === "buy-button" ||
      button.classList.contains("btn-floating") ||
      button.textContent.toLowerCase().includes("comprar") ||
      button.textContent.toLowerCase().includes("quero")

    if (isCheckoutButton) {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        handlePurchase(this)
      })
    }
  })

  // ===================================
  // TRACKING E ANALYTICS AVANÇADO
  // ===================================

  const scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false,
  }

  function trackScrollDepth(scrollTop) {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = Math.round((scrollTop / documentHeight) * 100)

    // Tracking de profundidade de scroll
    Object.keys(scrollDepthTracked).forEach((depth) => {
      if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
        scrollDepthTracked[depth] = true
        trackEvent("scroll_depth", `${depth}%`)
      }
    })
  }

  function trackEvent(eventName, eventLabel, eventValue = null) {
    // Google Analytics 4
    gtag("event", eventName, {
      event_category: "engagement",
      event_label: eventLabel,
      value: eventValue,
    })

    // Facebook Pixel
    fbq("trackCustom", eventName, {
      content_name: eventLabel,
      value: eventValue,
    })

    console.log(`📊 Evento rastreado: ${eventName} - ${eventLabel}`)
  }

  function trackConversion(conversionType) {
    // EDITE AQUI: Seus códigos de tracking

    // Google Analytics 4
    gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXX/XXXXXXX", // SUBSTITUA pelo seu ID
      value: PRODUCT_PRICE,
      currency: "BRL",
      transaction_id: Date.now().toString(),
    })

    gtag("event", conversionType, {
      event_category: "ecommerce",
      event_label: PRODUCT_ID,
      value: PRODUCT_PRICE,
    })

    // Facebook Pixel
    if (conversionType === "purchase_attempt") {
      fbq("track", "InitiateCheckout", {
        value: PRODUCT_PRICE,
        currency: "BRL",
        content_name: "Emagrecimento Realista em 90 Dias",
        content_category: "ebook",
      })
    }

    if (conversionType === "checkout_redirect") {
      fbq("track", "Purchase", {
        value: PRODUCT_PRICE,
        currency: "BRL",
        content_name: "Emagrecimento Realista em 90 Dias",
      })
    }

    // Google Ads
    gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXX/XXXXXXX", // SUBSTITUA
      value: PRODUCT_PRICE,
      currency: "BRL",
    })

    console.log(`💰 Conversão rastreada: ${conversionType}`)
  }

  // ===================================
  // ANIMAÇÕES DE ENTRADA
  // ===================================

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".about-card, .result-card, .testimonial-card, .problem-item, .objection-item",
    )

    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("fade-in", "visible")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Executar na carga

  // ===================================
  // OTIMIZAÇÕES DE CONVERSÃO
  // ===================================

  // Prevenir saída da página (exit intent)
  let exitIntentShown = false

  function showExitIntent(e) {
    if (exitIntentShown || e.clientY > 0) return

    exitIntentShown = true

    // Criar popup de saída persuasivo
    const popup = document.createElement("div")
    popup.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div style="background: white; padding: 40px; border-radius: 15px; max-width: 500px; text-align: center; position: relative;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                    <h3 style="color: #e74c3c; margin-bottom: 20px; font-size: 1.5rem;">⚠️ Espere!</h3>
                    <p style="margin-bottom: 20px; color: #333; font-size: 1.1rem;"><strong>Você está prestes a perder a chance de transformar sua vida por apenas R$ 29,90!</strong></p>
                    <p style="margin-bottom: 30px; color: #666;">Mais de 5.000 pessoas já emagreceram com este método. Não deixe para depois o que pode mudar sua vida hoje.</p>
                    <button onclick="document.getElementById('buy-button').click(); this.parentElement.parentElement.remove();" style="background: #27ae60; color: white; padding: 15px 30px; border: none; border-radius: 25px; cursor: pointer; margin-right: 10px; font-weight: 600;">Quero Emagrecer Agora!</button>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: #ccc; color: #333; padding: 15px 30px; border: none; border-radius: 25px; cursor: pointer;">Não, Obrigado</button>
                </div>
            </div>
        `

    document.body.appendChild(popup)
    trackEvent("exit_intent", "popup_shown")
  }

  // Detectar intenção de saída
  document.addEventListener("mouseleave", showExitIntent)

  // Tracking de tempo na página
  let timeOnPage = 0
  const timeTracker = setInterval(() => {
    timeOnPage += 10
    if (timeOnPage === 30) trackEvent("time_on_page", "30_seconds")
    if (timeOnPage === 60) trackEvent("time_on_page", "1_minute")
    if (timeOnPage === 120) trackEvent("time_on_page", "2_minutes")
    if (timeOnPage === 300) trackEvent("time_on_page", "5_minutes")
  }, 10000)

  // ===================================
  // MELHORIAS DE UX
  // ===================================

  // Feedback visual para cliques
  function addClickFeedback() {
    const buttons = document.querySelectorAll("button, .btn-primary, .btn-floating, .btn-header")

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        this.style.transform = "scale(0.95)"
        setTimeout(() => {
          this.style.transform = ""
        }, 150)
      })
    })
  }

  addClickFeedback()

  // Lazy loading para imagens
  const images = document.querySelectorAll("img")

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove("lazy")
          }
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }

  // ===================================
  // CONTADOR DE URGÊNCIA (OPCIONAL)
  // ===================================

  // DESCOMENTE se quiser adicionar urgência com contador
  /*
    function addUrgencyCounter() {
        const heroSection = document.querySelector('.hero-cta');
        const urgencyDiv = document.createElement('div');
        urgencyDiv.innerHTML = `
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 10px; margin-top: 20px; text-align: center;">
                <p style="margin: 0; color: #856404; font-weight: 600;">
                    ⏰ <strong>OFERTA ESPECIAL:</strong> Preço promocional acaba em: 
                    <span id="countdown" style="color: #e74c3c; font-weight: 700;"></span>
                </p>
            </div>
        `;
        heroSection.appendChild(urgencyDiv);
        
        // Contador de 24 horas
        const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = endTime - now;
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
            
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById('countdown').innerHTML = "OFERTA EXPIRADA";
            }
        }, 1000);
    }
    
    // Ativar contador (descomente para usar)
    // addUrgencyCounter();
    */

  // ===================================
  // CONSOLE LOG PARA DEBUG
  // ===================================

  console.log("🚀 Página de vendas carregada com sucesso!")
  console.log("💰 Produto:", PRODUCT_ID)
  console.log("💵 Preço: R$", PRODUCT_PRICE)
  console.log("🔗 Checkout URL:", CHECKOUT_URL)
  console.log("📊 Tracking ativo para conversões")
  console.log("✅ Sistema anti-saída ativo")
  console.log("⚡ Otimizações de UX ativas")

  // Tracking de carregamento da página
  trackEvent("page_loaded", "sales_page")
})

// ===================================
// FUNÇÕES UTILITÁRIAS GLOBAIS
// ===================================

// Função para mostrar notificações
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === "success" ? "#27ae60" : "#e74c3c"};
        color: white;
        border-radius: 5px;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 4000)
}

// Função para validar email (se adicionar newsletter)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Função para formatar preço brasileiro
function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}

// CSS para animações
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification {
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
`
document.head.appendChild(style)

// ===================================
// INTEGRAÇÃO COM FERRAMENTAS EXTERNAS
// ===================================

// Função para integrar com RD Station (se usar)
function trackRDStation(event, data = {}) {
  rdstation("track", event, data)
}

// Função para integrar com Hotjar (se usar)
function trackHotjar(event, data = {}) {
  hj("event", event)
}

// Função para integrar com Clarity (se usar)
function trackClarity(event, data = {}) {
  clarity("set", event, data)
}
