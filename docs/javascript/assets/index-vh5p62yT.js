import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-kKXWU0A9.js";import"./challenges-Uq9k6NgB.js";import"./navbar--MtIQtyW.js";const r=document.getElementById("dark-mode-toggle"),l=document.getElementById("add-button"),d=document.getElementById("workouts"),s=document.getElementById("workout"),c=document.getElementById("duration"),a=document.getElementById("error-message");r.addEventListener("click",m);l.addEventListener("click",i);function m(){const t=document.body,o=document.querySelector(".container"),e=document.querySelector("h1");t.classList.contains("dark-mode")?(t.classList.remove("dark-mode"),o.classList.remove("dark-mode"),e.classList.remove("dark-mode")):(t.classList.add("dark-mode"),o.classList.add("dark-mode"),e.classList.add("dark-mode"))}function i(){const t=s.value,o=c.value;if(t&&o){a.textContent="";const e=document.createElement("li");e.textContent=`${t} - ${o} minutes`;const n=document.createElement("button");n.textContent="Delete",n.className="delete-button",n.addEventListener("click",function(){d.removeChild(e)}),e.appendChild(n),d.appendChild(e),s.value="",c.value=""}else a.textContent="Please fill in both fields."}
