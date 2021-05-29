// Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge
function merge(arr1, arr2){
    let i = 0, a = 0, mergeArr = [];
    while (i < arr1.length && a < arr2.length){
      if (arr1[i] > arr2[a]) mergeArr.push(arr2[a++]);
      else mergeArr.push(arr1[i++]);
    }
    while (i < arr1.length){
      mergeArr.push(arr1[i++]);
    }
    while (a < arr2.length){
      mergeArr.push(arr2[a++]);
    }
    return mergeArr;
  }
  function mergeSort(array) {
    if (array.length == 1) return array;
    let middle = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));  
    return merge(left, right);
  }
mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
