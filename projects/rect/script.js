var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

var isDrawing = false;
var startX;
var startY;

function getRndColor() {
        var r = 255*Math.random()|0,
            g = 255*Math.random()|0,
            b = 255*Math.random()|0;

        return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function handleMouseDown(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    $("#downlog").html("Down: " + mouseX + " / " + mouseY);

    // Put your mousedown stuff here
    if (isDrawing) {
        isDrawing = false;
        ctx.beginPath();
        ctx.rect(startX, startY, mouseX - startX, mouseY - startY);
        ctx.fillStyle = getRndColor();
        ctx.fill();
        canvas.style.cursor = "default";
    } else {
        isDrawing = true;
        startX = mouseX;
        startY = mouseY;
        canvas.style.cursor = "crosshair";
    }

}

$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});

$("#reset").click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
});
