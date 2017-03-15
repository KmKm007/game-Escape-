
//技能
var skillobj = function(){
	this.remain = [];
	this.max = [];
}
skillobj.prototype.boomCurrentSpan = document.getElementById('boom-current');
skillobj.prototype.boomMaxSpan = document.getElementById('boom-max');
skillobj.prototype.invincibleCurrentSpan = document.getElementById('invincible-current');
skillobj.prototype.invincibleMaxSpan = document.getElementById('invincible-max');
//初始化技能，设置各个技能的可用次数
skillobj.prototype.init = function(){
	this.remain[0] = this.max[0] = 2;
	this.remain[1] = this.max[1] = 1;
	this.boomCurrentSpan.innerHTML = this.remain[0];
	this.boomMaxSpan.innerHTML = this.max[0];
	this.invincibleCurrentSpan.innerHTML = this.remain[1];
	this.invincibleMaxSpan.innerHTML = this.max[1];
}

//使用技能，判断使用的是哪个技能
skillobj.prototype.useSkill = function(i){
	if(i == 1){
		this.killAll();
	}else if( i == 2){
		this.invincible();
	}
}

//使用全屏轰炸技能，清除所有火山灰，并将可用次数减1
skillobj.prototype.killAll = function(){
	if(this.remain[0] > 0){
		for(var i = 0 ; i < ashes.num; i++){
			ashes.beEaten(i);
		}
		addMessage("全屏轰炸！");
		this.remain[0]--;
		this.boomCurrentSpan.innerHTML = this.remain[0];
	}else{
		addMessage("余额不足");
	}
}

//使用防护罩技能，在fish身上绘制一个闪烁的防护罩，并将可用次数减1
skillobj.prototype.invincible = function(){
	if(this.remain[1] > 0){
		addMessage("无敌");
		fish.hasCover = true;
		this.remain[1]--;
		this.invincibleCurrentSpan.innerHTML = this.remain[1];
	}else{
		addMessage("余额不足");
	}
}