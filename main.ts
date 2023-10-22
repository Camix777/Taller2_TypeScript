import { Serie } from "./serie.js";

import { series } from "./data.js";


let tablaSeries: HTMLElement = document.getElementById("series")!;

console.log(series);

function mostrarSeries(listseries: Serie[]):void{
    for (let serie of listseries){
        let trSerie: HTMLElement = document.createElement("tr");

        // Add an event listener for the link to handle the click
        let link = document.createElement("a");
        link.href = "#";
        link.textContent = serie.name;
        link.onclick = () => mostrarCarta(serie);

        trSerie.innerHTML = `<th scope="row">${serie.id}</th><td></td>
        <td>${serie.channel}</td><td>${serie.seasons}</td>`;

        // Append the link element to the second <td>
        trSerie.children[1].appendChild(link);

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

function mostrarCarta(serie: Serie):void{
    let columna: HTMLElement = document.getElementById("columna")!;
    let carta: HTMLElement = document.getElementById("div")!;
    carta.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${serie.image}">
    <div class="card-body">
      <h5 class="card-title">${serie.name}</h5><br>
      <p class="card-text">${serie.description}<br><br><a href="${serie.url}">${serie.url}</a></p>
    </div>
  </div>`
    columna.appendChild(carta);
}

