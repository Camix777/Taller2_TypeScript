import { Serie } from "./serie.js";

import { series } from "./data.js";


let tablaSeries: HTMLElement = document.getElementById("series")!;

console.log(series);

function mostrarSeries(listseries: Serie[]):void{
    for (let serie of listseries){
        let trSerie: HTMLElement = document.createElement("tr");
        trSerie.innerHTML = `<th scope="row">${serie.id}</th><td><a href=${serie.url}>${serie.name}</a></td>
        <td>${serie.channel}</td><td>${serie.seasons}</td>`
        tablaSeries.appendChild(trSerie);
    }
}

function promedioTemporadas(listseries: Serie[]):number{
    let totalTemporadas: number = 0;
    for (let serie of listseries){
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas/listseries.length;
}
let paragraph: HTMLElement = document.getElementById("promedio")!;
mostrarSeries(series);
paragraph.innerHTML = `Seasons Average: ${promedioTemporadas(series)}`;

