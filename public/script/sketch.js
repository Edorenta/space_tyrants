var win = {
    w : Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    h : Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    r : 230,
    g : 230,
    b : 230,
    a : 100
};

var socket;
var canvas;
var stars = [];
var starship;
var cross;

function setup() {
    canvas =  createCanvas(win.w, win.h);
    canvas.position(0,0);
//    socket = io.connect("http://127.0.0.1:8080/");
    for (var i = 0; i < 50; i++)
        stars[i] = new Star();
    starship = new Starship();
    cross = new Crosshair(color(110,20,110), width / 4, height / 50, 1);
}

function canvas_resize() {
    win.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    win.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    resizeCanvas(win.w, win.h, true);
}

function set_origin() {
    translate(width / 2, height / 3);
}

function draw() {
    canvas_resize();
    if (keyIsPressed) keyPressed();
    set_origin();
    background(0);
    set_background();
    cross.plot_origin();
    set_starship();
}

function keyPressed() {
    get_key_hook(keyCode);
    return (true); // false = prevent default behaviour
}
