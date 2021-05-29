//  function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
function insertionSort(array) {
    for(let i=0; i<array.length; i++){
        let a=i-1;
        let num = array[i];
        while (a>=0 && num<array[a]){
           array[a+1] = array[a];
           a--;
        }
        array[a+1]= num;
      }
    return array;
  }
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);