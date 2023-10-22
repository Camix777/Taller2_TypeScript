import { series } from "./data.js";
var tablaSeries = document.getElementById("series");
console.log(series);
function mostrarSeries(listseries) {
    var _loop_1 = function (serie) {
        var trSerie = document.createElement("tr");
        // Add an event listener for the link to handle the click
        var link = document.createElement("a");
        link.href = "#";
        link.textContent = serie.name;
        link.onclick = function () { return mostrarCarta(serie); };
        trSerie.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th><td></td>\n        <td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
        // Append the link element to the second <td>
        trSerie.children[1].appendChild(link);
        tablaSeries.appendChild(trSerie);
    };
    for (var _i = 0, listseries_1 = listseries; _i < listseries_1.length; _i++) {
        var serie = listseries_1[_i];
        _loop_1(serie);
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
function mostrarCarta(serie) {
    var columna = document.getElementById("columna");
    var carta = document.getElementById("div");
    carta.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"".concat(serie.image, "\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(serie.name, "</h5><br>\n      <p class=\"card-text\">").concat(serie.description, "<br><br><a href=\"").concat(serie.url, "\">").concat(serie.url, "</a></p>\n    </div>\n  </div>");
    columna.appendChild(carta);
}
