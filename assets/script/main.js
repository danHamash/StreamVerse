
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Abrir/fechar menu ao clicar no hamburger
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique suba para o document e feche o menu imediatamente
    navLinks.classList.toggle('active');
  });

  // Fechar menu se clicar fora dele
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
      // Verifica se o clique NÃO foi no menu nem no botão hamburger
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    }
  });
});
