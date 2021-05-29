// Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
function selectionSort(array) {
      let temp;
    for(let i=0; i<array.length; i++){
      let minIdx = i;
      for(let a=i+1; a<array.length; a++){
        if(array[minIdx]>array[a]){
          minIdx=a;
        } 
      }
      temp = array[i];
      array[i] = array[minIdx];
      array[minIdx]=temp;
    }
    return array;
  }
  
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);