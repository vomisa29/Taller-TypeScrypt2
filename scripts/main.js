import { data } from "./data.js";
var seriesTbody = document.getElementById("series");
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                             <td><a href=\"#\" onclick=\"crearPlantilla('").concat(s.name, "','").concat(s.poster, "','").concat(s.description, "','").concat(s.webpage, "')\">").concat(s.name, "</a></td>\n                             <td>").concat(s.channel, "</td>\n                             <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioSeasons(series) {
    var promedio = 0;
    series.forEach(function (serie) { return promedio += serie.seasons; });
    promedio /= series.length;
    return promedio;
}
renderSeriesInTable(data);
var nodoPromedio = document.getElementById("promedio");
nodoPromedio.innerText = "Seasons Average: " + getPromedioSeasons(data).toString();
