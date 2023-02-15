
import { asyncdata, filtup, pastFilter, highPercentage, lowPercentage, greaterCapacity, staticsUpComing, staticsPast } from "./module/funciones.js";

const statsMain = document.getElementById("table");

(async () => {
try {
const response = await asyncdata();
const upcomingEvents = filtup(response.events, response.currentDate);
const pastEvents = pastFilter(response.events, response.currentDate);
const percentageHigh = highPercentage(pastEvents);
const PercentageLow = lowPercentage(pastEvents);
const largestCapacity = greaterCapacity(response.events);
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
} catch (error) {
console.log(error);
statsMain.innerHTML = `<p class="text-center">An unexpected error has occurred</p>`;
}
})();













