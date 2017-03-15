//火山体
var volcanoObj = function(){
	this.x = [];
	this.y = [];
	this.len = [];
	this.hasFruit = [];
}

//火山体的数量
volcanoObj.prototype.num = 50;//15个产生火山灰的位置

//初始化或山体
volcanoObj.prototype.init = function(){
	for(var i = 0 ; i < this.num ; i++){
		this.x[i] = i * 15.8 + Math.random() * 20;
		this.len[i] = 100 + Math.random() * 50;
		this.y[i] = canHeight - this.len[i];
		this.hasFruit[i] = false;
	}
}
volcanoObj.prototype.draw = function(){
	//ctx2.save();
	//for(var i = 0 ; i <this.num; i++){
	//	ctx2.beginPath();
	//	ctx2.moveTo(this.x[i],canHeight);
	//	ctx2.lineTo(this.x[i],this.y[i]);
	//	ctx2.lineWidth = 16;
	//	ctx2.lineCap = "round";
	//	ctx2.strokeStyle = "#3b154e";
	//	ctx2.stroke();
	//}
	//ctx2.restore();
}
