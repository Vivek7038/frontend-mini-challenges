import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-kKXWU0A9.js";import"./challenges-Uq9k6NgB.js";import"./navbar--MtIQtyW.js";const o=document.getElementById("password"),r=document.getElementById("progressBar"),y=document.getElementById("strength"),f=document.getElementById("lc"),p=document.getElementById("uc"),h=document.getElementById("num"),E=document.getElementById("sym"),B=document.getElementById("chars"),c=[{difficulty:"Weak",color:"red"},{difficulty:"Medium",color:"orange"},{difficulty:"Strong",color:"green"}],l=/\d/,u=/[A-Z]/,m=/[a-z]/,a=/[^A-Za-z0-9]/;function I(t){return t>8?c[2]:t>5?c[1]:c[0]}function w(t){let e=0;return t.length>3&&(e=Math.min(6,Math.floor(t.length/3)),e+=l.test(t)+u.test(t)+m.test(t)+a.test(t)),e}function C(t,e,s,n){y.textContent=t.difficulty,r.style.backgroundColor=t.color,r.style.width=e*10+"%",f.className=n.lc,p.className=n.uc,h.className=n.num,E.className=n.sym,B.textContent=s}o.addEventListener("input",function(){const t=o.value,e=w(o.value),s=I(e),[n,d,g,i]=[m.test(t),u.test(t),l.test(t),a.test(t)];C(s,e,t.length,{lc:n,uc:d,num:g,sym:i})});
