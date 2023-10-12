'use strict';

const getGridSize = () => {
    const MIN_NO_OF_SQ = 16, MAX_NO_OF_SQ = 100;
    let squarePerSides;
    do {
        squarePerSides = (prompt("Squares per side: \nmin-16, max-100", '16'));
        if (squarePerSides === null) break;
    }
    while (isNaN(squarePerSides) || squarePerSides < MIN_NO_OF_SQ || squarePerSides > MAX_NO_OF_SQ);
    const gridSize = Math.pow(squarePerSides, 2);
    return gridSize;
}

const generateGrid = (gridSize) => {
    const existingGrid = document.querySelector('.grid-container');
    if (existingGrid) {
        existingGrid.remove();
    }
    const gridContainer = document.createElement('section');
    gridContainer.className = 'grid-container';
    
    const boxWidth = Math.sqrt(gridSize);
    for(let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        box.setAttribute('style', `width: calc(100% / ${boxWidth}); border: 1px solid lightgrey`) 
        box.addEventListener('mouseover',() => {
            box.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(box);
    }
    document.body.append(gridContainer);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    generateGrid(getGridSize());
});
