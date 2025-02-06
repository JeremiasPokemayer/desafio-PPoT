import { initRouter } from "./router";
import { initPiedra } from "./components/piedra";
import { initTijera } from "./components/tijera";
import { initPapel } from "./components/papel";
import { initResultado } from "./components/resultado";

(function () {
  const root = document.querySelector(".root");
  initRouter(root);
  initPiedra();
  initTijera();
  initPapel();
  initResultado();
})();
