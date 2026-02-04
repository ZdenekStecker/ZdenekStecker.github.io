const tiles = document.querySelectorAll('.project-tile');

tiles.forEach(tile => {
    setInterval(() => {
        const color = `hsl(${Math.random() * 360}, 80%, 70%)`;
        tile.style.boxShadow = `
          0 0 10px ${color},
          0 0 25px ${color}
        `;
    }, 1000);
});