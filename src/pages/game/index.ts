import { state } from "../../state";
import { Jugada } from "../../state";
import { Game } from "../../state";

export function initGame(params) {
  const div = document.createElement("div");
  const divHide = document.createElement("div");
  const style = document.createElement("style");

  let contador = 3;
  const intervalId = setInterval(() => {
    contador--;
    const titleCounter = document.getElementById("titleCounter") as any;
    titleCounter.innerText = contador.toString();
    if (contador == 0) {
      clearInterval(intervalId);
      div.style.display = "none";
      divHide.style.display = "block";
      const computerMove = state.data.currentGame.computerPlay as Jugada;
      const miMove = state.data.currentGame.myPlay as Jugada;
      const resultado = state.whoWins(miMove, computerMove);
      state.setPuntaje(resultado);
      let computerElement;
      if (computerMove === "piedra") {
        computerElement = document.createElement("custom-piedra");
      } else if (computerMove === "papel") {
        computerElement = document.createElement("custom-papel");
      } else if (computerMove === "tijera") {
        computerElement = document.createElement("custom-tijera");
      }

      computerElement.style.transform = "rotate(180deg)";
      divHide.style.justifyContent = "space-between";
      divHide.style.height = "100vh";
      divHide.style.alignItems = "center";
      divHide.style.flexDirection = "column-reverse";
      divHide.style.display = "flex";

      divHide.appendChild(computerElement);

      setTimeout(() => {
        divHide.style.display = "none";
        params.goTo("/desafio-PPoT/result");
      }, 3000);
    }
  }, 1000);

  div.innerHTML = `
        <div class="container-title-counter">
          <h1 class="title-counter" id="titleCounter">
            ${contador}
          </h1>
        </div>
        <div class="container-ppt-game">
            <div class="opcion" id="piedra">
                <custom-piedra variant="seleccion-piedra"></custom-piedra>
            </div>
             <div class="opcion" id="papel"> 
                <custom-papel variant="seleccion-papel"></custom-papel>
            </div>
            <div class="opcion" id="tijera">
                <custom-tijera variant="seleccion-tijera"></custom-tijera>
             </div>
        </div>
        `;
  div.className = "main-game";

  divHide.innerHTML = `
            
  `;

  style.innerHTML = `
    .container-title-counter {
    overflow:hidden;
    position:absolute;
    margin: 125px 66px 0px;
    padding: 50px;
    border: 23px solid black;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    }

    .title-counter {
    margin: 0;
    font-size: 100px;
    font-weight: 700;
    text-align: center;
    }

    .main-game {
    font-family: "Odibee Sans";
    position: relative;
    }

    .container-ppt-game {
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    position: absolute;
    display: flex;
    align-items: flex-end;
    }
    
  `;
  document.body.appendChild(div);

  const tijeraEl = document.getElementById("tijera") as HTMLElement;
  const papelEl = document.getElementById("papel") as HTMLElement;
  const piedraEl = document.getElementById("piedra") as HTMLElement;

  tijeraEl.addEventListener("click", () => {
    tijeraEl.style.transform = "translate(0px, -70px)";
    tijeraEl.style.opacity = "1";
    papelEl.style.transform = "translate(0px, 40px)";
    papelEl.style.opacity = "0.5";
    piedraEl.style.transform = "translate(0px, 40px)";
    piedraEl.style.opacity = "0.5";
    const myEl = document.createElement("custom-tijera");
    state.setMove("tijera");
    state.computerPlay();
    divHide.appendChild(myEl);
  });
  piedraEl.addEventListener("click", () => {
    tijeraEl.style.transform = "translate(0px, 40px)";
    tijeraEl.style.opacity = "0.5";
    papelEl.style.transform = "translate(0px, 40px)";
    papelEl.style.opacity = "0.5";
    piedraEl.style.transform = "translate(0px, -70px)";
    piedraEl.style.opacity = "1";
    const myEl = document.createElement("custom-piedra");
    state.setMove("piedra");
    state.computerPlay();
    divHide.appendChild(myEl);
  });
  papelEl.addEventListener("click", () => {
    tijeraEl.style.transform = "translate(0px, 40px)";
    tijeraEl.style.opacity = "0.5";
    papelEl.style.transform = "translate(0px, -70px)";
    papelEl.style.opacity = "1";
    piedraEl.style.transform = "translate(0px, 40px)";
    piedraEl.style.opacity = "0.5";
    const myEl = document.createElement("custom-papel");
    state.setMove("papel");
    state.computerPlay();
    divHide.appendChild(myEl);
  });

  document.body.appendChild(divHide);
  divHide.style.display = "none";
  div.appendChild(style);

  return div;
}
