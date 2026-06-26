const cards = document.querySelectorAll(".seal-card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

card.style.transform =
`rotateY(${(x-150)/25}deg)
 rotateX(${(y-150)/-25}deg)
 translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateY(0deg) rotateX(0deg)";

});

});