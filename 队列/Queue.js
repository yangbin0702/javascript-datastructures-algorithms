/**
 * Created by Administrator on 2016/9/25.
 */
function Queue(){
    var items = [];

    /*�����β�����һ�������µ���*/
    this.enqueue = function(element){
        items.push(element);
    }

    /*�Ƴ����еĵ�һ������ر��Ƴ���Ԫ��*/
    this.dequeue = function(){
        return items.shift();
    }

    /*���ض����е�һ��Ԫ��*/
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

