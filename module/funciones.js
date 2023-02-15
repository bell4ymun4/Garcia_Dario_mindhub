// const EVENTS_URL = "https://mindhub-xj03.onrender.com/api/amazing";
// export function ObtenerEventos(crearEventosDOM,list){
//     fetch(EVENTS_URL)
//     .then(data=>data.json())
//     .then(crearEventosDOM)
// }
//card dinamic
export function ObtenerCard(e){
    return `<div class="card" style="width: 18rem;">
                        <img src=${e.image} class="card-img-top" alt="food">
                        <div class="card-body">
                        <h5 class="card-title">${e.name}</h5>
                        <p class="pcard">${e.description}</p>
                        <p>${e.date}</p>
                        <div class="price">
                            <div class="p">
                                <p class="m-0"><strong> PRICE : $${e.price}</strong></p>
                                </div>
                                    <a href="./Details.html?id=${e._id}" class="btn btn-primary">Go Details</a>
                                </div>
                            </div>
                        </div>`
}

export function obtenerEventosPasados(dateEvent,listEvents,conteiner){
    let fechaHoy = dateEvent
    let card = "" 
    
    for (let e of listEvents) {
        if ((e.date) < fechaHoy){
            
            card+= ObtenerCard(e)
            console.log(card);
        }
    }
    
    conteiner.innerHTML = card
}
    
// past events filter
export function CrearEventosDOM(listEvents,tarjet){
    let card = "" 
    for (let e of listEvents) {
        
            card+= ObtenerCard(e)
        
    }
    tarjet.innerHTML = card;
}

//checkbox cheked
export function checkboxcategory(lista){
    const reviewed= [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check=> check.value)
    if(reviewed.length===0){
        console.log(lista);
        return (lista)
    }
    return lista.filter(leaked=>reviewed.includes(leaked.category))
}
export function createCheck(checks){
    return  ` <div>
    <input type="checkbox" id="${checks}" value="${checks}">
    <label for="${checks}">${checks}</label>
</div>`
}
//check dinamic
export function checkdinamic(lista,elemento){ 
    let box= " "
for (let checks of lista){
    box +=createCheck(checks)
}
elemento.innerHTML = box
}

//details estimate/assistanse
export function estimateOrAssistance (event) {
    let aux = ''
    if (event.assistance) {
        aux = "Assistance :"+" "+event.assistance
    } else if (event.estimate) {
        aux = "Estimate :"+" "+event.estimate
    }
    return aux
}
//filter search
export function searching(search,lista){
    let filtro = lista.filter(pepito => pepito.name.toLowerCase().includes(search))
    return filtro
    
}

//error list
export function errorList(){ 
    return  `<div class="error"> <p class="text-center">!!!! NO EVENT FOUND¡¡¡¡</p> 
    <img src="./assests/error.jpg" alt="error" id="imgerror"> 
    <a class="back" href="./index.html">Volver</a> </div>`;
            
}

//imprimir error
export function imprimirError(lista,elemento){
    if(lista.length===0){
    elemento.innerHTML = errorList()
    }
    else{
        return ObtenerCard(lista)
    }
}
export async function fetchAsync(endpoint) {
let response = await fetch(endpoint);
let json= await response.json();
return json;
}
export function obtenerEventosFuturos(dateEvent,listEvents,conteiner){
    let fechaHoy = dateEvent
    let card = "" 
    
    for (let e of listEvents) {
        if ((e.date) > fechaHoy){
            
            card+= ObtenerCard(e)
            console.log(card);
        }
    }
    
    conteiner.innerHTML = card
}
export function cardDetails(events,cualquiera){ 
    estimateOrAssistance(events)
    cualquiera.innerHTML =    `<div class="divdetails">
                            <div class="divdetails2">
                                <img src="${events.image}"alt="${events.name}"id="imgdetails">
                            </div>
                            <div class="divdetails1">
                                <h2><u>${events.name}</u></h2>
                                <p class="pd m-0"><strong>Date: </strong> ${events.date}</p>
                                <p class="pd m-0"><strong>Place: </strong> ${events.place}</p>
                                <p class="pd m-0"><strong>Capacity:</strong>${events.capacity}</p>
                                <p class="pd m-0"><strong>price: $${events.price}</strong></p>
                                <p class="pd m-0"><strong></strong>${estimateOrAssistance(events)
                                }</p>
                                <p class="pd m-0"><strong>Description: </strong>${events.description}</p>
                            </div>
                        </div>`
    
                        
                            }
    
