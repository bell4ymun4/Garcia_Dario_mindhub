import { cardDetails,estimateOrAssistance } from './module/funciones.js'

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then(response=>response.json())
.then( (data)=>{ 
    const allEvents= data.events
    const queryString = location.search
    const params = new URLSearchParams(queryString)
    const id = params.get("id")
    const card = allEvents.find(data => data._id==id)
    const box = document.getElementById("box")
    
    cardDetails(card,box)
    
})
.catch(error=>console.log(error))



