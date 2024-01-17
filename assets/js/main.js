//calculadora

function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;


  if (!height || !weight) {
    alert('Por favor, insira altura e peso para calcular o IMC.');
    return;
  }

  const bmi = weight / (height * height);


  displayResult(bmi);
}

function displayResult(bmi) {

  const resultElement = document.getElementById('result');


  const roundedBMI = bmi.toFixed(2);

  let resultMessage = '';
  if (bmi < 18.5) {
    resultMessage = `Seu IMC é ${roundedBMI}, você está abaixo do peso.`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultMessage = `Seu IMC é ${roundedBMI}, seu peso está saudável.`;
  } else if (bmi >= 25 && bmi < 29.9) {
    resultMessage = `Seu IMC é ${roundedBMI}, você está com sobrepeso.`;
  } else {
    resultMessage = `Seu IMC é ${roundedBMI}, você está obeso.`;
  }


  resultElement.textContent = resultMessage;
}


//formulario

function validateForm(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (!name || !email) {
    alert('Por favor, preencha todos os campos.');
    event.preventDefault();
  } else {
    alert('Formulário enviado com sucesso!');
  }
}

//Carrosel avaliação 

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}

//Animação para os cards de serviço

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".explore__card");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("card-visible");
      } else {
        card.classList.remove("card-visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});



// Função para rolar  para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Ocultar o botão 
window.onscroll = function () {
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};