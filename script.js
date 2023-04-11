var smiley = document.querySelector('.smiley');
smiley.addEventListener('click', function() {
    var message = document.createElement('p');
    message.textContent = 'Selamat menjalani pekan ulangan yang suram hehehe';
    document.body.appendChild(message);
});
