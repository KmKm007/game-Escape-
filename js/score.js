//分数
var scoreobj = function(){
	this.point;
}
scoreobj.prototype.title = "Score ";
scoreobj.prototype.init = function(){
	this.point = 0;
}
scoreobj.prototype.draw = function(){
	ctx0.font = "bolder 50px Courier New";
    ctx0.fillStyle = "white";
    ctx0.clearRect(canWidth * 0.5 - 110, 0,500,50);
    ctx0.fillText(this.title + this.point, canWidth * 0.5 - 110, 50);

}