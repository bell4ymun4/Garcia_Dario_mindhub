
import { createCheck,fetchAsync,ObtenerCard,checkdinamic,searching,errorList,printError, checkboxcategory, CrearEventosDOM } from './module/funciones.js'
const searchForm= document.getElementById("form_search")
const conteiner = document.getElementById("cards")


fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then(response=>response.json())
.then( (data)=>{  
    
    const allEvents= data.events
    
    CrearEventosDOM(allEvents,conteiner)
    
    const checks = document.getElementById("category")
    const category=allEvents.map(filt=>filt.category)
    const onecategory = new Set (category)
    const arraycategory = [...onecategory]
    
    checkdinamic(arraycategory,checks)
    
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





