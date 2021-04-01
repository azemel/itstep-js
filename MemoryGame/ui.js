const createUi = () => {
  const home = document.getElementById("home");
  const game = document.getElementById("game");
  const gameTimer = document.getElementById("game-timer");
  const buttonStart = document.getElementById("button-start");
  const buttonPause = document.getElementById("button-pause");

  buttonStart.addEventListener("click", () => {
    home.classList.add("home_hidden");

    createGame(game, gameTimer, (time) => {
      home.classList.remove("home_hidden");
      console.log("Game over", time);
    });

  });
}