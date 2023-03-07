function playSound (audioId) {
    document.querySelector(audioId).play();
}

const keysList = document.querySelectorAll('.tecla');

let count = 0;

while (count < keysList.length) {
    keysList[count].onclick = function () {
        playSound('#som_tecla_pom');
    };
    
    count++;
}