export function cardsFilterPast (events, pastDate) {
    let pastEvents = [];
    for(let event of events){
        if (pastDate < event.date){
        pastEvents.push(event);
    }
    }
    return pastEvents;
}      
export function cardsFilterComing (events, pastDate) {
    let pastEvents = [];
    for(let event of events){
        if (pastDate > event.date){
        pastEvents.push(event);
    }
    }
    return pastEvents;
}  
export function staticsPast (events) {
    let pastStatistics = [] // ARRAY TO SAVE 3 LIST OF ELEMENTS
    let pastCategories = Array.from(new Set(events.map(event => event.category))) // CATEGORIES OF THE EVENTS
    
    let pastRevenues = [] // REVENUES FROM THE EVENTS
    for (let category of pastCategories) {
    let revenueCont = 0
    for (let event of events) {
    if (event.category === category) {
    revenueCont += event.assistance * event.price
    }
    }
    pastRevenues.push(revenueCont)
    }
    
    
    let pastPercentageOfAttendance = [] // PERCENTAGE OF ATTENDANCE
    for (let category of pastCategories) {
    let assistance = 0
    let capacity = 0
    for (let event of events) {
    if (event.category === category) {
    assistance += event.assistance
    capacity += event.capacity
    }
    }
    pastPercentageOfAttendance.push((assistance * 100) / capacity)
    }
    
    
    pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance)
    return pastStatistics
    }
export function staticsUpComing(events) {
        let upcomingStatistics = [] // ARRAY TO SAVE 3 LIST OF ELEMENTS
        let upcomingCategories = Array.from(new Set(events.map(event => event.category))) // CATEGORIES OF THE EVENTS
        
        
        let upcomingRevenues = [] // REVENUES FROM THE EVENTS
        for (let category of upcomingCategories) {
        let revenueCont = 0
        for (let event of events) {
        if (event.category === category) {
        revenueCont += event.estimate * event.price
        }
        }
        upcomingRevenues.push(revenueCont)
        }
        
        
        let upcomingPercentageOfAttendance = [] // PERCENTAGE OF ATTENDANCE
        for (let category of upcomingCategories) {
        let estimateAttendance = 0
        let capacity = 0
        for (let event of events) {
        if (event.category === category) {
        estimateAttendance += event.estimate
        capacity += event.capacity
        }
        }
        upcomingPercentageOfAttendance.push((estimateAttendance * 100) / capacity)
        }
        
        
        upcomingStatistics.push(upcomingCategories, upcomingRevenues, upcomingPercentageOfAttendance)
        return upcomingStatistics
        }    
export function greaterCapacity(events) {
let larger = 0
let largerCapacityEvent
for (let event of events) {
if (larger === 0 || event.capacity > larger) {
larger = event.capacity
largerCapacityEvent = event
}
}
return largerCapacityEvent
}
export function lowPercentage(events) {
    let lowest = 0
    let lowestEvent
    for (let event of events) {
    let percentageOfAttendance = (event.assistance * 100) / event.capacity
    if (lowest === 0 || percentageOfAttendance < lowest) {
    lowest = percentageOfAttendance
    lowestEvent = event
    }
    }
    return lowestEvent
    }
export function highPercentage(events) {
let highest = 0
let highestEvent
for (let event of events) {
let percentageOfAttendance = (event.assistance * 100) / event.capacity
if (highest === 0 || percentageOfAttendance > highest) {
highest = percentageOfAttendance
highestEvent = event
}
}
return highestEvent
}
export function pastFilter(events, date) {
    let pastEvents = []
    for (let event of events) {
    if (date > event.date) {
    pastEvents.push(event)
    }
    }
    return pastEvents
    }

export function filtup(events, date) {
let upcomingFilter = []
for (let event of events) {
if (date < event.date) {
upcomingFilter.push(event)
}
}
return upcomingFilter
}
export async function asyncdata() {
    try {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    const data = await response.json()
    return data
    }
    catch (error) {
    console.log(`Error: ${error}`)
    }
    }
    




// const Events = new (function(){

//     const ListEvents = [];

//     this.Get = async () => {
//         await getEvents();
//         return ListEvents;
//     }

//     async function getEvents(){
//         // debugger;
//         ListEvents.push(...(await fetchAsync(EVENTS_URL)).events);
//     }

//     (async()=>{
//         await getEvents();
//     })();

// })();
// let eventList =await fetchAsync(EVENTS_URL)
// eventsObject.push(...eventList.events)
