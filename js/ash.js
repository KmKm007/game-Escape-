//火山灰
var ashObj = function(){
	this.x = []; //各个火山灰的X轴坐标，以数组进行存储
	this.y = []; //各个火山灰的y轴坐标，以数组进行存储
	this.alive = []; //各个火山的存活状态，以数组进行存储
	this.speed = []; //各个火山灰的速度值，以数组进行存储
	this.place = []; //各个火山灰在火山的位置，以数组进行存储
	this.moveAngle = []; //各个火山灰的发射角度，以数组进行存储
	this.m = [];  //各个火山灰在y轴上的截距，以数组进行存储
}
ashObj.prototype.num = 30;//火山灰的数量
ashObj.prototype.width = 8; //火山灰的半径

//初始化，包括设置存活状态
ashObj.prototype.init = function(){
	for(var i = 0 ; i < this.num; i++){
		this.alive[i] = false;
		// this.speed[i] = Math.random() * 0.7 + 0.2;// 初始化速度？还是出生的时候定义？
	}
}

//绘制火山灰，先判断各个火山灰的存活状态，如存活则根据【直线公式】重新绘制
ashObj.prototype.draw = function(){
	for(var i = 0 ; i < this.num ; i++){
		if(this.alive[i]){
			this.y[i] = this.y[i] - this.speed[i];
			this.x[i] = (this.y[i] - this.m[i])/this.moveAngle[i];
			ctx2.save();
			ctx2.beginPath();
			//ctx2.drawImage(this.orangePic,this.x[i],this.y[i],this.width,this.width);
			var grad = ctx2.createRadialGradient(this.x[i],this.y[i],this.width/8,this.x[i],this.y[i],this.width);
			grad.addColorStop(0,'white');
			grad.addColorStop(0.5,'orange');
			grad.addColorStop(1,'red');
			ctx2.fillStyle = grad;
			ctx2.arc(this.x[i],this.y[i],this.width,2 * Math.PI,false);
			ctx2.fill();
			ctx2.closePath();
			ctx2.restore();
		}
	}
}

//监控火山灰的数量，如果少于15个，则重新产生一个火山灰
ashObj.prototype.ashMonitor = function(){
	var count = 0;
	for(var i = 0 ; i < this.num ; i++){
		if(this.y[i] <= 0 || this.x[i] <= 0){
			volcano.hasFruit[this.place[i]] = false;
			this.place[i] = 0;
			this.alive[i] = false;
		}
		if(this.alive[i]){
			count++;
		}
	}
	if(count < 15){
		this.send();
	}
}

//初始化一个火山灰，速度值随机，角度则根据两点直线公式产生
ashObj.prototype.born = function(i){
	while(true){
			var random = Math.floor(Math.random() * 50);
			if(volcano.hasFruit[random] == false){
				this.speed[i] = Math.random() * 0.7 + 0.2;
				this.speed[i] = level * this.speed[i];
				this.x[i] = volcano.x[random] - this.width * 0.5;
				this.y[i] = volcano.y[random] - this.width * 0.5;
				this.moveAngle[i] = this.randomAngle(this.x[i],this.y[i]) ; // y = nx + m   n = 0则 m = 火山口的横坐标 
				this.m[i] = this.y[i] - this.moveAngle[i] * this.x[i];
				volcano.hasFruit[random] = true;
				this.place[i] = random;
				this.alive[i] = true;
				break;
			}
		}
}

//产生火山灰
ashObj.prototype.send = function(){
	for(var i = 0 ; i < this.num ; i++){
		if(this.alive[i] == false){
			this.born(i);
			return;
		}
	}
}

//当火山灰与fish撞上后，则将该火山灰的存活状态设置为false，并清空其火山的位置
ashObj.prototype.beEaten = function(i){
	this.alive[i] = false;
	volcano.hasFruit[this.place[i]] = false;
	this.place[i] = 0 ;
}

//功能：随机出一个斜率，斜率在一定范围内
//参数：x,y
//返回值：斜率值
//备注：这个是按照斜率范围
// ashObj.prototype.randomAngle = function(x,y){
// 	var realRange;
// 	var range1 = (y)/(x - 800);
// 	var range2 = y/x;
// 	var temp = Math.random();
// 	if(temp > 0.5){
// 		realRange =  range2;
// 	}else{
// 		realRange =  range1;
// }
// 	return realRange;
// }

//功能：随机出一个斜率，斜率在一定范围内
//参数：x,y
//返回值：斜率值
//备注：随机出一个重点，确定斜率
// ashObj.prototype.randomAngle = function(x,y){
// 	var random = Math.random() * 800;
// 	var realAngel = y / (x - random);
// 	return realAngel;
// }

ashObj.prototype.randomAngle = function(x,y){
	var random = fish.x;
	var realAngel = (y -fish.y)/ (x - random);
	return realAngel;
}

