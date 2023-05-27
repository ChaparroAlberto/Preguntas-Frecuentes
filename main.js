const bloques = document.querySelectorAll('.bloque');
const botones = document.querySelectorAll('.bloque-button');

botones.forEach((boton, i) => {
  boton.addEventListener('click', () => {
    bloques.forEach((bloque, j) => {
      if (i === j) {
        bloque.classList.toggle('activo');
      } else {
        bloque.classList.remove('activo');
      }
    });
  });
});
