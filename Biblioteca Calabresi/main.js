
let tolkien = ["El Silmarillon","El Hobbit", "La Comunidad del Anillo", "Las Dos Torres", "El Retorno del Rey"];
let lovecraft = ["La Llamada de Chuthulu", "El Necronomicon", "Una Sombra Sobre Insmouth", "Dagon"];
let dragonlance =["El Retorno de los Dragones", "La Tumba de Huma", "La Reina de la Oscuridad", "Dragons of Spring Dawning"];
let fherbert = ["Dune","Dune Messiah","Children of Dune", "God Emperor of Dune","Heretics of Dune", "Chapterhouse: Dune", "The Road to Dune"];
let asimov = ["Fundación", "Fundación e Imperio", "Segunda Fundación", "Nuevo y Viejo Testamento", "Biografía"];
let sking = ["Salems lot", "Ojos del Dragón", "Desesperación"];
let newBook = [];

let tolkien1 = ["J.R.R. Tolkien", "Formato físico en tapa dura y tapa blanda", "Español :"];
let lovecraft1 = ["H.P.Lovecraft", "Formato físico en tapa dura", "Español e Inglés"];
let dragonlance1 =["Margaret Weis & Tracy Hickman", "Formato físico en tapa dura y tapa blanda", "Español e Inglés"];
let herbert = ["Frank Herbert", "Formato físico en tapa blanda", "Inglés"];
let asimov1 = ["Isaac Asimov", "Formato físico en tapa blanda", "Español"];
let king = ["Stephen King", "Formato digital y físico en tapa blanda", "Español e Inglés"];
let newData = [];





let catalogo = [
   {tolkien:tolkien1},
   {lovecraft:lovecraft1},
   {dragonlance:dragonlance1},
   {fherbert:herbert},
   {asimov:asimov1},
   {sking:king}
   
]



let input = document.getElementById("buscar");
let boton = document.getElementById("boton")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
         
      alert("Catálogo cargado con éxito")

      let contenedor = document.createElement("div");

         contenedor.innerHTML = `  
                             <ol>
                                 <h5><strong>1° ${tolkien1}</strong></h5>
                                 <li>${tolkien}</li>
                                 <br>
                                 <h5><strong>2° ${lovecraft1}</strong></h5>
                                 <li>${lovecraft}</li> 
                                 <br>
                                 <h5<strong>3° ${dragonlance1}</strong></h5>
                                 <li>${dragonlance}</li>
                                 <br> 
                                 <h5><strong>4° ${herbert}</strong></h5>
                                 <li>${fherbert}</li>
                                 <br> 
                                 <h5><strong>5° ${asimov1}</strong></h5>
                                 <li>${asimov}</li>
                                 <br> 
                                 <h5<strong>6° ${king}</strong></h5>
                                 <li>${sking}</li> 
                                 <br>
                                 <h5<strong>7° ${newData}</strong></h5>
                                 <li>${newBook}</li> 
                                 <br>  
                             </ol>`;
         document.body.appendChild(contenedor);
     }



     let autor = document.querySelector("#autor");
     let obra = document.querySelector("#obra");
     let edicion = document.querySelector("#edicion");
     let idioma = document.querySelector("#idioma");
     let bot = document.querySelector("#enviar");
     let mostrar = document.querySelector("#mostrar");

     bot.addEventListener("click", function(){
       newData.push(autor.value);
       newBook.push(obra.value);
       newData.push(edicion.value);
       newData.push(idioma.value);
       mostrar.innerHTML=newData;
       mostrar.innerHTML=newBook; 
     
     })
    
     let catalogoJs= JSON.stringify(localStorage.getItem("tolkien",tolkien));
     localStorage.setItem("lovecraft",lovecraft)
     sessionStorage.setItem('Visit me','https://github.com/Tindalo');

 
     let titleForm = document.getElementById("titleForm");
     titleForm.innerText = "Complete los siguientes datos para actualizar la base de datos de la biblioteca"