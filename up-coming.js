import {getFutureEvents,createCheck,fetchAsync,ObtenerCard,checkdinamic,searching,errorList,printError, checkboxcategory, CrearEventosDOM } from './module/funciones.js'

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then(response=>response.json())
.then( (data)=>{ 

    const allEvents= data.events
    let dateEvents= data.currentDate
    const conteiner = document.getElementById("cards")
    const searchForm= document.getElementById("form_search")
    getFutureEvents(dateEvents,allEvents,conteiner,)
    
    
    const checks = document.getElementById("category")
    const category=allEvents
        .filter(dato => dato.date > data.currentDate)
        .map(filt=>filt.category)
    const onecategory = new Set (category)
    const arraycategory = [...onecategory]
    
    checkdinamic(arraycategory,checks)
    console.log(arraycategory);
    
    //filatrado de checks
    
    checks.addEventListener("change",()=>{
        let search = searchForm[0].value.toLowerCase()
        let fil = searching(search,allEvents)
        let filterCheck = checkboxcategory(fil)
        CrearEventosDOM(filterCheck,conteiner)
        printError(filterCheck,conteiner)
    })
    
    
    
    
    searchForm.addEventListener("keyup",()=>{
        let search = searchForm[0].value.toLowerCase()
        let fil = searching(search,allEvents)
        let filterCheck = checkboxcategory(fil)
        CrearEventosDOM(filterCheck,conteiner)
        printError(filterCheck,conteiner)
    })
    
})
.catch(error=>console.log(error))
