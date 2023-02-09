const conteiner = document.getElementById("cards")
let eventInfo = data.events
let fechaHoy = data.currentDate



function functionCard(e){ 
    let card = " " 
for (let idInfo of e) {
    if (idInfo.date > fechaHoy) {
    card.className = "card-info"
    card+= ` <div class="card" style="width: 18rem;">
                        <img src=${idInfo.image} class="card-img-top" alt="food">
                        <div class="card-body">
                        <h5 class="card-title">${idInfo.name}</h5>
                        <p class="pcard">${idInfo.description}</p>
                        <p>${idInfo.date}</p>
                        <div class="price">
                            <div class="p">
                                <p class="m-0"><strong> PRICE : $${idInfo.price}</strong></p>
                                </div>
                                    <a href="./Details.html?id=${idInfo._id}" class="btn btn-primary">Go Details</a>
                                </div>
                            </div>
                        </div>`

}
conteiner.innerHTML = card
}
}

functionCard(eventInfo)


//buscador


const searchInput = document.querySelector(".form-control");
searchInput.addEventListener("input", (e) => {
    (e).preventDefault 
const search = e.target.value.toLowerCase();
const cards = document.querySelectorAll(".card");
let words = false;
cards.forEach(card => {
    const name = card.querySelector(".card-title").innerText.toLowerCase();
    if (name.startsWith(search)) {
        words = true;
    card.style.display = "block";
    } else {
    card.style.display = "none";
    }
    
});

if (!words) {
    conteiner.innerHTML = `<div class="error"> <p class="text-center">!!!! NO EVENT FOUND¡¡¡¡</p> 
    <img src="./assests/error.jpg" alt="error" id="imgerror"> 
    <a class="back" href="./upcoming_event.html">Volver</a> </div>`
    
}

});


//checks dinamicos


const checks = document.getElementById("category")
const category=eventInfo.map(eventInfo=>eventInfo.category)
const onecategory = new Set (category)
const arraycategory = [...onecategory]

let box= " "
for (let checks of arraycategory){
    box += ` <div>
    <input type="checkbox" id="${checks}" value="${checks}">
    <label for="${checks}">${checks}</label>
</div>`
}
checks.innerHTML = box

//filatrado de checks

checks.addEventListener("change" ,(e) =>{
    let aux = checkboxcategory  (eventInfo)
    functionCard(aux)
} )

function checkboxcategory(e){
    const reviewed= [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check=> check.value)
    if(reviewed.length===0){
        return (e)
    }
    return e.filter(leaked=>reviewed.includes(leaked.category))
}
