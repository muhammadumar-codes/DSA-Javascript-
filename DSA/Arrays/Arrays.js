let  array=[1,2,3,4]
let i=0,j=array.length-1;
while (i<j) {
  [array[i],array[j]]=[array[j],array[i]]
  j--;
  i++;
  
}  
console.log(array)