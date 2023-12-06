const urlApi = "https://striveschool-api.herokuapp.com/books"
let creali=document.createElement("li")

let arrayApi


fetch(urlApi)
    .then(response => response.json())
    .then(data => creaSchede(data))

function creaSchede(a) {
    
    let checkPos = document.getElementById('row0')
    for (let i = 0; i < 12; i++) {
        
        if(localStorage.getItem(i))
        {
            creaCopia(a,i)
        }
        checkPos.innerHTML += `<div id="coln`+i+`" class="col-3"'
            <div class="card">
            <img class="card-img-top" src="`+ a[i].img + `" alt="Title" />
            <div class="card-body">
            <h4 class="card-title">`+ a[i].title + `</h4>
            <p class="card-text">`+ a[i].price + `7</p>
            <button id="bottone`+ i + `">Scarta</button>
            <button id="Buy`+ i + `">Compra ora</button>
            </div>
            </div>
            </div>`
    }
    addRemovefunction()
    addBuyfunction(a)
    
}


function addRemovefunction() {
    for (let i = 0; i < 12; i++){
    document.getElementById("bottone" + i).addEventListener("click", function () {
        document.getElementById("coln"+i).remove()
    })
}
}
function addBuyfunction(a){
    for (let i = 0; i < 12; i++){
        document.getElementById("Buy" + i).addEventListener("click", function () {
           creaCopia(a,i)
           localStorage.setItem(i,i) 
        })
}
}

function creaCopia(a,i){
    creali.innerHTML+=`<div id="DelDiv`+i+`"class= "container d-flex ">
           <img class=" widthimg " src="`+ a[i].img + `" alt="Title" />
           <div>
           <h4 >`+ a[i].title + `</h4>
           <p >`+ a[i].price + `7</p>
           <button id="Del`+i+`">Rimuovi</button>
           </div>`
           document.getElementsByTagName("ul")[0].appendChild(creali)
           console.log(document.getElementById("DelDiv"+i))
           console.log(document.getElementById("Del"+i))
           rimuovidalCarrello(i)
           
}
function rimuovidalCarrello(i){
    document.getElementById("Del"+i).addEventListener("click",function(){
            document.getElementById("DelDiv"+i).remove()
            localStorage.removeItem(i)
    })
}