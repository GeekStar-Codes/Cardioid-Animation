/* Created by GeekStar Codes */

var points = 200;
var radius;
var factor = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = width / 2 - 15;
}

function findPoints(num) {
    var angle = map(num, 0, points, 0, PI * 2);
    var x = radius * cos(angle - PI);
    var y = radius * sin(angle - PI);
    var vec = createVector(x, y);
    return vec;
}

function draw() {
    background(0);
    factor += 0.005;
    translate(width / 2, height / 2);
    stroke(23, 255, 50);
    strokeWeight(1);
    noFill();
    circle(0, 0, radius * 2);
    for (var i = 0; i < points; i++) {
        var a = findPoints(i);
        var b = findPoints(i * factor);
        line(a.x, a.y, b.x, b.y);
    }
}

/* Created by GeekStar Codes */

/* 
Subscribe to my YouTube channel for more cool stuffs.
Link: https://t2m.io/pXUSmgPx 
*/
