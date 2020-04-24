let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#444';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 10;

let positionX = 0;
let positionY = 0;
let isDawn = false;

function draw(e) {

    if (!isDawn) return;

    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [positionX, positionY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDawn = true;
    [positionX, positionY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDawn = false);
canvas.addEventListener('mouseout', () => isDawn = false);