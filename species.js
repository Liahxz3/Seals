const species = {

harbor:{
name:"Harbor Seal",
status:"Least Concern",
family:"Phocidae",
length:"1.8 m",
weight:"130 kg",
image:"../assets/harbor-seal.jpg",
description:
"Harbor seals are among the most widespread seals in the world and are often seen resting on coastal rocks and beaches."
},

grey:{
name:"Grey Seal",
status:"Least Concern",
family:"Phocidae",
length:"2.3 m",
weight:"310 kg",
image:"../assets/grey-seal.jpg",
description:
"Grey seals are large Atlantic seals known for their long snouts and impressive diving ability."
},

leopard:{
name:"Leopard Seal",
status:"Least Concern",
family:"Phocidae",
length:"3.5 m",
weight:"600 kg",
image:"../assets/leopard-seal.jpg",
description:
"Leopard seals are apex predators of Antarctica and possess powerful jaws."
},

walrus:{
name:"Walrus",
status:"Vulnerable",
family:"Odobenidae",
length:"3.2 m",
weight:"1200 kg",
image:"../assets/walrus.jpg",
description:
"Walruses are famous for their tusks and whiskers and inhabit Arctic waters."
}

};

function loadSpecies(id){

const s = species[id];

document.getElementById("speciesName").textContent=s.name;
document.getElementById("speciesStatus").textContent=s.status;
document.getElementById("speciesFamily").textContent=s.family;
document.getElementById("speciesLength").textContent=s.length;
document.getElementById("speciesWeight").textContent=s.weight;
document.getElementById("speciesDescription").textContent=s.description;
document.getElementById("speciesImage").src=s.image;

document
.querySelectorAll(".species-item")
.forEach(item=>item.classList.remove("active"));

event.target.classList.add("active");
}