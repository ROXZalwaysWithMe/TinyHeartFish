var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var mom;
var baby;
var data;
var wave;
var dust;

var mx, my;

var bgPic = new Image();
var babyTail = [];
var babyBody = [];
var babyEye = [];
var momTail = [];
var momBodyOrange = [];
var momBodyBlue = [];
var momEye = [];
var dustRes = [];

document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
};

function init() {
    can1 = document.getElementById("canvas1"); //fishes,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2"); //background,ane,fruit
    ctx2 = can2.getContext("2d");

    can1.addEventListener("mousemove", onMouseMove, false);

    bgPic.src = "imgs/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;
    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    wave = new waveObj();
    wave.init();
    dust = new dustObj();
    dust.init();
    data = new dataObj();
// ResourceLoad
    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = "imgs/babyTail" + i + ".png";
        momTail[i] = new Image();
        momTail[i].src = "imgs/bigTail" + i + ".png";
        momBodyOrange[i] = new Image();
        momBodyOrange[i].src = "imgs/bigSwim" + i + ".png";
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = "imgs/bigSwimBlue" + i + ".png";
    }
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = "imgs/babyFade" + i + ".png";
    }
    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = "imgs/babyEye" + i + ".png";
        momEye[i] = new Image();
        momEye[i].src = "imgs/bigEye" + i + ".png"
    }
    for (var i = 0; i < 7; i++) {
        dustRes[i] = new Image();
        dustRes[i].src = "imgs/dust" + i + ".png";
    }
};

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) { deltaTime = 40; };
    //ctx2
    ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
    ane.draw();
    fruitMonitor();
    fruit.draw();
    //ctx1
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();
    wave.draw();
    data.draw();
    dust.draw();

};

function onMouseMove(e) {
    if (!data.gameOver) {
        if (e.offSetX || e.layerX) {
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
        };
    };
}