const form = document.getElementById('form-contato');
const inputs = document.querySelectorAll('#form-contato input, #form-contato textarea');
let enviado = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!enviado) {
    // Verifica se todos os campos estão preenchidos
    let todosPreenchidos = true;
    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        input.classList.add('error'); // Adiciona a classe error
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Campo obrigatório';
        errorMessage.classList.add('error-message'); // Adiciona a classe error-message
        input.parentNode.appendChild(errorMessage);
        todosPreenchidos = false;
      } else {
        input.classList.remove('error'); // Remove a classe error
        input.classList.add('success'); // Adiciona a classe success
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.remove();
        }
      }
    });

    // Se todos os campos estão preenchidos, mostra mensagem de sucesso
    if (todosPreenchidos) {
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Agradeço pela submissão do formulário de contato!';
      successMessage.classList.add('success-message'); // Adiciona a classe success-message
      form.appendChild(successMessage);
      enviado = true;
    }
  }
});