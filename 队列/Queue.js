/**
 * Created by Administrator on 2016/9/25.
 */
function Queue(){
    var items = [];

    /*向队列尾部添加一个或多个新的项*/
    this.enqueue = function(element){
        items.push(element);
    }

    /*移除队列的第一项，并返回被移除的元素*/
    this.dequeue = function(){
        return items.shift();
    }

    /*返回队列中第一个元素*/
    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }

    this.clear = function(){
        items = [];
    }
}

