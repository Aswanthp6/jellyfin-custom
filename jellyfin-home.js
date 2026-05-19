document.addEventListener(

"DOMContentLoaded",

()=>{

const interval = setInterval(()=>{

const homeSection = document.querySelector(
".homeSections"
);

if(!homeSection) return;

if(
document.getElementById(
"moviesPortalBtn"
)
) return;

const wrapper =
document.createElement(
"div"
);

wrapper.innerHTML =

`
<div style="
padding:15px;
margin:10px;
">

<button
id="moviesPortalBtn"
style="
background:#b00000;
color:white;
border:none;
padding:12px 20px;
border-radius:12px;
font-size:16px;
cursor:pointer;
font-weight:600;
">

🎬 Movies Portal

</button>

</div>
`;

homeSection.prepend(
wrapper
);

document
.getElementById(
"moviesPortalBtn"
)
.onclick=()=>{

window.location.href=
"https://movies.aspmoviesz.dpdns.org";

};

clearInterval(
interval
);

},1000);

});
