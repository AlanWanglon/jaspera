const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

// Adicionar um evento de clique para os itens da navegação
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Fecha o menu (caso ele esteja aberto)
        menu.classList.remove('ativo');
        NavMenu.classList.remove('ativo');

        // Impedir o comportamento padrão do link (navegação)
        e.preventDefault();

        // Obter o destino do link (âncora)
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rolar suavemente para o destino
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//send function
function enviar() {
  // Continuar com o envio do formulário
  document.querySelector(".box-form").submit();
}

document.getElementById("contatoForm").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que o formulário seja enviado imediatamente
  enviar(); // Chamar a função enviar()
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});