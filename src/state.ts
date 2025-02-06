export type Jugada = "piedra" | "papel" | "tijera";
export type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [{}],
    puntajes: {
      puntajeComputer: 0,
      puntajeMe: 0,
    },
  },
  getState() {
    return this.data;
  },
  setMove(myMove: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = myMove;
  },
  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history.push(play);
  },
  computerPlay(): Jugada {
    const currentState = this.getState();
    const opciones: Jugada[] = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * opciones.length);
    currentState.currentGame.computerPlay = opciones[randomIndex];
    return opciones[randomIndex];
  },
  setPuntaje(result) {
    if (result == "Ganaste") {
      this.data.puntajes.puntajeMe++;
    } else if (result == "Empate") {
      this.data.puntajes.puntajeMe++;
      this.data.puntajes.puntajeComputer++;
    } else {
      this.data.puntajes.puntajeComputer++;
    }
    return this.data.puntajes.puntajeComputer && this.data.puntajes.puntajeMe;
  },
  whoWins(myPlay: Jugada, computerPlay: Jugada): string {
    if (
      (myPlay == "tijera" && computerPlay == "papel") ||
      (myPlay == "piedra" && computerPlay == "tijera") ||
      (myPlay == "papel" && computerPlay == "piedra")
    ) {
      return "Ganaste";
    } else if (myPlay == computerPlay) {
      return "Empate";
    } else {
      return "Perdiste";
    }
  },
};

export { state };
