import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-kKXWU0A9.js";import"./challenges-Uq9k6NgB.js";import"./navbar--MtIQtyW.js";const I=function(e,t,s){const r=document.createDocumentFragment();for(let a=0;a<e;a++)for(let m=0;m<t;m++){const g=document.createElement("div");g.dataset.i=a,g.dataset.j=m,g.classList.add(s),r.appendChild(g)}return r},A=function(e,t){const s=document.createDocumentFragment();for(let r=0;r<e;r++){const a=document.createElement("div");a.dataset.j=r,a.classList.add(t),s.appendChild(a)}return s},f=(e,t,s)=>{let r=0;for(let a=0;a<e.length;a++)if(r=e[a]===t?r+1:0,r===s)return!0;return!1},p=(e,t)=>Array.from(new Array(e),()=>new Array(t).fill(0)),d=document.getElementById("board"),l=document.getElementById("slots"),x=document.getElementById("reset"),v=document.getElementById("info"),y=6,u=7,c=4,n={activePlayer:1,state:p(y,u),winner:null,getActiveColor(){return this.activePlayer===1?"blue":"red"},switchPlayer(){this.activePlayer=this.activePlayer===1?2:1},isStateFull(){return this.state[0].every(e=>e!==0)},reset(){this.state=p(y,u),this.winner=null,this.activePlayer=1}},F=(e,t)=>{d.style.gridTemplateRows=`repeat(${e}, 5em)`,d.style.gridTemplateColumns=`repeat(${t}, 5em)`},h=e=>{const t=l.querySelector(".active");t&&(t.classList.remove("active"),t.style.backgroundColor="transparent"),l.children[e].classList.add("active"),l.children[e].style.backgroundColor=n.getActiveColor()},C=()=>{const e=l.querySelector(".active");e&&(e.classList.remove("active"),e.style.backgroundColor="transparent")},S=e=>{let t=0;for(t=0;t<y&&n.state[t][e]===0;t++);return t-1<0||(n.state[t-1][e]=n.activePlayer,d.children[e+(t-1)*u].style.backgroundColor=n.getActiveColor()),t-1},T=(e,t)=>{const s=n.state[e][t],r=c-1,a=c*2-1,m=n.state[e].slice(Math.max(0,t-r),t+c);if(f(m,s,c))return!0;const P=n.state.map(o=>o[t]).slice(e,e+c);if(f(P,s,c))return!0;const b=new Array(a).fill(0).map((o,i)=>i-r).map(o=>{var i;return(i=n.state[e+o])==null?void 0:i[t+o]});if(f(b,s,c))return!0;const k=new Array(a).fill(0).map((o,i)=>i-r).map(o=>{var i;return(i=n.state[e+o])==null?void 0:i[t-o]});return!!f(k,s,c)},w=()=>{const e=A(u,"slot");l.innerHTML="",l.appendChild(e);const t=I(y,u,"box");d.innerHTML="",d.appendChild(t),v.textContent=""},L=e=>{if(n.winner)return;const t=e.target;if(t.classList.contains("box")||t.classList.contains("slot")){const s=+t.dataset.j,r=S(s);if(r<0)return;if(T(r,s)){n.winner=n.activePlayer,v.textContent=`Player ${n.getActiveColor()} wins!`,C();return}if(r===0&&n.isStateFull()){n.winner=-1,v.textContent="Draw!",C();return}n.switchPlayer(),h(s)}},E=e=>{if(n.winner)return;const t=e.target;(t.classList.contains("box")||t.classList.contains("slot"))&&h(t.dataset.j)};x.addEventListener("click",function(){n.reset(),w()});d.addEventListener("click",L);l.addEventListener("click",L);d.addEventListener("mouseover",E);l.addEventListener("mouseover",E);w();F(y,u);
