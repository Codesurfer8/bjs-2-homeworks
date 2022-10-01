// Задание 1

let arr = [16.4562, 8, 5, -2]
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
};

// getArrayParams(arr);



// Задание 2

let arrOfArr = [[4, 8, 3], [9, 7, -1], [2, 8, 2]];
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);

    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

// makeWork(arrOfArr, worker);


// Задание 3
function worker2(arr) {
  let min = 0;
  let max = 0;

  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i]
    }
  }

  return max - min;
}
