function drawMap(map) {
  for (let i = 0; i < 30; i++) {
    let gameRow = document.createElement("div");
    gameRow.classList.add("game-row");

    for (let j = 0; j < 30; j++) {
      let div = document.createElement("div");

      div.id = i + "" + j;
      div.classList.add("game-box");
      if (map[i][j].topborder) div.classList.add("top-border");
      if (map[i][j].rightborder) div.classList.add("right-border");
      if (map[i][j].bottomborder) div.classList.add("bottom-border");
      if (map[i][j].leftborder) div.classList.add("left-border");
      gameRow.appendChild(div);
    }
    document.querySelector(".maze").appendChild(gameRow);
  }
}

function drawPerson(person) {
  document.querySelector(".person")?.remove();
  let personDiv = document.createElement("img");
  personDiv.classList.add("person");
  personDiv.setAttribute("src", "images/snaill.png");
  document.getElementById(`${person.i}${person.j}`).appendChild(personDiv);
}

function drawPrices(prices) {
  for (let img of document.querySelectorAll(".price")) {
    img.remove();
  }
  for (let price of prices) {
    if (price.isEaten == false) {
      let priceDiv = document.createElement("img");
      priceDiv.classList.add("price");
      priceDiv.setAttribute("src", "images/goldd.png");
      document.getElementById(`${price.i}${price.j}`).appendChild(priceDiv);
    }
  }
}

function drawEnemies(enemies) {
  for (let img of document.querySelectorAll(".enemy")) {
    img.remove();
  }
  for (let enemy of enemies) {
    if (enemy.isEaten == false) {
      let enemyDiv = document.createElement("img");
      enemyDiv.classList.add("enemy");
      enemyDiv.setAttribute("src", "images/trapp.png");
      document.getElementById(`${enemy.i}${enemy.j}`).appendChild(enemyDiv);
    }
  }
}

function drawTraps(traps) {
  for (let img of document.querySelectorAll(".trap")) {
    img.remove();
  }
  for (let trap of traps) {
    if (trap.isEaten == false) {
      let trapDiv = document.createElement("img");
      trapDiv.classList.add("trap");
      trapDiv.setAttribute("src", "images/clockk.png");
      document.getElementById(`${trap.i}${trap.j}`).appendChild(trapDiv);
    }
  }
}

function reDrawMap(game) {
  document.querySelector(".map").remove();
  let map = document.createElement("div");
  map.classList.add("maze");
  document.querySelector(".game-board").appendChild(map);
  drawMap(game.map);
  drawPerson(game.person);
  drawPrices(game.prices);
  drawEnemies(game.enemies);
}
