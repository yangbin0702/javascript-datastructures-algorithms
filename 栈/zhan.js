/**
 * Created by Administrator on 2016/9/22.
 */
function Stack(){
    var items=[];//保存栈里的元素

/*添加元素到栈顶 即栈的末尾*/
    this.push = function(element){
        items.push(element);
    }
    /*删除栈中的元素，并返回删除的元素*/
    this.pop = function(element){
        return items.pop();
    }
    /*想知道栈里最后添加的元素*/
    this.peek = function(){
        return items[items.length-1];
    }

    /*判断栈是否为空*/
    this.isEmpty = function(){
        return items.length == 0;
    }

    /*栈的长度*/
    this.size = function(){
        return items.length;
    }

    /*清空栈*/
    this.clear = function(){
        items = [];
    }

    /*输出栈里的元素到控制台*/
    this.print = function(){
        console.log(items.toString());
    }
}

/*var stack  = new Stack();
console.log('----------------');
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log('----------------');
console.log(stack.peek());

stack.push(11);
console.log('----------------');
console.log(stack.size());
console.log('----------------');
console.log(stack.isEmpty());

stack.push(15);
stack.pop();
stack.pop();
console.log('----------------');
console.log(stack.size());
console.log('----------------');
stack.print();*/


