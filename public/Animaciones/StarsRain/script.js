// Variables globales
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravedad = 0.2; // Gravedad para el movimiento vertical
const cocienteRebote = 0.5; // Factor de rebote
let estrellas = [];
const maxEstrellas = 25; // Número máximo de estrellas
let tiempoParaNuevaEstrella = 0;

// Clase Estrella
function Estrella(x, y, radio, velX, velY, direccionX) {
  this.x = x;
  this.y = y;
  this.radio = radio;
  this.velX = velX * direccionX; // Velocidad en el eje X con dirección
  this.velY = velY; // Velocidad vertical (caída)
  this.life = 0; // Contador de vida (para reducir el tamaño al rebotar)
}

Estrella.prototype.actualizar = function () {
  // Mover la estrella en el eje horizontal y vertical
  this.x += this.velX;
  this.y += this.velY;

  // Aplicar la gravedad en el eje vertical
  this.velY += gravedad;

  // Rebote en el suelo
  if (this.y + this.radio > canvas.height) {
    this.velY = -this.velY * cocienteRebote; // Rebote vertical
    this.velX = this.velX * (cocienteRebote + 0.3); // Reducir velocidad horizontal
    this.radio *= cocienteRebote; // Reducir el tamaño de la estrella en cada rebote
    this.life++;

    if (this.radio < 1) {
      // Si el radio es muy pequeño, reiniciar la estrella
      this.x = Math.random() * canvas.width;
      this.y = -this.radio; // Aparece en la parte superior
      this.radio = Math.random() * 6 + 4; // Restaurar tamaño
      this.velY = Math.random() * 2 + 1; // Restaurar velocidad vertical
      this.life = 0; // Reiniciar la vida
    }
  }

  // Reiniciar la posición de la estrella cuando salga del canvas horizontalmente
  if (this.x - this.radio > canvas.width || this.x + this.radio < 0) {
    this.x = this.x > canvas.width ? -this.radio : canvas.width + this.radio;
  }
};

Estrella.prototype.dibujar = function () {
  c.beginPath();
  c.fillStyle = "white";
  c.shadowBlur = 10;
  c.shadowColor = "blue";
  c.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false);
  c.fill();
}

// Función para añadir una nueva estrella
function agregarEstrella() {
  const radio = Math.random() * 3 + 2;
  const x = Math.random() * canvas.width;
  const y = -radio; // Comienza fuera del canvas en la parte superior
  const velX = Math.random() * 1.5 + 0.5; // Velocidad horizontal
  const velY = Math.random() * 2 + 1; // Velocidad vertical (caída)
  const direccionX = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria (derecha o izquierda)
  estrellas.push(new Estrella(x, y, radio, velX, velY, direccionX));
}

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada frame

  // Añadir nuevas estrellas gradualmente
  if (estrellas.length < maxEstrellas && tiempoParaNuevaEstrella <= 0) {
    agregarEstrella();
    tiempoParaNuevaEstrella = 3; // Ajusta este valor para cambiar la frecuencia de nuevas estrellas
  } else {
    tiempoParaNuevaEstrella--;
  }

  estrellas.forEach(estrella => {
    estrella.dibujar();
    estrella.actualizar();
  });
}

// Ajustar el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicializar y animar
animate();
