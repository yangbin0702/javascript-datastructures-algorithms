/**
 * Created by Administrator on 2016/9/25.
 */
/*循环队列——击鼓传花，孩子围成一个圆圈，把花尽快的传递给旁边的人，
某一时刻传花停止，花在谁手里，就退出圆圈结束游戏*/

function hotPotato(nameList,num){
    var queue = new Queue();

    for(var i = 0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }
    var eliminated = "";

    while(queue.size()>1){
        for(var i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated+'在击鼓传花中被淘汰');
    }
    return queue.dequeue();
}
