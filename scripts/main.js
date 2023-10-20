import { series } from "./data.js";
var tablaSeries = document.getElementById("series");
console.log(series);
function mostrarSeries(listseries) {
    for (var _i = 0, listseries_1 = listseries; _i < listseries_1.length; _i++) {
        var serie = listseries_1[_i];
        var trSerie = document.createElement("tr");
        trSerie.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th><td><a href=").concat(serie.url, ">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
        tablaSeries.appendChild(trSerie);
    }
}
function promedioTemporadas(listseries) {
    var totalTemporadas = 0;
    for (var _i = 0, listseries_2 = listseries; _i < listseries_2.length; _i++) {
        var serie = listseries_2[_i];
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / listseries.length;
}
var paragraph = document.getElementById("promedio");
mostrarSeries(series);
paragraph.innerHTML = "Seasons Average: ".concat(promedioTemporadas(series));
