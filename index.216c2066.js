const e={data:{currentGame:{computerPlay:"",myPlay:""},history:[{}],puntajes:{puntajeComputer:0,puntajeMe:0}},getState(){return this.data},setMove(e){this.getState().currentGame.myPlay=e},pushToHistory(e){this.getState().history.push(e)},computerPlay(){let e=this.getState(),t=["piedra","papel","tijera"],a=Math.floor(Math.random()*t.length);return e.currentGame.computerPlay=t[a],t[a]},setPuntaje(e){return"Ganaste"==e?this.data.puntajes.puntajeMe++:("Empate"==e&&this.data.puntajes.puntajeMe++,this.data.puntajes.puntajeComputer++),this.data.puntajes.puntajeComputer&&this.data.puntajes.puntajeMe},whoWins:(e,t)=>"tijera"==e&&"papel"==t||"piedra"==e&&"tijera"==t||"papel"==e&&"piedra"==t?"Ganaste":e==t?"Empate":"Perdiste"},t=[{path:/\/desafio-PPoT\/welcome/,component:function(e){let t=document.createElement("div");document.createElement("style"),t.innerHTML=`
    <div class="container-title">
        <h3 class="title-ppt">Piedra</h3>
        <h3 class="title-ppt">Papel</h3>
        <h3 class="title-o">\xf3</h3>
        <h3 class="title-ppt">Tijera</h3>
    </div>
    <button class="button-empezar">Empezar</button>
    <div class="container-ppt">
      <img src="https://i.ibb.co/HRz6GvW/piedra.png" alt="" class="img-piedra" />
      <img src="https://i.ibb.co/s9ZMbKNp/papel.png" alt="" class="img-papel" />
      <img src="https://i.ibb.co/KpsMSHnS/tijera.png" alt="" class="img-tijera" />
    </div>
    `,t.className="main";let a=t.querySelector(".button-empezar");return a?.addEventListener("click",()=>{e.goTo("/desafio-PPoT/inicio")}),t}},{path:/\/desafio-PPoT\/inicio/,component:function(e){let t=document.createElement("div");document.createElement("style"),t.innerHTML=`
      <div class="container-title">
        <h3 class="title-juego">
          Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
        </h3>
      </div>
      <button class="button-jugar">\xa1Jugar!</button>
      <div class="container-ppt">
        <img src="https://i.ibb.co/HRz6GvW/piedra.png" alt="" class="img-piedra" />
        <img src="https://i.ibb.co/s9ZMbKNp/papel.png" alt="" class="img-papel" />
        <img src="https://i.ibb.co/KpsMSHnS/tijera.png" alt="" class="img-tijera" />
      </div>
      `,t.className="main";let a=t.querySelector(".button-jugar");return a?.addEventListener("click",()=>{e.goTo("/desafio-PPoT/game")}),t}},{path:/\/desafio-PPoT\/game/,component:function(t){let a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("style"),s=3,o=setInterval(()=>{if(s--,document.getElementById("titleCounter").innerText=s.toString(),0==s){let i;clearInterval(o),a.style.display="none",n.style.display="block";let s=e.data.currentGame.computerPlay,r=e.data.currentGame.myPlay,l=e.whoWins(r,s);e.setPuntaje(l),"piedra"===s?i=document.createElement("custom-piedra"):"papel"===s?i=document.createElement("custom-papel"):"tijera"===s&&(i=document.createElement("custom-tijera")),i.style.transform="rotate(180deg)",n.style.justifyContent="space-between",n.style.height="100vh",n.style.alignItems="center",n.style.flexDirection="column-reverse",n.style.display="flex",n.appendChild(i),setTimeout(()=>{n.style.display="none",t.goTo("/desafio-PPoT/result")},3e3)}},1e3);a.innerHTML=`
        <div class="container-title-counter">
          <h1 class="title-counter" id="titleCounter">
            ${s}
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
        `,a.className="main-game",n.innerHTML=`
            
  `,i.innerHTML=`
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
    
  `,document.body.appendChild(a);let r=document.getElementById("tijera"),l=document.getElementById("papel"),p=document.getElementById("piedra");return r.addEventListener("click",()=>{r.style.transform="translate(0px, -70px)",r.style.opacity="1",l.style.transform="translate(0px, 40px)",l.style.opacity="0.5",p.style.transform="translate(0px, 40px)",p.style.opacity="0.5";let t=document.createElement("custom-tijera");e.setMove("tijera"),e.computerPlay(),n.appendChild(t)}),p.addEventListener("click",()=>{r.style.transform="translate(0px, 40px)",r.style.opacity="0.5",l.style.transform="translate(0px, 40px)",l.style.opacity="0.5",p.style.transform="translate(0px, -70px)",p.style.opacity="1";let t=document.createElement("custom-piedra");e.setMove("piedra"),e.computerPlay(),n.appendChild(t)}),l.addEventListener("click",()=>{r.style.transform="translate(0px, 40px)",r.style.opacity="0.5",l.style.transform="translate(0px, -70px)",l.style.opacity="1",p.style.transform="translate(0px, 40px)",p.style.opacity="0.5";let t=document.createElement("custom-papel");e.setMove("papel"),e.computerPlay(),n.appendChild(t)}),document.body.appendChild(n),n.style.display="none",a.appendChild(i),a}},{path:/\/desafio-PPoT\/result/,component:function(t){let a=document.createElement("div"),n="",i=e.data.currentGame.myPlay,s=e.data.currentGame.computerPlay,o=e.whoWins(i,s);n="Ganaste"==o?"gane":"Empate"==o?"empate":"perdi";let r=document.createElement("style");a.innerHTML=`
    <div class="main-resultado-${o}"> 
      <custom-resultado variant="${n}"></custom-resultado>
      <div class="main-score">
        <h3 class="h3">Score</h3>
        <div class="main-points"> 
          <h4 class="h4">Vos:${e.data.puntajes.puntajeMe}</h4>
          <h4 class="h4">M\xe1quina:${e.data.puntajes.puntajeComputer}</h4>
        </div>
      </div>
      <button class="button-volver">Volver a Jugar</button>
    </div>
  `,r.innerHTML=`
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
  `;let l=a.querySelector(".button-volver");return l?.addEventListener("click",()=>{t.goTo("/desafio-PPoT/welcome")}),a.appendChild(r),a}}];!function(e){function a(e){history.pushState({},"",e),n(e)}function n(n){for(let i of(console.log("El handleRoute recibio una nueva ruta",n),t))if(i.path.test(n)){let t=i.component({goTo:a});e?.firstChild&&e.firstChild.remove(),e?.appendChild(t)}}"/desafio-PPoT/"==location.pathname?a("/desafio-PPoT/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root")),customElements.define("custom-piedra",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),a=document.createElement("div"),n=document.createElement("style"),i=document.createElement("img");i.src="https://i.ibb.co/jvsry3t5/piedra-1.png",i.className=e,n.innerHTML=`
            .seleccion-piedra{
                width: 104px;
                height: 238px;
                transform : translate(0px, 80px);
            }
            .body{
                width: 159px;
                height: 356px;
                transform : translate(0px, 60px);

            }
        `,a.appendChild(i),t.appendChild(n),t.appendChild(a)}}),customElements.define("custom-tijera",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),a=document.createElement("div"),n=document.createElement("style"),i=document.createElement("img");i.src="https://i.ibb.co/ch8ns7Dy/tijera-1.png",i.className=e,n.innerHTML=`
            .seleccion-tijera{
                width: 104px;
                height: 238px;
                transform : translate(0px, 80px);
            }
            .body{
                width: 159px;
                height: 356px;
                transform : translate(0px, 60px);

            }
        `,a.appendChild(i),t.appendChild(n),t.appendChild(a)}}),customElements.define("custom-papel",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),a=document.createElement("div"),n=document.createElement("style"),i=document.createElement("img");i.src="https://i.ibb.co/gb3j53SG/papel-1.png",i.className=e,n.innerHTML=`
            .seleccion-papel{
                width: 104px;
                height: 238px;
                transform : translate(0px, 80px);
            }
            .body{
                width: 159px;
                height: 356px;
                transform : translate(0px, 60px);
            }
        `,a.appendChild(i),t.appendChild(n),t.appendChild(a)}}),customElements.define("custom-resultado",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("variant"),t="",a=this.attachShadow({mode:"open"}),n=document.createElement("div"),i=document.createElement("style");t="gane"==e?"Ganaste":"empate"==e?"Empate":"Perdiste",n.innerHTML=`
                <div class=${e}>${t}</div>
        `,i.innerHTML=`
              .gane{
                width: 250px;
                height: 250px;
                background-color: #4CAF50; 
                clip-path: polygon(
                    50% 0%, 61% 38%, 100% 38%, 
                    68% 60%, 79% 100%, 50% 75%, 
                    21% 100%, 32% 60%, 0% 38%, 39% 38%
                );
                position: relative;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 55px;
                font-weight: 400;
                color: white;
                border: 20px solid black;
                }
              .perdi, .empate{
                width: 250px;
                height: 250px;
                background-color:rgba(220, 91, 73, 1);
                clip-path: polygon(
                    50% 0%, 61% 38%, 100% 38%, 
                    68% 60%, 79% 100%, 50% 75%, 
                    21% 100%, 32% 60%, 0% 38%, 39% 38%
                );
                position: relative;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 55px;
                font-weight: 400;
                color: white;
                border: 20px solid black;
              }
          `,a.appendChild(i),a.appendChild(n)}});
//# sourceMappingURL=index.216c2066.js.map
