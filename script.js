document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");

    // Play audio only after user interaction
    function playMusic() {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
        document.removeEventListener("click", playMusic);
    }

    document.addEventListener("click", playMusic);
});

//audio.volume = 0.5; // 50% volume
