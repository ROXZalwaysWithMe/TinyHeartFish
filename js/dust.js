var dustObj = function(){
	this.x = [];
	this.y = [];
	this.amp = [];
	this.Theta;
	this.style = [];
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++){
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = 20 + Math.random() * 15;
		this.style[i] = Math.floor(Math.random() * 7);
	}
	this.Theta = 0;
}

dustObj.prototype.draw = function(){
	this.Theta += deltaTime * 0.0008;
	var l = Math.sin(this.Theta);//Sin function
	for (var i = 0; i < this.num; i++){
		var NO = this.style[i];
		ctx1.drawImage(dustRes[NO], this.x[i] + this.amp[i] * l, this.y[i]);
	}
}