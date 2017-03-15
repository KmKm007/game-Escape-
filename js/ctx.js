/**
 * Created by Administrator on 2016-06-08.
 */
 //画布
var ctxObj = function(){
    this.over = false;
}

ctxObj.prototype = {
    //清空画布的内容
    clearCtx : function(ctx){
        ctx.clearRect(0, 0,canWidth,canHeight);
    },
    //绘制GAMEOVER的画面
    drawOver : function(){
        this.clearCtx(ctx0);
        this.clearCtx(ctx1);
        this.clearCtx(ctx2);
        ctx0.fillStyle = "#000";
        ctx0.fillRect(0,0,canWidth,canHeight);
        ctx0.fillStyle = "white";
        ctx0.fillText("Game Over", canWidth * 0.5 - 130, canHeight * 0.5 - 50);

    },
    //绘制历史记录的画面
    drawRecord : function(minute,second,isBest){
        var message = "持续时间："+ minute +"分"+ second + "秒";
        if(isBest){
            message += "[新]"
        }
        ctx0.fillText(message, canWidth * 0.5 - 240, canHeight * 0.5 + 50);

    }
}