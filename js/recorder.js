/**
 * Created by KmKm on 2016-06-08.
 */

 //历史记录
var recordObj = function(){
    this.recordArray;
}

recordObj.prototype = {
    //初始化，获取浏览器缓存中的历史记录字符串，并将其转化为对象
    init:function(){
        var recordString = localStorage.getItem("record");
        this.recordArray = JSON.parse(recordString);
    },
    //获取历史记录中的BEST数据，具体做法为遍历数组
    getTopPoint : function(){
        var recordArray = this.recordArray;
        if(!recordArray){
            return 0;
        }else{
            var length = recordArray.length;
            if(length <= 0){
                return 0;
            }else{
                var maxPoint = 0;
                var tempRecord;
                for(var i = 0;i < length;i++){
                    tempRecord = recordArray[i];
                    if(hp.max == tempRecord.hp){
                        if(tempRecord.point > maxPoint){
                            maxPoint = tempRecord.point;
                        }
                    }
                }
                return maxPoint;
            }

        }
    },
    //增加一条历史记录，做法为添加进数组中，再将数组转化为字符串存进浏览器缓存中。
    addRecord : function(record){
        if(this.recordArray){
            this.recordArray.push(record);
        }else{
            this.recordArray = new Array();
        }
        var recordString = JSON.stringify(this.recordArray);
        localStorage.setItem('record',recordString);
    }

}