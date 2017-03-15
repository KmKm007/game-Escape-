var fishObj = function(){
	this.x;
	this.y;
	this.speed;
	this.eye;
	this.body;
	this.tail;
	this.angle;
	this.hasCover;
}

//初始化
fishObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.hasCover = false;
	this.fish = new Image();
	this.fish.src = "./src/fish.png";
}

//绘制鱼
fishObj.prototype.draw = function(){
	this.x = lerpDistance(mx,this.x,0.992);
	this.y = lerpDistance(my,this.y,0.992);
	var beta = getDeltaAngle(mx,my,this.x,this.y);
	this.angle = lerpAngle(beta,this.angle,0.92);
	ctx1.save();
	ctx1.translate(this.x,this.y );
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.fish,0 - this.fish.width * 0.5,0 - this.fish.height * 0.5,this.fish.width,this.fish.height);
	if(this.hasCover){
		this.getCover();
		setTimeout(function(){
			fish.hasCover = false;
		},5000);
	}
	ctx1.restore();
	
}

//绘制防护罩
fishObj.prototype.getCover = function(){
	var type = Math.random();
	ctx1.save();
	if(type > 0.5){
		ctx1.strokeStyle = "#FFE4B5";
	}else{
		ctx1.strokeStyle = "red";
	}
	ctx1.lineWidth = "6";
	ctx1.beginPath();
	ctx1.arc( -5, 3,60,Math.PI * 2,false);
	ctx1.stroke();
	ctx1.restore();
}

//计算偏移角度
function getDeltaAngle(x1,y1,x2,y2){
	var deltaX = x2 - x1;
	var deltaY = y2 - y1;
	var deltaAngle = Math.atan2(deltaY,deltaX);
	return deltaAngle;
}


