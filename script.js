/* ==========================
   FORMULÁRIO DE CADASTRO
=========================== */
const cadastroForm = document.querySelector('.form');

cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const telefone = document.querySelector('input[type="tel"]').value.trim();
    const animal = document.querySelector('select').value;
    const motivo = document.querySelector('textarea').value.trim();

    if(!nome || !email || !telefone || !animal || !motivo) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert(`Obrigado, ${nome}! Seu pedido de adoção do(a) ${animal} foi registrado com sucesso. Nossa equipe organizará todo o processo de adoção de forma segura e transparente.`);

    cadastroForm.reset();
});


/* ==========================
   BARRA DE PROGRESSO DE DOAÇÃO
=========================== */
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.querySelector('.progress-bar');
  const targetPercent = parseInt(progressBar.dataset.percent);

  let width = 0;
  const interval = setInterval(() => {
    if (width >= targetPercent) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + '%';
      progressBar.textContent = width + '%';
    }
  }, 20); // velocidade da animação
});
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.body.classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}

if (mobileNavToggleBtn) {
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
}
// Função para inicializar validação do formulário
function initFormValidation() {
  const form = document.getElementById('formCadastro');
  const alertDiv = document.getElementById('alert');

  if (!form) return; // evita erro se não houver o formulário na página

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !email) {
      alertDiv.textContent = 'Preencha todos os campos!';
      alertDiv.className = 'alert erro';
      return;
    }

    if (!email.includes('@')) {
      alertDiv.textContent = 'Email inválido!';
      alertDiv.className = 'alert erro';
      return;
    }

    alertDiv.textContent = 'Cadastro enviado com sucesso!';
    alertDiv.className = 'alert sucesso';

    localStorage.setItem('cadastro', JSON.stringify({ nome, email }));
    form.reset();
  });
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', initFormValidation);
