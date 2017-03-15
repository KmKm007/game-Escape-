//判断火山灰是否与fish装上，主要是根据两点的距离公式判断两者的距离，若距离小于一定值，则判断为撞上，如果撞上后生命中为0，则游戏结束。
function checkFruitEaten(){
	for(var i = 0; i < ashes.num;i++){
		if(ashes.alive[i] == false){
			continue;
		}else{
			var distance = calcDistance(fish.x,fish.y,ashes.x[i],ashes.y[i]);
			if(distance < 20){
				ashes.beEaten(i);
				if(!fish.hasCover){
					if(hp.current > 0){
						hp.current--;
						hp.draw();
						if(hp.current <= 0 ){
							ctx.over = true;
							ctx.drawOver();
							showRecord();
						}
					}
				}
				return;
			}
		}
	}
}

//两点间的距离公式
function calcDistance(x1,y1,x2,y2){
	var deltaX = x1 - x2;
	var deltaY = y1 - y2;
	var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	return distance;
}

//判断是否越过警告线，如果越过，则时间暂停
function checkRules(){
	var x = fish.x;
	var y = fish.y;
	if(y >= 480){
		if(!timer.stop){
			timer.stop = true;
		}
	}else{
		if(timer.stop){
			timer.stop = false;
		}
	}
}

//显示游戏结果
function showRecord(){
	var minute = timer.minute;
	var second = timer.second;
	var point = minute * 60 + second;
	var time = new Date().getTime();
	var lastTopPoint = recorder.getTopPoint();
	var isBest = false;
	if(point > lastTopPoint){
		isBest = true;
	}
	var record = {
		point : point,
		createTime : time,
		hp : hp.max
	}
	recorder.addRecord(record);
	ctx.drawRecord(minute,second,isBest);
}