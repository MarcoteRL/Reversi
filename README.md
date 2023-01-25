# REVERSI

Este es un proyecto realizado en el primer año de DAW y consta de dos partes, frontend y backend.

## Cómo se juega

El movimiento consiste en colocar una ficha de forma que flanquee una o varias fichas del color contrario y voltear esas fichas para que pasen a mostrar el propio color. Se voltean todas las fichas que se han flanqueado en ese turno al colocar la ficha del color contrario.

## Backend

En la parte de backend crearemos el tablero y levantaremos un servidor en Express para enviar los datos al frontend.
El tablero consiste en un array bidimensional:

```js
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
```

## Resultado final

<img src="https://i.imgur.com/tv6b3tV.png" alt="reversi">