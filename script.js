document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm')
    const message = document.getElementById('message')
    message.classList.add('message')

    form.addEventListener('submit', ev => {
        ev.preventDefault()

        const name = form.elements.name.value
        const email = form.elements.email.value
        const inputName = document.querySelector('#name')
        const inputEmail = document.querySelector('#email')
        
        inputName.classList.remove('input-error')
        inputEmail.classList.remove('input-error')


        if (name.trim() === '') {
            inputName.classList.add('input-error')
            message.classList.remove('message-success')
            message.classList.add('message-error')
            message.innerHTML = '<p>Preencha seu nome corretamente.</p>';
            return
        } 

        if (email.trim() === '') {
            inputEmail.classList.add('input-error')
            message.classList.remove('message-success')
            message.classList.add('message-error')
            message.innerHTML = '<p>Preencha seu email corretamente.</p>';
            return
        }

        inputName.classList.remove('input-error')
        inputEmail.classList.remove('input-error')
        message.classList.remove('message-error')
        message.classList.add('message-success')
        message.innerHTML = `<p style="text-align: center;">Formulário enviado com sucesso! <br>Nome: ${name}, Email: ${email}</p>`;
        form.reset()
    })
})
