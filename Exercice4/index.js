const btn = document.getElementById('myButton');
let message = document.querySelector('.message');

btn.addEventListener('click', () => {
    message.innerHTML = 'Bonjour, vous avez cliqué sur le bouton !';
})