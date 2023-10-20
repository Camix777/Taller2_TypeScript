var tablaSeries = document.getElementById("series");
function mostrarSeries(series) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trSerie = document.createElement("tr");
        trSerie.innerHTML = "<td>".concat(serie.id, "</td><td><a href=").concat(serie.url, ">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td><td colspan=2><img src=").concat(serie.image, " height=50></td>");
        tbodySeries.appendChild(trSerie);
    }
    tablaSeries.appendChild(tbodySeries);
}
export {};
