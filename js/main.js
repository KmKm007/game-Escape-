var can1;
var can2;
var ctx1;
var ctx2;
var can0;
var ctx0;
var bkgImg;
var canWidth;
var canHeight;
var volcano;
var ashes;
var mom;
var fish;
var mx;
var my;
var score;
var pause;
var skill;
var mesg;
var level;
var hp;
var timer;
var ctx;
var recorder;
document.body.onload = gameBegin;

function gameBegin(){
	init();
	this.bkgImg.onload = gameLoop;
}
function init(){
	pause = false;
	level = 3;
	mesg = document.getElementById("mesg");
	can0 = document.getElementById("can0");
	can1 = document.getElementById("can1");
	can2 = document.getElementById("can2");
	ctx0 = can0.getContext("2d");
	ctx1 = can1.getContext("2d");
	ctx2 = can2.getContext("2d");

	canHeight = can1.height;
	canWidth = can1.width;
	loadPic();//绘制背景跟海葵
	volcano = new volcanoObj();
	volcano.init();
	ashes = new ashObj();
	ashes.init();
	fish = new fishObj();
	fish.init();
	mx = my = 0;
	score = new scoreobj();
	//score.init();
	skill = new skillobj();
	skill.init();
	//score.draw();
	hp = new hpobj();
	hp.init();
	timer = new TimerObj();
	timer.init();
	ctx = new ctxObj();
	recorder = new recordObj();
	recorder.init();
	can0.addEventListener("mousemove",mouseMoveTo,false);
	document.onkeypress=keyDown;
}

function gameLoop(){
	if(pause == false){
		drawBackground();
		volcano.draw();
		ashes.draw();
		ashes.ashMonitor();
		ctx1.clearRect(0,0,canWidth,canHeight);
		fish.draw();
		timer.updateTime();
		timer.draw();
		checkFruitEaten();
		checkRules();

	}
	if(!ctx.over){
		requestAnimFrame(gameLoop);
	}
}

function mouseMoveTo(e){
	if(e.offsetX || e.layerX){
		e.offsetX == undefined ? mx = e.layerX : mx = e.offsetX;
		e.offsetY == undefined ? my = e.layerY : my = e.offsetY;
	}	
}
function keyDown(e){
	if(e.keyCode == 13){
		if(pause == false){
			pause = true;
		}else{
			pause = false;
		}
	}else if(e.keyCode == 49){
		skill.useSkill(1);
	}else if(e.keyCode == 50){
		skill.useSkill(2);
	}
}

function addMessage(m){
	var p = document.createElement("p");
	p.innerHTML = m;
	mesg.appendChild(p);
}