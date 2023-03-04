//Задача 1

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg,
	};
}

// Задача 2
  // 1 функция summElementsWorker должна находить сумму элементов массива и возвращать её

function summElementsWorker(...arr) {
	let array = [...arr];
	if (array.length === 0) {
		return 0
	}
	let summ = array.reduce((sum, current) => sum + current, 0);
	return summ
}

  // 2 функция differenceMaxMinWorker для вычисления разницы максимального и минимального элементов

function differenceMaxMinWorker(...arr) {
	let array = [...arr];
	if (array.length === 0) {
		return 0
	}
	let newMin = Math.min(...array);
	let newMax = Math.max(...array);
	return (newMax - newMin)
}

  // 3 функция differenceEvenOddWorker вычисления разницы сумм чётных и нечётных элементов

function differenceEvenOddWorker(...arr) {
	let array = [...arr];
	if (array.length === 0) {
		return 0
	}
	let sumOddElemet = 0;
	let sumEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElemet += arr[i];
		}
	}
	return sumEvenElement - sumOddElemet;
}

  // 4 функция averageEvenElementsWorker будет вычислять среднее значение чётных элементов

function averageEvenElementsWorker(...arr) {
	let array = [...arr];
	if (array.length === 0) {
		return 0
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement = countEvenElement + 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

// Задача 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let array = [...arrOfArr];
	for (let i = 0; i < array.length; i++) {
		work = func(...array[i]);
		if (work > maxWorkerResult) {
			maxWorkerResult = work;
		}
	}
	return maxWorkerResult;
}