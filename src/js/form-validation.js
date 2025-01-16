
const form = document.getElementById('form-contato');
const inputs = document.querySelectorAll('#form-contato input, #form-contato textarea');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário
  let todosPreenchidos = true;

  // Remove mensagens de erro antigas
  document.querySelectorAll('.error-message').forEach((msg) => msg.remove());

  inputs.forEach((input) => {
    const valor = input.value.trim();
    if (valor === '') {
      adicionarErro(input, 'Campo obrigatório');
      todosPreenchidos = false;
    } else {
      adicionarSucesso(input);
    }
  });

  if (todosPreenchidos) {
    exibirMensagemSucesso();
  }
});

function adicionarErro(input, mensagem) {
  input.classList.add('error');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = mensagem;
  errorMessage.classList.add('error-message');
  input.parentNode.appendChild(errorMessage);
}

function adicionarSucesso(input) {
  input.classList.remove('error');
  input.classList.add('success');
  const errorMessage = input.parentNode.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function exibirMensagemSucesso() {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Formulário enviado com sucesso!';
  successMessage.classList.add('success-message');
  form.appendChild(successMessage);
}
