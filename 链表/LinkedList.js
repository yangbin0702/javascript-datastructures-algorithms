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

    /*向列表尾部添加一个新的项*/
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

    /*向列表的特定位置插入一个新的项*/
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

    /*从列表的特定位置移除一项*/
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

    /*从列表中移除一项*/
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    //返回元素在列表中的索引、如果列表中没有该元素则返回-1
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

    /*如果链表中没有包含任何元素，则返回true，如果链表长度大于0则返回false*/
    this.isEmpty = function(){
        return length === 0;
    };

    /*返回链表包含的元素个数*/
    this.size = function(){
        return length;
    };

    /*由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值*/
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