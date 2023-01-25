"use strict";

$(document).ready(() => {
    console.log("Web cargada");
    getTablero();
});

let reversi = "";

function getTablero() {
    $.get("http://localhost:3000/tablero", (data, status) => {
        impresora(data);
        reversi = data;
    })
}

async function verTab(x, y) {
    $.post("http://127.0.0.1:3000/colocaficha", { x: x, y: y }, (data) => {
    })
    await impresora(reversi);
}

async function impresora(tablero) {
    let tabla = "<table>";
    for (let x = 0; x < tablero.length; x++) {
        tabla += "<tr>";
        for (let y = 0; y < tablero.length; y++) {
            if (tablero[x][y] == null) {
                tabla += "<td><button onclick='verTab(" + x + "," + y + ");location.reload()'></button></td>";

            } else {
                tabla += '<td>' + tablero[x][y] + '</td>';
            }
        }
        tabla += "</tr>"
    }
    $("#tablero").html(tabla);
}