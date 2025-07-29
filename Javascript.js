// Obtenemos las referencias a los elementos del DOM
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');

// Añadimos un evento de clic al botón "Sí"
yesBtn.addEventListener('click', () => {
    // Ocultamos el contenedor de la pregunta
    questionContainer.style.display = 'none';
    // Mostramos el contenedor del resultado
    resultContainer.style.display = 'block';
    setTimeout(function() {
      location.reload();
    }, 6000); // 6000 milisegundos = 6 segundos
});

// Añadimos un evento para mover el botón "No"
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton); // También para clics en dispositivos táctiles

function moveButton() {
    // Obtenemos las dimensiones del contenedor principal
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculamos una posición aleatoria dentro del contenedor
    // Restamos el tamaño del botón para que no se salga
    const newTop = Math.random() * (containerRect.height - btnRect.height);
    const newLeft = Math.random() * (containerRect.width - btnRect.width);

    // Aplicamos la nueva posición al botón "No"
    noBtn.style.position = 'absolute'; // Necesario para que top y left funcionen
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}