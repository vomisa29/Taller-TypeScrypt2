import { Serie } from "./Serie.js";
import { data } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;

function renderSeriesInTable(series: Serie[]): void {
    
    series.forEach(s => {
      let trElement = document.createElement("tr")
      trElement.innerHTML = `<td>${s.id}</td>
                             <td><a href="#" onclick="crearPlantilla('${s.name}','${s.poster}','${s.description}','${s.webpage}')">${s.name}</a></td>
                             <td>${s.channel}</td>
                             <td>${s.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
}

function getPromedioSeasons(series: Serie[]): number {
    let promedio: number = 0;
    series.forEach((serie) => promedio += serie.seasons);
    promedio/=series.length;
    return promedio;
}


renderSeriesInTable(data);
let nodoPromedio = document.getElementById("promedio")!;
nodoPromedio.innerText = "Seasons Average: " + getPromedioSeasons(data).toString();