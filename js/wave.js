var waveObj = function() {
    this.x = [];
    this.y = [];
    this.r = [];
    this.alive = [];
    this.color = [];
    this.mr = [];
    this.wd = [];
}

waveObj.prototype.num = 20;

waveObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
    };
}

waveObj.prototype.born = function(x, y, mr, wd, color) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.mr[i] = mr;
            this.wd[i] = wd;
            this.color[i] = color;
            return;
        };
    }
}

waveObj.prototype.draw = function() {
    ctx1.save();
    ctx1.lineWidth = this.wd[i];
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";

    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            this.r[i] += deltaTime * 0.03;
            if (this.r[i] > this.mr[i]) {
                this.alive[i] = false;
                continue;
            }
            var alpha = 1 - this.r[i] / this.mr[i];
            ctx1.beginPath();

            ctx1.arc(this.x[i], this.y[i], this.r[i] * 1.2, 0, Math.PI * 2);
            ctx1.closePath();
            ctx1.strokeStyle = this.color[i] + alpha + ")";
            data.feeden = false;
            ctx1.stroke();

        };
    };
    ctx1.restore();
}