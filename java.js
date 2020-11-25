document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        document.getElementById("audioForLetter_A").src = "clap.wav";
        document.getElementById('audioForLetter_A').play();
    };

    if(event.keyCode == 83) {
        document.getElementById("S").style.color = "3px solid #ffff00";
        document.getElementById("audioForLetter_S").src = "hihat.wav";
        document.getElementById('audioForLetter_S').play();
    };

    if(event.keyCode == 68) {
        document.getElementById("audioForLetter_D").src = "kick.wav";
        document.getElementById('audioForLetter_D').play();
    };

    if(event.keyCode == 70) {
        document.getElementById("audioForLetter_F").src = "openhat.wav";
        document.getElementById('audioForLetter_F').play();
    };

    if(event.keyCode == 71) {
        document.getElementById("audioForLetter_G").src = "boom.wav";
        document.getElementById('audioForLetter_G').play();
    };

    if(event.keyCode == 72) {
        document.getElementById("audioForLetter_H").src = "ride.wav";
        document.getElementById('audioForLetter_H').play();
    };

    if(event.keyCode == 74) {
        document.getElementById("audioForLetter_J").src = "snare.wav";
        document.getElementById('audioForLetter_J').play();
    };

    if(event.keyCode == 75) {
        document.getElementById("audioForLetter_K").src = "tom.wav";
        document.getElementById('audioForLetter_K').play();
    };

    if(event.keyCode == 76) {
        document.getElementById("audioForLetter_L").src = "tink.wav";
        document.getElementById('audioForLetter_L').play();
    };
});