/**
 * Created by Administrator on 2016/9/22.
 */
function Stack(){
    var items=[];//����ջ���Ԫ��

/*���Ԫ�ص�ջ�� ��ջ��ĩβ*/
    this.push = function(element){
        items.push(element);
    }
    /*ɾ��ջ�е�Ԫ�أ�������ɾ����Ԫ��*/
    this.pop = function(element){
        return items.pop();
    }
    /*��֪��ջ�������ӵ�Ԫ��*/
    this.peek = function(){
        return items[items.length-1];
    }

    /*�ж�ջ�Ƿ�Ϊ��*/
    this.isEmpty = function(){
        return items.length == 0;
    }

    /*ջ�ĳ���*/
    this.size = function(){
        return items.length;
    }

    /*���ջ*/
    this.clear = function(){
        items = [];
    }

    /*���ջ���Ԫ�ص�����̨*/
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


