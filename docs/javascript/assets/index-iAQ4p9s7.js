import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-kKXWU0A9.js";import"./challenges-Uq9k6NgB.js";import"./navbar--MtIQtyW.js";const h=document.getElementById("pagination"),d=document.getElementById("pages"),g=document.getElementById("siblings"),c=document.getElementById("boundary");class r{constructor(t,n,s,e,o=1){this.paginatorElement=t,this.totalPages=n,this.activePage=o,this.siblingCount=s,this.boundary=e,this.addListener(),this.populate()}addListener(){this.paginatorElement.addEventListener("click",t=>{if(t.target.classList.contains("page-number")){this.activePage=+t.target.dataset.value,this.populate();return}if(t.target.classList.contains("page-decrement")){this.activePage=Math.max(1,this.activePage-1),this.populate();return}if(t.target.classList.contains("page-increment")){this.activePage=Math.min(this.totalPages,this.activePage+1),this.populate();return}})}populate(){this.paginatorElement.innerHTML="";const t=this.siblingCount*2+2+this.boundary;let n=!1;const s=document.createDocumentFragment();let e=document.createElement("button");e.classList.add("page-modifier"),e.classList.add("page-decrement"),e.textContent="<",this.activePage===1&&(e.disabled=!0),s.appendChild(e);for(let a=1;a<=this.totalPages;a++){const i=document.createElement("button");let l=a;if(!(a<=this.boundary||a>this.totalPages-this.boundary||this.activePage<=t-this.siblingCount&&a<=t||this.activePage>this.totalPages-t+this.siblingCount&&a>this.totalPages-t||a>=this.activePage-this.siblingCount&&a<=this.activePage+this.siblingCount)){if(n)continue;l="...",i.classList.add("dot"),i.classList.add(this.activePage>a?"dot-left":"dot-right"),i.dataset.value=this.activePage>a?Math.max(1,this.activePage-t):Math.min(this.totalPages,this.activePage+t)}i.textContent=l,typeof l=="number"&&(i.dataset.value=a,i.setAttribute("tabindex",0)),n=typeof l=="string",i.classList.add("page-number"),s.appendChild(i)}e=document.createElement("button"),e.classList.add("page-modifier"),e.classList.add("page-increment"),e.textContent=">",this.activePage===this.totalPages&&(e.disabled=!0),s.appendChild(e),this.paginatorElement.appendChild(s);const o=this.paginatorElement.querySelector(`[data-value='${this.activePage}']`);o.classList.add("active"),o.focus()}setTotalPages(t){this.totalPages=t,this.activePage=Math.min(this.activePage,this.totalPages),this.populate()}setBoundary(t){this.boundary=t,this.populate()}setSiblingCount(t){this.siblingCount=t,this.populate()}}const u=new r(h,+d.value,+g.value,+c.value);d.addEventListener("input",()=>{u.setTotalPages(+d.value)});g.addEventListener("input",()=>{u.setSiblingCount(+g.value)});c.addEventListener("input",()=>{u.setBoundary(+c.value)});
