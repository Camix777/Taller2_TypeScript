import { Serie } from "./serie.js";

import { series } from "./data.js";


let tablaSeries: HTMLElement = document.getElementById("series")!;

function mostrarSeries(series: Serie[]):void{
    let tbodySeries: HTMLElement = document.createElement("tbody");
    for (let serie of series){
        let trSerie: HTMLElement = document.createElement("tr");
        trSerie.innerHTML = `<td>${serie.id}</td><td><a href=${serie.url}>${serie.name}</a></td>
        <td>${serie.channel}</td><td>${serie.seasons}</td><td colspan=2><img src=${serie.image} height=50></td>`
        tbodySeries.appendChild(trSerie);
    }
    tablaSeries.appendChild(tbodySeries);
    

}