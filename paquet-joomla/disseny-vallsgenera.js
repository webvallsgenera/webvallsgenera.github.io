/* ==========================================================================
   Comportaments del sistema de disseny Vallsgenera — full portàtil
   Requereix les classes del full disseny-vallsgenera.css corresponent.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function(){

  // Menú desplegable: s'obre amb clic (no amb hover), es tanca en clicar
  // fora, en obrir-ne un altre, o amb la tecla Escape.
  var navItems = document.querySelectorAll('.nav-item');
  if (navItems.length) {
    function tancaTots(){
      navItems.forEach(function(i){
        i.classList.remove('obert');
        var btn = i.querySelector('.nav-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
    navItems.forEach(function(item){
      var btn = item.querySelector('.nav-toggle');
      if (!btn) return;
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var jaObert = item.classList.contains('obert');
        tancaTots();
        if (!jaObert) {
          item.classList.add('obert');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
    document.addEventListener('click', tancaTots);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') tancaTots();
    });
  }

  // Aparició suau dels blocs .reveal en entrar a la pantalla en fer scroll
  var revealEls = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function(el){ el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: .18, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function(el){ io.observe(el); });
    }
  }

  // Carrusel de vídeos amb lightbox: clic a una targeta obre el vídeo
  // corresponent en gran, sobre un fons fosc.
  var lightbox = document.getElementById('videoLightbox');
  if (lightbox) {
    var lbVideo = document.getElementById('videoLightboxVideo');
    var lbSource = lbVideo.querySelector('source');
    function obreLightbox(src, poster){
      lbSource.setAttribute('src', src);
      lbVideo.setAttribute('poster', poster || '');
      lbVideo.load();
      lightbox.classList.add('actiu');
      document.body.style.overflow = 'hidden';
      lbVideo.play().catch(function(){});
    }
    function tancaLightbox(){
      lightbox.classList.remove('actiu');
      document.body.style.overflow = '';
      lbVideo.pause();
      lbSource.setAttribute('src', '');
      lbVideo.load();
    }
    document.querySelectorAll('.tour-videos-graella button.destacat-targeta').forEach(function(btn){
      btn.addEventListener('click', function(){
        obreLightbox(btn.getAttribute('data-video-src'), btn.getAttribute('data-video-poster'));
      });
    });
    lightbox.addEventListener('click', function(e){
      if (e.target === lightbox) tancaLightbox();
    });
    var tancarBtn = document.getElementById('videoLightboxTancar');
    if (tancarBtn) tancarBtn.addEventListener('click', tancaLightbox);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && lightbox.classList.contains('actiu')) tancaLightbox();
    });
  }

});
