import{d as e,j as o}from"./ng-challenges-XJfGJxkY.js";e();const s=window.location.pathname.split("/challenges/")[1].slice(0,-1),n=o.get(s),a=`
  <a slot="left" href="/frontend-mini-challenges/javascript/" class="back">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </a>
`,l=n!=null&&n.youtube?`<a slot="icon" href=${n.youtube} target="blank" class="youtube">
    <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="youtube solution" />
  </a>`:"",t=document.createElement("navigation-bar");t.challengeTitle=n.title;t.innerHTML+=a;t.innerHTML+=l;document.body.prepend(t);
