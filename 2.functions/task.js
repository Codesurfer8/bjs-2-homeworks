// Задание 1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if(arr[i] > max) {
      max = arr[i];
    }
     sum += arr[i];
    avg = sum / arr.length;
  }

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
};

getArrayParams(2, 8, 1.6, 10);



// Задание 2

function worker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

worker(2, 8, -3);

function makeWork(func, ...arrOfArr) {
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

makeWork(worker, 8, 16, -2);


// Задание 3
function worker2(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
    } else if(min > arr[i]) {
      min = arr[i]
    }
  }

  return max - min;
}

worker2(-2, 8, 1.8, 12);