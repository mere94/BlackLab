(() => {
  // Gestione Menu Mobile
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navlinks');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? 'Chiudi −' : 'Menu +';
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu +';
    }));

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = 'Menu +';
      }
    });
  }

  // Aggiornamento anno Footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Animazioni allo scroll
  const revealItems = document.querySelectorAll('[data-reveal]');
  
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Gestione Cookie Banner (GDPR)
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  
  if (cookieBanner && acceptBtn) {
    if (!localStorage.getItem('cookies_accepted')) {
      cookieBanner.style.display = 'block';
    }
    
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookies_accepted', 'true');
      cookieBanner.style.display = 'none';
    });
  }

  // Gestione Modali (Privacy e Cookie)
  window.openPrivacyModal = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('privacy-modal');
    if (modal) modal.classList.add('open');
  };

  window.openCookieModal = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('cookie-modal');
    if (modal) modal.classList.add('open');
  };

  // Chiusura Modali
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('open');
    });
  });

  // Chiusura modali cliccando fuori dal contenuto
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('open');
    }
  });
})();
