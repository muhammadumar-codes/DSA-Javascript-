let array = [0,1,0,1,1,1,0];
let i=0,j=0;
while(i<=array.length){
  if(array[i]===0){
    let temp=array[i];
    array[i]=array[j]
    array[j]=temp;
    j++;
  }
  i++;

}
console.log(array);
