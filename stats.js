
import { asyncdata,staticsPast, filtup, pastFilter, highPercentage, lowPercentage, greaterCapacity, staticsUpComing,    } from "./module/funciones.js";

const statsMain = document.getElementById("table");

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
.then(response=>response.json())
.then( (data)=>{ 
    
    const upcomingEvents = filtup(data.events, data.currentDate);
    const pastEvents = pastFilter(data.events, data.currentDate);
    const percentageHigh = highPercentage(pastEvents);
    const PercentageLow = lowPercentage(pastEvents);
    const largestCapacity = greaterCapacity(data.events);
    const upcomingStatistics = staticsUpComing(upcomingEvents);
    const pastStatistics = staticsPast(pastEvents);

    // Rellena la tabla de estadísticas de eventos
    const eventStatisticsContainer = document.getElementById("statistics");
    eventStatisticsContainer.innerHTML = `
    <tr>
    <td>"${percentageHigh.name}" with ${((percentageHigh.assistance * 100) / percentageHigh.capacity).toFixed(2)}%</td>
    <td>"${PercentageLow.name}" with ${((PercentageLow.assistance * 100) / PercentageLow.capacity).toFixed(2)}%</td>
    <td>"${largestCapacity.name}" with ${largestCapacity.capacity} capacity</td>
    </tr>
    `;

    // Rellena la próxima tabla de estadísticas futuras
    const conteinerUpComing = document.getElementById("up-stats");
    const nextFile = upcomingStatistics[0].map((category, i) => `
    <tr>
    <td>${category}</td>
    <td>$${upcomingStatistics[1][i]}</td>
    <td>${upcomingStatistics[2][i].toFixed(2)}%</td>
    </tr>
    `).join("");
    conteinerUpComing.innerHTML = nextFile;

    // Rellena la tabla de estadísticas pasadas
    const conteinerPast = document.getElementById("past-stats");
    const pastRows = pastStatistics[0].map((category, i) => `
    <tr>
    <td>${category}</td>
    <td>$${pastStatistics[1][i]}</td>
    <td>${pastStatistics[2][i].toFixed(2)}%</td>
    </tr>
    `).join("");
    conteinerPast.innerHTML = pastRows;
})
    
.catch((err) => {
    console.log(err) 
    statsMain.innerHTML = `<p class="text-center"> Error </p>`
} 
)











