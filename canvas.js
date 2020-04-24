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
let hue = 0;
let isDawn = false;
let direction = true;

function draw(e) {

    if (!isDawn) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [positionX, positionY] = [e.offsetX, e.offsetY];
    hue++;

    if (hue >= 360) {
        hue = 0;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 10) {
        direction = !direction;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDawn = true;
    [positionX, positionY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDawn = false);
canvas.addEventListener('mouseout', () => isDawn = false);