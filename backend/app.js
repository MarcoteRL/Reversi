"use strict";

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function tablero() {
    let tablero = [];
    for (let y = 0; y < 8; y++) {
        tablero.push([]);
        for (let x = 0; x < 8; x++) {
            tablero[y].push(null);
        }
    }
    return tablero;
}

const reversi = tablero();

app.get('/tablero', (req, res) => {
    res.send(reversi);
});

app.post('/colocaficha', (req, res) => {
    console.log(req.body);
    ganador();
    colocarPieza(req.body.x, req.body.y);
})

let contador = 0;

async function colocarPieza(x, y) {
    let jugador = "";
    if (contador % 2 == 0) {
        jugador = "X";
    } else {
        jugador = "O"
    }
    let vertical = y;
    let horizontal = x;
    reversi[horizontal][vertical] = jugador;
    contador++;
    console.log({ vertical }, { horizontal });
    await ganador();
    await comer(horizontal, vertical, jugador);
}

async function comer(horizontal, vertical, jugador) {
    for (let i = 0; i < 8; i++) {
        if (vertical - i > 0) {
            console.log("1 funcion", i);
            if (reversi[horizontal][vertical - i] != jugador && reversi[horizontal][vertical - 1] != null && reversi[horizontal][vertical - i] != undefined) {
                if (reversi[horizontal][vertical - (i + 1)] == jugador && reversi[horizontal][vertical - 1] != jugador) {
                    reversi[horizontal][vertical - i] = jugador;
                    if (i == 2 && reversi[horizontal][vertical - 1] != null) {
                        reversi[horizontal][vertical - 1] = jugador;
                    }
                    if (i == 3 && reversi[horizontal][vertical - 1] != null && reversi[horizontal][vertical - 2] != null) {
                        reversi[horizontal][vertical - 1] = jugador;
                        reversi[horizontal][vertical - 2] = jugador;
                    }
                    if (i == 4 && reversi[horizontal][vertical - 1] != null && reversi[horizontal][vertical - 2] != null && reversi[horizontal][vertical - 3] != null) {
                        reversi[horizontal][vertical - 1] = jugador;
                        reversi[horizontal][vertical - 2] = jugador;
                        reversi[horizontal][vertical - 3] = jugador;
                    }
                    if (i == 5 && reversi[horizontal][vertical - 1] != null && reversi[horizontal][vertical - 2] != null && reversi[horizontal][vertical - 3] != null && reversi[horizontal][vertical - 4] != null) {
                        reversi[horizontal][vertical - 1] = jugador;
                        reversi[horizontal][vertical - 2] = jugador;
                        reversi[horizontal][vertical - 3] = jugador;
                        reversi[horizontal][vertical - 4] = jugador;
                    }
                    if (i == 6 && reversi[horizontal][vertical - 1] != null && reversi[horizontal][vertical - 2] != null && reversi[horizontal][vertical - 3] != null && reversi[horizontal][vertical - 4] != null && reversi[horizontal][vertical - 5] != null) {
                        reversi[horizontal][vertical - 1] = jugador;
                        reversi[horizontal][vertical - 2] = jugador;
                        reversi[horizontal][vertical - 3] = jugador;
                        reversi[horizontal][vertical - 4] = jugador;
                        reversi[horizontal][vertical - 5] = jugador;
                    }
                }
            }
        }
        if (vertical + i < 8) {
            console.log("2 funcion", i)
            if (reversi[horizontal][vertical + i] != jugador && reversi[horizontal][vertical + 1] != null && reversi[horizontal][vertical + i] != undefined) {
                if (reversi[horizontal][vertical + (i + 1)] == jugador && reversi[horizontal][vertical + 1] != jugador) {
                    reversi[horizontal][vertical + i] = jugador;
                    if (i == 2 && reversi[horizontal][vertical + i - 1] != null) {
                        reversi[horizontal][vertical + i - 1] = jugador;
                    }
                    if (i == 3 && reversi[horizontal][vertical + i - 1] != null && reversi[horizontal][vertical + i - 2] != null) {
                        reversi[horizontal][vertical + i - 1] = jugador;
                        reversi[horizontal][vertical + i - 2] = jugador;
                    }
                    if (i == 4 && reversi[horizontal][vertical + i - 1] != null && reversi[horizontal][vertical + i - 2] != null && reversi[horizontal][vertical + i - 3] != null) {
                        reversi[horizontal][vertical + i - 1] = jugador;
                        reversi[horizontal][vertical + i - 2] = jugador;
                        reversi[horizontal][vertical + i - 3] = jugador;
                    }
                    if (i == 5 && reversi[horizontal][vertical + i - 1] != null && reversi[horizontal][vertical + i - 2] != null && reversi[horizontal][vertical + i - 3] != null && reversi[horizontal][vertical + i - 4] != null) {
                        reversi[horizontal][vertical + i - 1] = jugador;
                        reversi[horizontal][vertical + i - 2] = jugador;
                        reversi[horizontal][vertical + i - 3] = jugador;
                        reversi[horizontal][vertical + i - 4] = jugador;
                    }
                    if (i == 6 && reversi[horizontal][vertical + i - 1] != null && reversi[horizontal][vertical + i - 2] != null && reversi[horizontal][vertical + i - 3] != null && reversi[horizontal][vertical + i - 4] != null && reversi[horizontal][vertical + i - 5] != null) {
                        reversi[horizontal][vertical + i - 1] = jugador;
                        reversi[horizontal][vertical + i - 2] = jugador;
                        reversi[horizontal][vertical + i - 3] = jugador;
                        reversi[horizontal][vertical + i - 4] = jugador;
                        reversi[horizontal][vertical + i - 5] = jugador;
                    }
                }
            }
        }
        if (horizontal - i > 0) {
            console.log("3 funcion", i);
            if (reversi[horizontal - i][vertical] != jugador && reversi[horizontal - 1][vertical] != null && reversi[horizontal - i][vertical] != undefined) {
                if (reversi[horizontal - (i + 1)][vertical] == jugador && reversi[horizontal - 1][vertical] != jugador) {
                    reversi[horizontal - i][vertical] = jugador;
                    if (i == 2 && reversi[horizontal - 1][vertical] != null) {
                        reversi[horizontal - 1][vertical] = jugador;
                    }
                    if (i == 3 && reversi[horizontal - 1][vertical] != null && reversi[horizontal - 2][vertical] != null) {
                        reversi[horizontal - 1][vertical] = jugador;
                        reversi[horizontal - 2][vertical] = jugador;
                    }
                    if (i == 4 && reversi[horizontal - 1][vertical] != null && reversi[horizontal - 2][vertical] != null && reversi[horizontal - 3][vertical] != null) {
                        reversi[horizontal - 1][vertical] = jugador;
                        reversi[horizontal - 2][vertical] = jugador;
                        reversi[horizontal - 3][vertical] = jugador;
                    }
                    if (i == 5 && reversi[horizontal - 1][vertical] != null && reversi[horizontal - 2][vertical] != null && reversi[horizontal - 3][vertical] != null && reversi[horizontal - 4][vertical] != null) {
                        reversi[horizontal - 1][vertical] = jugador;
                        reversi[horizontal - 2][vertical] = jugador;
                        reversi[horizontal - 3][vertical] = jugador;
                        reversi[horizontal - 4][vertical] = jugador;
                    }
                    if (i == 6 && reversi[horizontal - 1][vertical] != null && reversi[horizontal - 2][vertical] != null && reversi[horizontal - 3][vertical] != null && reversi[horizontal - 4][vertical] != null && reversi[horizontal - 5][vertical] != null) {
                        reversi[horizontal - 1][vertical] = jugador;
                        reversi[horizontal - 2][vertical] = jugador;
                        reversi[horizontal - 3][vertical] = jugador;
                        reversi[horizontal - 4][vertical] = jugador;
                        reversi[horizontal - 5][vertical] = jugador;
                    }
                }
            }
        }
        if (horizontal + i < 8 && horizontal + i + 1 < 8) {
            console.log("4 funcion", i);
            if (reversi[horizontal + i][vertical] != jugador && reversi[horizontal + 1][vertical] != null && reversi[horizontal + i][vertical] != undefined) {
                if (reversi[horizontal + (i + 1)][vertical] == jugador && reversi[horizontal + 1][vertical] != jugador) {
                    reversi[horizontal + i][vertical] = jugador;
                    if (i == 2 && reversi[horizontal + 1][vertical] != null) {
                        reversi[horizontal + 1][vertical] = jugador;
                    }
                    if (i == 3 && reversi[horizontal + 1][vertical] != null && reversi[horizontal + 2][vertical] != null) {
                        reversi[horizontal + 1][vertical] = jugador;
                        reversi[horizontal + 2][vertical] = jugador;
                    }
                    if (i == 4 && reversi[horizontal + 1][vertical] != null && reversi[horizontal + 2][vertical] != null && reversi[horizontal + 3][vertical] != null) {
                        reversi[horizontal + 1][vertical] = jugador;
                        reversi[horizontal + 2][vertical] = jugador;
                        reversi[horizontal + 3][vertical] = jugador;
                    }
                    if (i == 5 && reversi[horizontal + 1][vertical] != null && reversi[horizontal + 2][vertical] != null && reversi[horizontal + 3][vertical] != null && reversi[horizontal + 4][vertical] != null) {
                        reversi[horizontal + 1][vertical] = jugador;
                        reversi[horizontal + 2][vertical] = jugador;
                        reversi[horizontal + 3][vertical] = jugador;
                        reversi[horizontal + 4][vertical] = jugador;
                    }
                    if (i == 6 && reversi[horizontal + 1][vertical] != null && reversi[horizontal + 2][vertical] != null && reversi[horizontal + 3][vertical] != null && reversi[horizontal + 4][vertical] != null && reversi[horizontal + 5][vertical] != null) {
                        reversi[horizontal + 1][vertical] = jugador;
                        reversi[horizontal + 2][vertical] = jugador;
                        reversi[horizontal + 3][vertical] = jugador;
                        reversi[horizontal + 4][vertical] = jugador;
                        reversi[horizontal + 5][vertical] = jugador;
                    }
                }
            }
        }
    }
}

async function ganador() {
    let final = true;
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (reversi[y][x] == null) {
                final = false;
            }
        }
    }
    if (final) {
        let jugadorX = 0;
        let jugadorY = 0;
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (reversi[y][x] == "X") {
                    jugadorX++;
                } else {
                    jugadorY++;
                }
            }
        }
        if (jugadorX > jugadorY) {
            console.log("El ganador es el Jugador X!!! ",jugadorX, "VS", jugadorY)
        } else {
            console.log("El ganador es el Jugador O!!! ", jugadorY, "VS", jugadorX)
        }
    }
}

app.listen(3000, () => {
    console.log("Servidor levantado...")
});