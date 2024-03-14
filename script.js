let slid = document.getElementById('slider')
let ger = document.getElementById('gerar')
let caracter = document.getElementById('valor')
let passw = document.getElementById('password')
let cont = document.getElementById('container')
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'!@#$%¨&*()_+-";
let newpass = ''
caracter.innerHTML = slid.value

slider.oninput = function() {
    caracter.innerHTML = this.value
}

function gerar() {
    let pass = ""
    for (let i = 0, n = charset.length; i < slid.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    cont.classList.remove('hidden')
    passw.innerHTML = pass
    newpass = pass
}

function copypass() {
    window.alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(newpass)
}
