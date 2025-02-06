import { initWelcome } from "./pages/welcome";
import { initInicio } from "./pages/inicio";
import { initGame } from "./pages/game";
import { initResult } from "./pages/result";

const routes = [
  {
    path: /\/desafio-PPoT\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/desafio-PPoT\/inicio/,
    component: initInicio,
  },
  {
    path: /\/desafio-PPoT\/game/,
    component: initGame,
  },
  {
    path: /\/desafio-PPoT\/result/,
    component: initResult,
  },
];

export function initRouter(container: Element | null) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibio una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container?.firstChild) {
          container.firstChild.remove();
        }

        container?.appendChild(el);
      }
    }
  }
  if (location.pathname == "/desafio-PPoT/") {
    goTo("/desafio-PPoT/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
