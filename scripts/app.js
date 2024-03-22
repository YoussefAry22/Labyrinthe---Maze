let interval = 0;
let game = new Game(new Point(0, 0), new Point(29, 29), 120);

function startnewgame(game) {
  document.querySelector(".welcome").classList.add("cached");
  document.querySelector(".timer-board").classList.remove("cached");
  document.querySelector(".game-board").classList.remove("cached");
  set_timer(game);
  playSound.play();
}

function pause(game, pauseButton) {
  game.isPaused = !game.isPaused;
  game.isPaused ? playSound.pause() : playSound.play();
  pauseButton.innerText = game.isPaused ? "⏺" : "⏸";
  document.querySelector(".maze").classList.toggle("cached");
}

function restart() {
  game = new Game(new Point(0, 0), new Point(29, 29), 120);
  document.querySelector(".win-result").classList.add("cached");
  document.querySelector(".lose-result").classList.add("cached");
  document.querySelector(".timer-board").classList.remove("cached");
  document.querySelector(".game-board").classList.remove("cached");
  clearInterval(interval);
  game.Won = false;
  set_timer(game);
  reDrawMap(game);
  playSound.currentTime = 0;
  playSound.play();
}

function lose(game) {
  game.Lost = true;
  document.querySelector(".game-board").classList.add("cached");
  document.querySelector(".timer-board").classList.add("cached");
  document.querySelector(".lose-result").classList.remove("cached");
  playSound.pause();
  loseSound.play();
}

function set_timer(game) {
  interval = setInterval(() => {
    if (game.timer <= 0) {
      lose(game);
      clearInterval(interval);
    } else if (game.Won) {
      clearInterval(interval);
    } else if (!game.isPaused) {
      game.timer--;
      let minutes = Math.floor(game.timer / 60);
      let seconds = game.timer % 60;
      document.querySelector(".timer").innerText = `${
        minutes < 10 ? 0 : ""
      }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    }
  }, 1000);
}

function win(game) {
  playSound.pause();
  winSound.play();
  document.querySelector("#score").innerText = `Final Score: ${game.score}`;
  let minutes = Math.floor(game.timer / 60);
  let seconds = game.timer % 60;
  document.querySelector("#time").innerText = `Time: ${
    minutes < 10 ? 0 : ""
  }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  document.querySelector(".game-board").classList.add("cached");
  document.querySelector(".timer-board").classList.add("cached");
  document.querySelector(".win-result").classList.remove("cached");
}

drawMap(game.map);
drawPerson(game.person);
drawPrices(game.prices);
drawEnemies(game.enemies);
drawTraps(game.traps);

document.addEventListener("keydown", (ev) => {
  if (!game.Lost && !game.Won) {
    switch (ev.key) {
      case "ArrowUp":
        game.person.moveUp();
        break;
      case "ArrowRight":
        game.person.moveRight();
        break;
      case "ArrowDown":
        game.person.moveDown();
        break;
      case "ArrowLeft":
        game.person.moveLeft();
        break;
      default:
        break;
    }

    game.person.eat([...game.prices, ...game.enemies, ...game.traps]);
    if (game.person.i === game.goal.i && game.person.j === game.goal.j) {
      game.Won = true;
      win(game);
    }
    if (game.eatenEnemeies >= 5) {
      lose(game);
    } else {
      drawPerson(game.person);
      drawPrices(game.prices);
      drawEnemies(game.enemies);
      drawTraps(game.traps);
    }
  }
});
