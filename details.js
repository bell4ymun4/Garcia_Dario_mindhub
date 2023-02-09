let eventInfo = data.events

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const card = eventInfo.find(data => data._id==id)

const box = document.getElementById("box")

function estimateOrAssistance (card) {
    let aux = ''
    if (card.assistance) {
        aux = card.assistance
    } else if (card.estimate) {
        aux = card.estimate
    }
    return aux
}

box.innerHTML =    `<div class="divdetails">
                        <div class="divdetails2">
                            <img src="${card.image}"alt="${card.name}"id="imgdetails">
                        </div>
                        <div class="divdetails1">
                            <h2><u>${card.name}</u></h2>
                            <p class="pd m-0"><strong>Date: </strong> ${card.date}</p>
                            <p class="pd m-0"><strong>Place: </strong> ${card.place}</p>
                            <p class="pd m-0"><strong>Capacity:</strong>${card.capacity}</p>
                            <p class="pd m-0"><strong>price: $${card.price}</strong></p>
                            <p class="pd m-0"><strong>Assistance/Estimate </strong>${estimateOrAssistance(card)
                            }</p>
                            <p class="pd m-0"><strong>Description: </strong>${card.description}</p>
                        </div>
                    </div>`










