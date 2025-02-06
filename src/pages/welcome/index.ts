export function initWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="container-title">
        <h3 class="title-ppt">Piedra</h3>
        <h3 class="title-ppt">Papel</h3>
        <h3 class="title-o">ó</h3>
        <h3 class="title-ppt">Tijera</h3>
    </div>
    <button class="button-empezar">Empezar</button>
    <div class="container-ppt">
      <img src="https://i.ibb.co/HRz6GvW/piedra.png" alt="" class="img-piedra" />
      <img src="https://i.ibb.co/s9ZMbKNp/papel.png" alt="" class="img-papel" />
      <img src="https://i.ibb.co/KpsMSHnS/tijera.png" alt="" class="img-tijera" />
    </div>
    `;
  div.className = "main";

  const buttonEmpezar = div.querySelector(".button-empezar");
  buttonEmpezar?.addEventListener("click", () => {
    params.goTo("/inicio");
  });
  return div;
}
