/*
 * Created by KmKm on 2016/5/30.
 */

 //时间
var TimerObj = function(){
    this.second;
    this.minute;
    this.lastTime;
    this.deltaTime;
    this.stop;
}

TimerObj.prototype = {
    //初始化，将分、秒设置为0，暂停状态为false，并绘制一次时间
    init : function(){
        this.second = 0;
        this.minute = 0;
        this.deltaTime = 0.0;
        this.stop = false;
        this.lastTime = new Date().getTime();
        this.draw();
        this.drawLine();
    },
    //更新时间，先判断暂停状态，若为真则更新lastTime，若为否则更新时间
    updateTime : function(){
        if(!this.stop){
            var now,pastSeconds,deltaTime;
            now = new Date().getTime();// 获得当前时间
            deltaTime=  now - this.lastTime;
            if(deltaTime >= 1000){
                pastSeconds = Math.floor(deltaTime/1000);
                this.second = this.second + pastSeconds;
                if(this.second >= 60){
                    this.minute++;
                    this.second = 0;
                }
                this.deltaTime = this.deltaTime - pastSeconds * 1000;
                this.lastTime = now;
                //console.log("minute:"+ this.minute + "second:"+this.second);
                //this.draw();
            }else{ //相隔时间不够1秒，则不更新
            }
        }else{
            var nowTime = new Date().getTime();
            this.lastTime = nowTime;
            return;
        }
    },
    //绘制时间，每次绘制之前都要擦除上次的时间
    draw : function() {
        ctx0.font = "bolder 50px Courier New";
        ctx0.fillStyle = "white";
        ctx0.clearRect(canWidth * 0.5 - 110, 0, 500, 50);
        ctx0.fillText(this.minute + ':' + this.second, canWidth * 0.5 - 60, 50);
    },
    //绘制警告线
    drawLine : function(){
        ctx0.save();
        ctx0.moveTo(0,450);
        ctx0.lineTo(canWidth,450);
        ctx0.strokeStyle = "#AA0000";
        ctx0.stroke();
        ctx0.restore();
    }
}
