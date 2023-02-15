import { cardsFilterPast,obtenerEventosPasados,createCheck,fetchAsync,ObtenerCard,checkdinamic,searching,errorList,imprimirError, checkboxcategory, CrearEventosDOM } from './module/funciones.js'

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then(response=>response.json())
.then( (data)=>{ 
    const allEvents= data.events
    let dateEvents= data.currentDate
    const conteiner = document.getElementById("cards")
    const searchForm= document.getElementById("form_search")
    CrearEventosDOM(cardsFilterPast(allEvents,dateEvents),conteiner)
    
    const checks = document.getElementById("category")
    const category=allEvents.map(filt=>filt.category)
    const onecategory = new Set (category)
    const arraycategory = [...onecategory]
    
    checkdinamic(arraycategory,checks)
    
    //filatrado de checks
    
    checks.addEventListener("change",()=>{
        let search = searchForm[0].value.toLowerCase()
        let fil = searching(search,cardsFilterPast(allEvents,dateEvents))
        let filterCheck = checkboxcategory(fil)
        CrearEventosDOM(filterCheck,conteiner)
        imprimirError(filterCheck,conteiner)
    })
    
    
    
    
    searchForm.addEventListener("keyup",()=>{
        let search = searchForm[0].value.toLowerCase()
        let fil = searching(search,cardsFilterPast(allEvents,dateEvents))
        let filterCheck = checkboxcategory(fil)
        CrearEventosDOM(filterCheck,conteiner)
        imprimirError(filterCheck,conteiner)
    })


})
.catch(error=>console.log(error))


