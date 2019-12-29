document.onload = function() {
    var canvas = document.getElementById('myCanvas')[0];
    var context = canvas.getContext('2d');
}

var size = 100;
var height = 86.6;

function drawTriangle(posX,posY) {
    for (row=0; row<3; row++) {
        for (col=0; col <= row; col++) {
            var x = posX - (size*col) + (row*size/2);
            var y = posY + (height*row);

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + size / 2, y + height);
            context.lineTo(x - size /2, y + height);
            context.closePath();
            if (row === 0 ) {
                context.strokeStyle = 'rgb(227,98,102)';
                context.stroke();
                context.fillStyle = 'rgb(227,98,102)';
                context.fill();
            } else if (row  === 1) {
                context.strokeStyle = 'rgb(38,172,73)';
                context.stroke();
                context.fillStyle = 'rgb(38,172,73)';
                context.fill();
            } else {
                context.strokeStyle = 'rgb(34,128,128)';
                context.stroke();
                context.fillStyle = 'rgb(34,128,128)';
                context.fill();
            }
        }
    }
}


drawTriangle(225,33);
