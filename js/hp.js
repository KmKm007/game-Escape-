//HP
var hpobj = function(){
	this.max;
	this.current;
}
hpobj.prototype = {
	//初始化HP，将当前值设置为最大值，并绘制在画布中
	init : function(){
		this.max = 10;
		this.current = this.max;
		this.draw();
	},
	draw : function(){
		this.currentSpan.innerHTML = this.current;
		this.maxSpan.innerHTML = this.max;
	},
	currentSpan : document.getElementById('HP-current'),
	maxSpan : document.getElementById('HP-max')
}

