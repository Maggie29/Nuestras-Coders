

var students = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán",
"Miriam Mendoza","Elizabeth Condori"]


function printCoders(event){
  for(var i = 0; i<students.length; i++){
    var section = document.createElement("section");
    document.body.appendChild(section);
    var divTitulo = document.createElement("div");
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Nuestras Coders");
    parrafo.appendChild(contenido);
    divTitulo.appendChild(parrafo);
    section.appendChild(divTitulo);


var divGrid = document.createElement("div");
divGrid.setAttribute("class", "grid");
var img = document.createElement("img");
img.setAttribute("class", "image");
img.src = "assets/img"+(i+1)+"png"
img.alt = students[1];
var span = document.createElement("span");
span.setAttribute("class", "coder");
span.innerHTML = students[i];
divGrid.appendChild(span);
divGrid.appendChild(img);

  }
}

window.addEventListener("load", print);
