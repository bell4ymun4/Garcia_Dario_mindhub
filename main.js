const cards = document.getElementById("cards")
let eventInfo = data.events
let card = " "

for (let idInfo of eventInfo) {
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
                                    <a href="./Details.html" class="btn btn-primary">Go Details</a>
                                </div>
                            </div>
                        </div>`

}
cards.innerHTML = card