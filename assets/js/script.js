const CONFIG = {
  texts: [
    "Full Stack Web Developer",
    "UX/UI Evangelist",
    "Constructor de Interfaces Intuitivas",
  ],
  writeSpeed: 80,
  deleteSpeed: 40,
  pauseAfterWrite: 2000,
  pauseAfterDelete: 500,

  particles: {
    count: 80,
    maxSize: 4,
    minSize: 1,
    speed: 0.5,
    mouseRadius: 100,
    connectionDistance: 120,
  },
};

class ParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;
    this.isVisible = false;
    this.init();
  }

  init() {
    this.createCanvas();
    this.createParticles();
    this.setupEventListeners();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "particle-canvas";
    this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.6;
        `;

    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.resize();
  }

  createParticles() {
    this.particles = [];
    const { count, maxSize, minSize } = CONFIG.particles;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * CONFIG.particles.speed,
        speedY: (Math.random() - 0.5) * CONFIG.particles.speed,
        opacity: Math.random() * 0.5 + 0.2,
        originalOpacity: Math.random() * 0.5 + 0.2,
      });
    }
  }

  setupEventListeners() {
    document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => this.resize());

    document.addEventListener("visibilitychange", () => {
      this.isVisible = !document.hidden;
      if (this.isVisible) {
        this.animate();
      } else {
        cancelAnimationFrame(this.animationId);
      }
    });

    const observer = new MutationObserver(() => {
      this.updateTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  updateTheme() {
    const isDark =
      document.documentElement.getAttribute("data-bs-theme") === "dark";
    this.canvas.style.opacity = isDark ? "0.4" : "0.6";
  }

  animate() {
    if (!this.isVisible) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle, index) => {
      this.updateParticle(particle);
      this.drawParticle(particle);

      for (let j = index + 1; j < this.particles.length; j++) {
        this.connectParticles(particle, this.particles[j]);
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  updateParticle(particle) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > this.canvas.width) {
      particle.speedX *= -1;
    }
    if (particle.y < 0 || particle.y > this.canvas.height) {
      particle.speedY *= -1;
    }

    particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
    particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

    const dx = this.mouse.x - particle.x;
    const dy = this.mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < CONFIG.particles.mouseRadius) {
      const force =
        (CONFIG.particles.mouseRadius - distance) /
        CONFIG.particles.mouseRadius;
      const angle = Math.atan2(dy, dx);

      particle.x -= Math.cos(angle) * force * 2;
      particle.y -= Math.sin(angle) * force * 2;
      particle.opacity = Math.min(1, particle.originalOpacity + force * 0.5);
    } else {
      particle.opacity = particle.originalOpacity;
    }
  }

  drawParticle(particle) {
    const isDark =
      document.documentElement.getAttribute("data-bs-theme") === "dark";

    this.ctx.save();
    this.ctx.globalAlpha = particle.opacity;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

    if (isDark) {
      const gradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size
      );
      gradient.addColorStop(0, "#60a5fa");
      gradient.addColorStop(1, "#3b82f6");
      this.ctx.fillStyle = gradient;
    } else {
      const gradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size
      );
      gradient.addColorStop(0, "#3b82f6");
      gradient.addColorStop(1, "#1e40af");
      this.ctx.fillStyle = gradient;
    }

    this.ctx.fill();
    this.ctx.restore();
  }

  connectParticles(particle1, particle2) {
    const dx = particle1.x - particle2.x;
    const dy = particle1.y - particle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < CONFIG.particles.connectionDistance) {
      const opacity =
        (1 - distance / CONFIG.particles.connectionDistance) * 0.2;
      const isDark =
        document.documentElement.getAttribute("data-bs-theme") === "dark";

      this.ctx.save();
      this.ctx.globalAlpha = opacity;
      this.ctx.strokeStyle = isDark ? "#60a5fa" : "#3b82f6";
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(particle1.x, particle1.y);
      this.ctx.lineTo(particle2.x, particle2.y);
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas) {
      this.canvas.remove();
    }
  }
}

class ThemeController {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.currentTheme = localStorage.getItem("theme") || "dark";
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);

    if (this.themeToggle) {
      this.themeToggle.addEventListener("click", () => this.toggleTheme());
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.applyTheme(e.matches ? "dark" : "light");
        }
      });
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-bs-theme", theme);

    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector("i");
      if (icon) {
        icon.className = theme === "light" ? "bi bi-moon" : "bi bi-sun";
      }
    }

    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  }
}

class TypeWriter {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts;
    this.options = { ...CONFIG, ...options };
    this.currentIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.init();
  }

  init() {
    if (this.element) {
      this.type();
    }
  }

  type() {
    const currentText = this.texts[this.currentIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.element.innerHTML = `
            <span class="text-gradient">${currentText.substring(
              0,
              this.charIndex
            )}</span>
            <span class="cursor">|</span>
        `;

    let timeout = this.isDeleting
      ? this.options.deleteSpeed
      : this.options.writeSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      timeout = this.options.pauseAfterWrite;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      timeout = this.options.pauseAfterDelete;
    }

    setTimeout(() => this.type(), timeout);
  }
}

class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, options);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      this.observer.observe(el);
    });
  }
}

class NavbarController {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.lastScrollTop = 0;
    this.init();
  }

  init() {
    if (!this.navbar) return;

    window.addEventListener("scroll", () => this.handleScroll());
    this.setupSmoothScroll();
    this.setupActiveLink();
  }

  handleScroll() {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.navbar.classList.add("scrolled");
    } else {
      this.navbar.classList.remove("scrolled");
    }

    this.lastScrollTop = scrollTop;
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));

        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }

          this.updateActiveLink(anchor);
        }
      });
    });
  }

  setupActiveLink() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.pageYOffset + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos <= bottom) {
          const activeLink = document.querySelector(`a[href="#${id}"]`);
          if (activeLink) {
            this.updateActiveLink(activeLink);
          }
        }
      });
    });
  }

  updateActiveLink(activeAnchor) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    activeAnchor.classList.add("active");
  }
}

class PortfolioEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupParallax();
    this.setupCounters();
    this.setupFormValidation();
  }

  setupParallax() {
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (scrolled < window.innerHeight) {
          heroSection.style.transform = `translateY(${rate}px)`;
        }
      });
    }

    const parallaxElements = document.querySelectorAll(".parallax");

    if (parallaxElements.length > 0) {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((element) => {
          const speed = element.dataset.speed || 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
      });
    }
  }

  setupCounters() {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  setupFormValidation() {
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        this.showNotification("¡Mensaje enviado correctamente!", "success");
      });
    }
  }

  showNotification(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
    toast.style.zIndex = "9999";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}

class PortfolioApp {
  constructor() {
    this.particleSystem = null;
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () =>
        this.initComponents()
      );
    } else {
      this.initComponents();
    }
  }

  initComponents() {
    try {
      this.particleSystem = new ParticleSystem();

      new ThemeController();

      const textElement = document.getElementById("typing-text");
      if (textElement) {
        new TypeWriter(textElement, CONFIG.texts);
      }

      new ScrollAnimations();

      new NavbarController();

      new PortfolioEffects();
    } catch (error) {}
  }
}

new PortfolioApp();
