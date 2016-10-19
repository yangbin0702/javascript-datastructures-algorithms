/**
 * Created by Administrator on 2016/9/25.
 */
function LinkedList(){
    var Node = function(elemnet){
        this.element = elemnet;
        this.next = null;
    };

    var length = 0;
    var head = null;

    /*���б�β�����һ���µ���*/
    this.append = function(element){
        var node = new Node(element),
            current;
        if(head == null ){
            head = node;
        }else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    /*���б���ض�λ�ò���һ���µ���*/
    this.insert = function(position,element){
        if( position >= 0 && position <= length){
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if ( position == 0 ){
                node.next = current;
                head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    /*���б���ض�λ���Ƴ�һ��*/
    this.removeAt = function(position){
        if ( position> -1 && position < length ) {
            var current = head,
                previous,
                index = 0;

            if ( position == 0 ) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };

    /*���б����Ƴ�һ��*/
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    //����Ԫ�����б��е�����������б���û�и�Ԫ���򷵻�-1
    this.indexOf = function(element){
        var current = head,
            index = 0;

        while(current){
            if( element === current.element ){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    /*���������û�а����κ�Ԫ�أ��򷵻�true����������ȴ���0�򷵻�false*/
    this.isEmpty = function(){
        return length === 0;
    };

    /*�������������Ԫ�ظ���*/
    this.size = function(){
        return length;
    };

    /*�����б���ʹ����Node�࣬����Ҫ��д�̳���JavaScript����Ĭ�ϵ�toString����������ֻ���Ԫ�ص�ֵ*/
    this.toString = function(){
        var current = head,
            string = '';
        while(current){
            string += current.element + (current.next ? ',':'' );
            current = current.next;
        }
        return string;
    };

    this.print = function(){
        console.log(this.toString());
    };

    this.getHead = function(){
        return head;
    }
}