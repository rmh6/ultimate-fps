function openGame(url) {
    const frame = document.getElementById("game-frame");
    const title = document.getElementById("game-title");

    frame.src = url;
    title.textContent = "Jeu en cours : " + url;
}
