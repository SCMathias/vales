const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

// Crear el elemento de audio
const audio = new Audio('audio1.mp3'); // Asegúrate de que el archivo está en la misma carpeta o usa la ruta correcta
audio.loop = true; // Hace que la música se repita

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');

        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);

            // Reproducir música al abrir el sobre
            audio.play().catch(error => console.log("Autoplay bloqueado"));
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});
