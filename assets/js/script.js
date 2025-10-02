// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  const loadingBar = document.querySelector(".loading-bar");
  if (loadingBar) {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    loadingBar.style.width = scrollPercent + "%";
  }
});

// Fade in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const fadeInOnScroll = function () {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// FAQ functionality (support versi umum & andalalin)
document.querySelectorAll(".faq-faq-question, .andalalin-faq-question, .parkir-faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    // cari icon kalau ada
    const icon = question.querySelector("i");
    if (icon) {
      if (faqItem.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.");
    this.reset();
  });
}

// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Tab functionality
document.querySelectorAll(".tab-btn, .index-tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Hapus active dari semua tombol tab (index + umum)
    document.querySelectorAll(".tab-btn, .index-tab-btn").forEach((tab) => {
      tab.classList.remove("active");
    });

    // Tambahkan active ke tombol yang diklik
    this.classList.add("active");

    const tabName = this.getAttribute("data-tab");
    console.log("Switching to tab:", tabName);

    // Cari konten tab (index + umum)
    const tabContent = document.querySelector(".tab-content, .index-tab-content");
    if (tabContent) {
      tabContent.style.opacity = "0";
      setTimeout(() => {
        tabContent.style.opacity = "1";
      }, 300);
    }
  });
});

// Search functionality
const searchBoxBtn = document.querySelector(".search-box .btn");
if (searchBoxBtn) {
  searchBoxBtn.addEventListener("click", function () {
    const input = document.querySelector(".search-box input");
    if (!input) return;
    const searchTerm = input.value;
    if (searchTerm.trim()) {
      this.innerHTML = '<i class="bi bi-search me-2"></i>Mencari...';
      setTimeout(() => {
        this.innerHTML = '<i class="bi bi-search me-2"></i>Cari';
        alert("Mencari: " + searchTerm);
      }, 1000);
    }
  });

  const searchInput = document.querySelector(".search-box input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchBoxBtn.click();
      }
    });
  }
}

// Hover effects
document.querySelectorAll(".service-card, .news-card, .program-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = this.style.transform + " scale(1.02)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = this.style.transform.replace(" scale(1.02)", "");
  });
});

// Parallax effect
// window.addEventListener("scroll", function () {
//   const parallax = document.querySelector(".hero-section, .index-hero-section, .profil-hero-section, .kontak-hero-section, .parkir-hero-section, .andalalin-hero-section, .faq-hero-section, .berita-hero-section");
//   if (parallax) {
//     const scrolled = window.pageYOffset;
//     const speed = scrolled * 0.5;
//     parallax.style.transform = `translateY(${speed}px)`;
//   }
// });

// Dynamic year update
const copyright = document.querySelector(".copyright p");
if (copyright) {
  const currentYear = new Date().getFullYear();
  copyright.innerHTML = `&copy; ${currentYear} SILALIN Kota Cirebon. Hak Cipta Dilindungi Undang-Undang.`;
}

// Loading simulation
window.addEventListener("load", function () {
  const loadingBar = document.querySelector(".loading-bar");
  if (loadingBar) {
    setTimeout(() => {
      loadingBar.style.width = "100%";
      setTimeout(() => {
        loadingBar.style.opacity = "0";
      }, 500);
    }, 100);
  }
});

// Bootstrap dropdown init
document.addEventListener("DOMContentLoaded", function () {
  const dropdownElementList = [].slice.call(document.querySelectorAll(".dropdown-toggle"));
  dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
  });
});
