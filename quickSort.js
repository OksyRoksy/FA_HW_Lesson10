//  function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
function quickSort(array) {  
    let a = array.length;
    if (a > 1) {
      let pivot = array[0];
      let small = [];
      let large = []; 
      
      for (let i=1; i<a; i++) {
        if (array[i] <= pivot) {
          small.push(array[i]);
        } else {
          large.push(array[i]);
        }
      } 
      return quickSort(small).concat(pivot, quickSort(large));  
    } else return array;  
    }
    quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);