const form = document.getElementById('form')
const user = document.getElementById('user')
const mail = document.getElementById('mail')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass').height
// const confirmPass = $('#confirmPass').height()

/* Setando que o meu 'form' ficará 'escutando' a ação de 'subimt' que neste caso é meu botão que envia o formulário. */
form.addEventListener('submit', (e) => {
    e.preventDefault(); /* Setando 'preventDefault()' para que minha página não regarregue ao enviar o formulário. */

    checkInputs();
})

function checkInputs() {
    const userValue = user.value
    const mailValue = mail.value
    const passwordValue = password.value
    const confirmPassValue = confirmPass.value

    // Validação de Usuário.
    if (userValue === '') {
        setError(user, `O nome de usuário é obrigatório.`)
    } else {
        setSuccess(user)
    }

    // Validação de E-mail.
    if (mailValue === '') {
        setError(mail, `O E-mail é obrigatório.`)
    } else if (!checkEmail(mailValue)){
        setError(mail, `Por favor, insira um e-mail válido.`)
    } else {
        setSuccess(mail)
    }

    // Validação de Senha.
    if (passwordValue === '') {
        setError(password, `Insira uma senha válida.`)
    } else if (passwordValue.length < 7){
        setError(password, `A senha precisa ter no mínimo 7 caracteres.`)
    } else {
        setSuccess(password)
    }

    // Validação da Confirmação de Senha.
    if (confirmPassValue === '') {
        setError(confirmPass, 'As senhas não coecidem.')
    } else if (confirmPassValue != passwordValue) {
        setError(confirmPass, `As senhas não coecidem.`)
    } else {
        setSuccess(confirmPass)
    }  
}

function setSuccess (input) {
    const formControlSuccess = input.parentElement;     /* Acesssando o elemento 'pai' do 'input' e guardando em uma váriavel.*/

    formControlSuccess.className = 'form-control success'   /* Trocando o nome da classe setada no html. */
}

function setError (input, msg) {
    const formControlError = input.parentElement;   /* Acessando o 'pai' do elemento 'input' e guardando em uma váriavel. */
    const small = formControlError.querySelector('small') /* Acessando a tag 'small' que se encontra dentro de 'formControlError' e guardando em uma váriavel. */

    /* Adicionando a mensagem de erro */
    small.innerText = msg

    /* Adicionando a 'class: success' */
    formControlError.className = 'form-control error'
}

function checkEmail(mailValue) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(mailValue)){
        return true; }
    else{
        return false;
    }
}