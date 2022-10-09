function compareArrays(arr1, arr2) {

  let result = arr1.every((item, index) => item == arr2[index]) && arr1.length == arr2.length;

  return result;
}

compareArrays([8, 9], [6]);

function advancedFilter(arr) {
  
  let resultArr = arr.filter(item => item >= 0).filter(item => item % 3 == 0).map(item => item * 10);

  return resultArr; 
}

advancedFilter([-1,6,-9,3]);