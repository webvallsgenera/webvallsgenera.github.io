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

});
