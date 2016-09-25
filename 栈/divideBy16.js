/**
 * Created by Administrator on 2016/9/22.
 */
function divideBy16 (HexNumber){
    var remStack = new Stack(),
        rem,
        HexString = '';

    var num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    while(HexNumber>0){
        rem = Math.floor(HexNumber % 16);
        remStack.push(num[rem]);
        HexNumber = Math.floor(HexNumber/16);
    }

    while(!remStack.isEmpty()){
        HexString += remStack.pop();
    }

    return HexString;
}