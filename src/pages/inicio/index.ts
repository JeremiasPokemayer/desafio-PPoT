export function initInicio(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
      <div class="container-title">
        <h3 class="title-juego">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </h3>
      </div>
      <button class="button-jugar">¡Jugar!</button>
      <div class="container-ppt">
        <img src="https://i.ibb.co/HRz6GvW/piedra.png" alt="" class="img-piedra" />
        <img src="https://i.ibb.co/s9ZMbKNp/papel.png" alt="" class="img-papel" />
        <img src="https://i.ibb.co/KpsMSHnS/tijera.png" alt="" class="img-tijera" />
      </div>
      `;
  div.className = "main";

  const buttonJugar = div.querySelector(".button-jugar");
  buttonJugar?.addEventListener("click", () => {
    params.goTo("/desafio-PPoT/game");
  });
  return div;
}
