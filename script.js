// Инициализация переменных
let currentImageIndex = 0;
const images = document.querySelectorAll(".slider-image");
const totalImages = images.length;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const imageCounter = document.getElementById("imageCounter");

// Функция для обновления видимого изображения
function updateSlider() {
  // Скрыть все изображения
  images.forEach((img, index) => {
    img.classList.remove("active");
    if (index === currentImageIndex) {
      img.classList.add("active");
    }
  });
  // Обновить счетчик изображений
  imageCounter.textContent = `Изображение ${
    currentImageIndex + 1
  } из ${totalImages}`;
}

// Обработчики событий для кнопок
prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  updateSlider();
});

// Начальная инициализация
updateSlider();
