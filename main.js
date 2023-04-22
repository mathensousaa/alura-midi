playSound = (audioSelector) => {
    const element = document.querySelector(audioSelector);

    element != null && element.localName === 'audio' ? element.play() : console.log('Elemento não encontrado');
}

const keysList = document.querySelectorAll('.tecla');

for (let count = 0; count < keysList.length; count++) {
    const key = keysList[count];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = () => playSound(idAudio);

    key.onkeydown = (event) => event.code === 'Enter' || event.code === 'Space' ? key.classList.add('ativa') : '';
    key.onkeyup = () => key.classList.remove('ativa');
}