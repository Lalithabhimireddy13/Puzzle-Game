const canvas = document.getElementById('puzzleCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'https://via.placeholder.com/600'; 
img.onload = () => {
    initializePuzzle();
};

const gridSize = 3;
const pieceSize = canvas.width / gridSize;
let pieces = [];
let emptyPiece = { x: gridSize - 1, y: gridSize - 1 };


function initializePuzzle() {
    pieces = [];
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (x === gridSize - 1 && y === gridSize - 1) continue; 
            pieces.push({ x, y });
        }
    }
    drawPuzzle();
}

function drawPuzzle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(piece => {
        ctx.drawImage(
            img,
            piece.x * pieceSize, piece.y * pieceSize, pieceSize, pieceSize,
            piece.x * pieceSize, piece.y * pieceSize, pieceSize, pieceSize
        );
    });

    
    ctx.clearRect(emptyPiece.x * pieceSize, emptyPiece.y * pieceSize, pieceSize, pieceSize);
}


canvas.addEventListener('click', (e) => {
    const x = Math.floor(e.offsetX / pieceSize);
    const y = Math.floor(e.offsetY / pieceSize);

    if (isAdjacent(x, y, emptyPiece.x, emptyPiece.y)) {
        swapPieces(x, y);
        drawPuzzle();
    }
});


function isAdjacent(x1, y1, x2, y2) {
    return (Math.abs(x1 - x2) === 1 && y1 === y2) || (Math.abs(y1 - y2) === 1 && x1 === x2);
}


function swapPieces(x, y) {
    const index = pieces.findIndex(piece => piece.x === x && piece.y === y);
    if (index !== -1) {
        pieces.splice(index, 1);
        pieces.push(emptyPiece);
        emptyPiece = { x, y };
    }
}
