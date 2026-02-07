const tiles = document.querySelectorAll('.project-tile');
const tilesArray = Array.from(tiles);

let index = 0;
let index2 = 0;

const indexpoint = Math.floor(tilesArray.length / 2);

let hue = Math.random() * 360;
let hue2 = Math.random() * 360;

let wave2Started = false;

function colorwawe() {
    if (index === 0) {
        hue = (hue + 40) % 360;
    }

    const color = `hsl(${hue}, 80%, 70%)`;

    tilesArray[index].style.boxShadow = `
        0 0 10px ${color},
        0 0 30px ${color}
    `;

    index = (index + 1) % tilesArray.length;

    // start second wave ONCE
    if (index === indexpoint && !wave2Started) {
        wave2Started = true;
        setInterval(colorwawe2, 200);
    }
}

function colorwawe2() {
    if (index2 === 0) {
        hue2 = (hue2 + 40) % 360;
    }

    const color2 = `hsl(${hue2}, 80%, 70%)`;

    tilesArray[index2].style.boxShadow = `
        0 0 10px ${color2},
        0 0 25px ${color2}
    `;

    index2 = (index2 + 1) % tilesArray.length;
}

setInterval(colorwawe, 200);