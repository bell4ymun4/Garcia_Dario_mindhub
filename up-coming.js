// const cards = document.getElementById("cards")
// let eventInfo = data.events
// let card = " "
// let fechaHoy = data.currentDate

// for (let idInfo of eventInfo) {
//     if (idInfo.date > fechaHoy) {
//         card.className = "card-info"
//         card +=    `<div class="card" style="width: 18rem;">
//                         <img src=${idInfo.image} class="card-img-top" alt="food">
//                         <div class="card-body">
//                             <h5 class="card-title">${idInfo.name}</h5>
//                             <p class="pcard">${idInfo.description}</p>
//                             <p>${idInfo.date}</p>
//                             <div class="price">
//                                 <div class="p">
//                                     <p class="m-0"><strong> PRICE : $${idInfo.price}</strong></p>
//                                 </div>
//                                     <a href="./Details.html" class="btn btn-primary">Go Details</a>
//                             </div>
//                         </div>
//                     </div>`
//     }
//         console.log(card);
// }
// cards.innerHTML = card

function cards_filter(){
    const cards = document.getElementById("cards")
    for(let idInfo of data.events){
        if(idInfo.date > data.currentDate){
            let card=document.createElement("div")
            card.innerHTML=  `<div class="card" style="width: 18rem;">
                                     <img src=${idInfo.image} class="card-img-top" alt="food">
                                         <div class="card-body">
                                             <h5 class="card-title">${idInfo.name}</h5>
                                             <p class="pcard">${idInfo.description}</p>
                                             <p>${idInfo.date}</p>
                                             <div class="price">
                                                 <div class="p">
                                                     <p class="m-0"><strong> PRICE : $${idInfo.price}</strong></p>
                                                 </div>
                                                     <a href="./Details.html" class="btn btn-primary">Go Details</a>
                                             </div>
                                         </div>
                                     </div>`
                                     cards.appendChild(card)
        }
    }
}
cards_filter()