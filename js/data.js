var dataObj = function() {
    this.fruitOrangeNum = 0;
    this.multiple = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}

dataObj.prototype.draw = function() {
    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.fillStyle = "white";
    ctx1.font = "26px Verdana";
    ctx1.textAlign = "center";
    ctx1.fillText("Score: " + this.score, w * 0.5, h - 20);
    ctx1.restore();

    // ctx1.fillText("OrangeNum: " + this.fruitOrangeNum, w * 0.5, h - 50);
    // ctx1.fillText("multiple: " + this.multiple, w * 0.5, h - 80);
    if (this.gameOver) {
        this.alpha += deltaTime * 0.0005;
        if (this.alpha > 1) {
            this.alpha = 1;
        }
        ctx1.save();
        ctx1.fillStyle = "white";
        ctx1.textAlign = "center";
        ctx1.shadowBlur = 10;
        ctx1.shadowColor = "white";
        ctx1.font = "50px Verdana";
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("GAME OVER", w * 0.5, h * 0.5);
        ctx1.restore();
    }
}

dataObj.prototype.addScore = function() {
    this.score += this.fruitOrangeNum * 100 * this.multiple;
    this.fruitOrangeNum = 0;
    this.multiple = 1;
}