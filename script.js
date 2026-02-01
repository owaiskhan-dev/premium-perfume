// script.js
document.addEventListener('DOMContentLoaded', () => {
  const perfumes = [
    {
      id: 1,
      name: "Ambre Impérial",
      description: "A regal fusion of aged amber, royal oud, and saffron. Reserved for sovereign moments.",
      price: "PKR 28,500",
      image: "https://static.webx.pk/files/8079/Images/n11076003a-5-8079-673130-260721043047.jpg",
      notes: {
        top: "Saffron, Pink Pepper",
        middle: "Ambergris, Oud",
        base: "Aged Amber, Sandalwood"
      },
      longevity: "14+ hours",
      projection: "Strong",
      idealFor: "Evening | Winter"
    },
    {
      id: 2,
      name: "Rosée de Minuit",
      description: "A midnight garden of rare Damask rose, dew-kissed at dawn under a full moon.",
      price: "PKR 26,000",
      image: "https://maisondamour.in/wp-content/uploads/2025/06/IMG_4783.png",
      notes: {
        top: "Bergamot, Aldehydes",
        middle: "Damask Rose, Orris",
        base: "Musk, Vanilla"
      },
      longevity: "12 hours",
      projection: "Moderate",
      idealFor: "Evening | Spring"
    },
    {
      id: 3,
      name: "Jasmin de Palais",
      description: "Imperial jasmine hand-picked from the Sultan's private gardens in Marrakech.",
      price: "PKR 27,200",
      image: "https://palaisdujasmin.com/web/image/897-6c793cd2/IMG-20250909-WA0024.webp",
      notes: {
        top: "Neroli, Lemon",
        middle: "Jasmine Sambac, Tuberose",
        base: "Amber, Cedar"
      },
      longevity: "10 hours",
      projection: "Moderate",
      idealFor: "Day | Summer"
    },
    {
      id: 4,
      name: "Santal Royal",
      description: "Australian sandalwood aged for 20 years, blended with Mysore oud.",
      price: "PKR 29,800",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM72OncoEAR37qrWsFC79gul_Y5MGpt_Wrig&s",
      notes: {
        top: "Cardamom, Black Pepper",
        middle: "Sandalwood, Patchouli",
        base: "Oud, Leather"
      },
      longevity: "16+ hours",
      projection: "Strong",
      idealFor: "Night | Autumn"
    },
    {
      id: 5,
      name: "Violette Céleste",
      description: "A celestial bouquet of Parma violet and Florentine iris, kissed by morning mist.",
      price: "PKR 24,900",
      image: "https://fimgs.net/mdimg/perfume/o.33452.jpg",
      notes: {
        top: "Violet Leaf, Mandarin",
        middle: "Violet, Iris",
        base: "Musk, Tonka"
      },
      longevity: "8 hours",
      projection: "Soft",
      idealFor: "Day | Spring"
    },
    {
      id: 6,
      name: "Oud d'Or",
      description: "Liquid gold: 100-year-old agarwood distilled under royal decree.",
      price: "PKR 32,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ526Cw5oqutl-tf6VbVxUjFarq06G5tyjciw&s",
      notes: {
        top: "Saffron, Rose",
        middle: "Oud, Amber",
        base: "Leather, Musk"
      },
      longevity: "18+ hours",
      projection: "Intense",
      idealFor: "Night | Winter"
    },
    {
      id: 7,
      name: "Citron Impérial",
      description: "Sun-drenched Sicilian citron and Calabrian bergamot from royal citrus groves.",
      price: "PKR 23,500",
      image: "https://alexandriafragrances.com/cdn/shop/files/CitronDelMar.jpg?v=1688241937&width=1946",
      notes: {
        top: "Citron, Bergamot",
        middle: "Jasmine, Neroli",
        base: "Musk, Amber"
      },
      longevity: "6 hours",
      projection: "Light",
      idealFor: "Day | Summer"
    },
    {
      id: 8,
      name: "Vanille Sacrée",
      description: "Madagascar vanilla pods aged in rum barrels, wrapped in sacred resins.",
      price: "PKR 25,800",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6hpVxZ9RlM1OS8MwfBnr6_F2v8wZr5me6g&s",
      notes: {
        top: "Cocoa, Rum",
        middle: "Vanilla, Cinnamon",
        base: "Tonka, Sandalwood"
      },
      longevity: "10 hours",
      projection: "Moderate",
      idealFor: "Evening | Autumn"
    }
  ];

  const homePage = document.getElementById('home-page');
  const detailPage = document.getElementById('detail-page');
  const perfumesGrid = document.getElementById('perfumes-grid');
  const detailHero = document.getElementById('detail-hero');
  const detailContent = document.getElementById('detail-content');
  const backBtn = document.getElementById('back-btn');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const backToTopBtn = document.getElementById('back-to-top');

  function renderPerfumes() {
    perfumesGrid.innerHTML = '';
    perfumes.forEach(perfume => {
      const card = document.createElement('div');
      card.className = 'perfume-card';
      card.innerHTML = `
        <img src="${perfume.image}" alt="${perfume.name} luxury perfume bottle" class="perfume-img" loading="lazy">
        <h3 class="perfume-name">${perfume.name}</h3>
        <p class="perfume-desc">${perfume.description}</p>
        <p class="perfume-price">${perfume.price}</p>
        <p class="perfume-notes">
          <strong>Top:</strong> ${perfume.notes.top}<br>
          <strong>Middle:</strong> ${perfume.notes.middle}<br>
          <strong>Base:</strong> ${perfume.notes.base}
        </p>
        <button class="btn view-details" data-id="${perfume.id}">View Details</button>
      `;
      perfumesGrid.appendChild(card);
    });

    document.querySelectorAll('.view-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        showPerfumeDetail(id);
      });
    });
  }

  function showPerfumeDetail(id) {
    const perfume = perfumes.find(p => p.id === id);
    if (!perfume) return;

    detailHero.style.backgroundImage = `url(${perfume.image})`;
    
    detailContent.innerHTML = `
      <h2 class="detail-title">${perfume.name}</h2>
      <p class="detail-desc">${perfume.description}</p>
      <p class="detail-price">${perfume.price}</p>
      
      <div class="detail-notes">
        <h3>Fragrance Notes</h3>
        <p><strong>Top:</strong> ${perfume.notes.top}</p>
        <p><strong>Middle:</strong> ${perfume.notes.middle}</p>
        <p><strong>Base:</strong> ${perfume.notes.base}</p>
      </div>
      
      <div class="detail-attributes">
        <h3>Characteristics</h3>
        <p><strong>Longevity:</strong> ${perfume.longevity}</p>
        <p><strong>Projection:</strong> ${perfume.projection}</p>
        <p><strong>Ideal For:</strong> ${perfume.idealFor}</p>
      </div>
    `;

    homePage.classList.remove('active');
    detailPage.classList.add('active');
    window.scrollTo(0, 0);
  }

  backBtn.addEventListener('click', () => {
    detailPage.classList.remove('active');
    homePage.classList.add('active');
    setTimeout(() => {
      const collection = document.getElementById('collection');
      if (collection) {
        window.scrollTo({ top: collection.offsetTop - 80, behavior: 'smooth' });
      }
    }, 300);
  });

  function setActiveLink() {
    const sections = ['home', 'about', 'collection', 'testimonials'];
    const scrollPos = window.scrollY + 100;

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (section) {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      }
    });
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    setActiveLink();
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  renderPerfumes();
  setActiveLink();
});