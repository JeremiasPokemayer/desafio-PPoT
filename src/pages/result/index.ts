import { Jugada, state } from "../../state";

export function initResult(params) {
  const div = document.createElement("div");
  let variantEl = "";
  const miJugada = state.data.currentGame.myPlay as Jugada;
  const computerJugada = state.data.currentGame.computerPlay as Jugada;
  const resultado = state.whoWins(miJugada, computerJugada);
  if (resultado == "Ganaste") {
    variantEl = "gane";
  } else if (resultado == "Empate") {
    variantEl = "empate";
  } else {
    variantEl = "perdi";
  }
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="main-resultado-${resultado}"> 
      <custom-resultado variant="${variantEl}"></custom-resultado>
      <div class="main-score">
        <h3 class="h3">Score</h3>
        <div class="main-points"> 
          <h4 class="h4">Vos:${state.data.puntajes.puntajeMe}</h4>
          <h4 class="h4">Máquina:${state.data.puntajes.puntajeComputer}</h4>
        </div>
      </div>
      <button class="button-volver">Volver a Jugar</button>
    </div>
  `;

  style.innerHTML = `
    .main-resultado-Ganaste{
      background-color:rgba(136, 137, 73, 0.9);
      font-family: "Odibee Sans";
      display:flex;
      flex-direction:column;
      height:100vh;
      width:100%;
      justify-content: space-around;
      align-items: center;
    }

    .main-resultado-Perdiste, .main-resultado-Empate{
      background-color:rgba(137, 73, 73, 0.9);
      font-family: "Odibee Sans";
      display:flex;
      flex-direction:column;
      height:100vh;
      width:100%;
      justify-content: space-around;
      align-items: center;
    }

    .main-score{
      display:block;
      background-color:white;
      border:10px solid black;
      border-radius:10px;
      height:217px;
      width:259px;
      font-size: 55px;
      font-weight: 400;
    }

    .main-points{
      display:flex;
      flex-direction:column;
      align-items: flex-end;
      font-size: 45px;
    }

    .h3{
      text-align:center;
    }

    .h4, .h3{
      margin:0;
    }
  `;

  const buttonVolver = div.querySelector(".button-volver");
  buttonVolver?.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  div.appendChild(style);

  return div;
}
