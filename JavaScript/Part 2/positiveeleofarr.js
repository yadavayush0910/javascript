// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]
function getFirstNElements(array, n) {
    return array.slice(0, n);
  }
  
  // Example usage
  const array = [7, 9, 0, -2];
  const n = 3;
  const result = getFirstNElements(array, n);
  console.log(result); // Output: [7, 9, 0]
  