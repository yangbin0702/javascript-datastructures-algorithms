/**
 * Created by biyang on 2016/9/29.
 */
function CircularLinkedList(){
    function Node(element){
        this.element = element;
        this.next = null;
    }
    var length = 0;
    var head = null;

    this.append = function(element){
        var node = new Node(element),
            current;

        if(head == null){
            head = node;
        }
        else{
            current = head;
            while( current.next !==head){
                current = current.next;
            }
            current.next = node;
        }
        node.next = head;
        length++;
    };

    this.insert = function(position, element){
        if(position >=0 && position <=length){
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if( position === 0){
                node.next = current;

                while(current.next !== head){
                    current = current.next;
                }
                current.next = node;
                head = node;
            }else{
                while( index++ < position){
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

    this.removeAt = function(position){
        if(position > -1 && position <length){
            var current = head,
                previous,
                index = 0;

            if( position ===0){

                while(current.next !== head){
                    current = current.next;
                }
                head = head.next;
                current.next = head;
            }
            else{
                while(index++ <position){
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

    this.indexOf = function(element){
        var current = head,
            index=0;

        while(current.next !== head){

            if(current.element == element){
                return index;
            }

            index++;
            current = current.next;
        }

        if (element == current.element){
            return index;
        }

        return -1;
    };

    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function(){
        var current = head,
            s = current.element;
        while(current.next !==head){
            current = current.next;
            s += ', '+current.element;
        }
        return s.toString();
    };

    this.print = function(){
        console.log(this.toString());
    };
}