/**
 * Created by Administrator on 2016/10/19.
 */
function ArrayList() {
    var array = [];
    this.insert = function (item) {
        array.push(item);
    };
    this.toString = function () {
        return array.join();
    }
    this.selectionSort = function(){
        var length = array.length,
            indexMin;
        for(var i=0;i<length-1;i++){
            indexMin = i;
            for(var j=i;j<length;j++){
                if(array[indexMin]>=array[j]){
                    indexMin = j;
                }
            }
            if(i !=indexMin){
                swap(i.indexMin);
            }
        }
    }
}
function createNonSortedArray(size){
    var array = new ArrayList();
    for(var i=size;i>0;i--){
        array.insert(i);
    }
    return array;
}

var swap = function(index1,index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}
var array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());