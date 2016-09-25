/**
 * Created by Administrator on 2016/9/25.
 */
/*元素的添加和移除时基于优先级的*/
function PriorityQueue(){
    var items = [];

    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element,priority);

        if(this.isEmpty()){
            items.push(queueElement);
        }
        else{
            var added = false;
            for(var i = 0; i<items.length;i++){
                if(queueElement.priority < items[i].priority){
                    items.splice(i,0,queueElement);//添加元素
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };

    /*返回队列中第一个元素*/
    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        for (var i=0; i<items.length; i++){
            console.log(items[i].element +'-'+ items[i].priority);
        }
    };

    this.clear = function(){
        items = [];
    };

    this.dequeue = function(){
        return items.shift();
    };
}