function binary(angka){
    console.log(`----- ${angka}-----`);
    
    var numberToBinary = angka.toString(2);
    console.log(numberToBinary);
    var arr = [];
    for(var i = 0 ; i<numberToBinary.length ; i ++){
        if(numberToBinary.charAt(i)=='1'){
            var count = 0;
            for(var j = 0 ; j<numberToBinary.length ; j++){
                if(numberToBinary.charAt(j)=='0'){
                    count++;
                    arr.push(count);
                }
                if(numberToBinary[numberToBinary.length-1]==0){
                    count = 0;
                }
                if(numberToBinary.charAt(j)=='1'){
                    count=0; 
                    arr.push(count);
                }    
            }
        }
    }
    console.log(arr);
    
    arr.sort(function(a,b){return b-a});
    var max = arr[0];
    return max;
}
console.log(binary(529));
console.log(binary(9));
console.log(binary(20));
console.log(binary(15));


