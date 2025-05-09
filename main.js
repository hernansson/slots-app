document.addEventListener('DOMContentLoaded', function () {
  let index = 0; // Índice para llevar la cuenta de la imagen actual
  const slides = document.querySelectorAll('.carousel-container img'); // Seleccionamos todas las imágenes
  const totalSlides = slides.length; // Número total de imágenes en el carrusel

  // Función para mostrar la imagen actual y ocultar las demás
  function changeSlide() {
    // Ocultar todas las imágenes
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    // Mostrar la imagen actual
    slides[index].style.display = 'block';

    // Incrementar el índice para la siguiente imagen
    index = (index + 1) % totalSlides; // Ciclo de 0 a totalSlides - 1
  }

  // Cambiar imagen cada 4 segundos (4000ms)
  setInterval(changeSlide, 4000);

  // Iniciar mostrando la primera imagen
  changeSlide();
});

const carouselContainer = document.querySelector('.carousel-container');

carouselConfig.images.forEach((imgData, index) => {
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.alt || `Imagen ${index + 1}`;
  img.style.display = index === carouselConfig.images.length - 1 ? 'block' : 'none';
  carouselContainer.appendChild(img);
});

function populateIconRow(containerSelector, icons) {
  const section = document.querySelector(containerSelector);
  icons.forEach(icon => {
    const div = document.createElement('div');
    div.className = 'icon-item';

    const img = document.createElement('img');
    img.src = icon.src;
    img.alt = icon.alt;

    const span = document.createElement('span');
    span.textContent = icon.label;

    div.appendChild(img);
    div.appendChild(span);
    section.appendChild(div);
  });
}

populateIconRow('.first-icon-row', iconRowConfig.icons);
populateIconRow('.second-icon-row', secondIconRowConfig.icons);

const imageGridSection = document.querySelector('.image-grid');

gamesGridConfig.images.forEach(image => {
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  imageGridSection.appendChild(img);
});

const bigImagesSection = document.querySelector('.big-images');

bigImagesConfig.images.forEach(image => {
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  bigImagesSection.appendChild(img);
});

const titles = document.querySelectorAll('.modal-title');
titles[0].textContent = modalConfig.headings.h2; // h2
titles[1].textContent = modalConfig.headings.h3; // h3
titles[2].textContent = modalConfig.headings.h4; // h4
const whatsappLink = document.getElementById('whatsappLink');
whatsappLink.href = `https://wa.me/${modalConfig.whatsapp.number}?text=${encodeURIComponent(modalConfig.whatsapp.message)}`;
