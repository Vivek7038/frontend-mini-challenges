import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-kKXWU0A9.js";import"./challenges-Uq9k6NgB.js";import"./navbar--MtIQtyW.js";const i=8,n=document.querySelector(".board");function m(a,o,s=o){var r=document.createDocumentFragment();for(let d=0;d<o;d++){var e=document.createElement("div");for(let l=0;l<s;l++){var t=document.createElement("button");t.dataset.x=d,t.dataset.y=l,t.classList.add("box"),e.appendChild(t)}r.appendChild(e)}a.appendChild(r)}function u(a){f();const o=a.target;if(o.classList.contains("box")){c(o);let s=+o.dataset.x,r=+o.dataset.y;for(let e=s-1,t=1,d=r;e>=0;e--,t++)c(n.querySelector(`[data-x='${e}'][data-y='${d-t}']`)),c(n.querySelector(`[data-x='${e}'][data-y='${d+t}']`));for(let e=s+1,t=1,d=r;e<i;e++,t++)c(n.querySelector(`[data-x='${e}'][data-y='${d-t}']`)),c(n.querySelector(`[data-x='${e}'][data-y='${d+t}']`))}}function c(a){a&&a.classList.add("selected")}function f(){const a=document.querySelector(".board").getElementsByClassName("selected");for(;a.length!==0;)a[0].classList.remove("selected")}m(n,i);document.addEventListener("click",u);
