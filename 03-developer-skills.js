'user strict';
// problem#1 : finding the amplitude of an array
const temps = [1, -1, -2, 4, 19, 5, 20, 'err', 10, 3];

// amplitude = max - min
const amplitude = arr => {
	// find max and min steps:

	// 1- let first item in the array is max and min
	let max = arr[0];
	let min = arr[0];

	// 2- loop and make comparison for this item with all items in the array
	for (let i = 0; i < arr.length; i++) {
		// catch NaN and skipping iteration coz value isn't number
		if (typeof arr[i] !== 'number') continue;
		// max number
		if (arr[i] > max) max = arr[i];
		// min number
		else if (arr[i] < min) min = arr[i];
	}
	return max - min;
};

const amplitudeVal = amplitude(temps);
console.log(amplitudeVal);

// problem#2 : finding the amplitude of 2 arrays

const t1 = [1, -1, -2, 4, 19, 5, 10, 'err', 32, 3];
const t2 = [0, 13, 45, 39, 55, 20, 9];

// amplitude = max - min
const amplitudeOfTwoArrays = (arr1, arr2) => {
	// concat the 2 arrays into 1 array
	let arr = arr1.concat(arr2);

	// find max and min steps:

	// 1- let first item in the array is max and min
	let max = arr[0];
	let min = arr[0];

	// 2- loop and make comparison for this item with all items in the array
	for (let i = 0; i < arr.length; i++) {
		// catch NaN and skipping iteration coz value isn't number
		if (typeof arr[i] !== 'number') continue;
		// max number
		if (arr[i] > max) max = arr[i];
		// min number
		else if (arr[i] < min) min = arr[i];
	}
	return max - min;
};

const amplitudeVal2 = amplitudeOfTwoArrays(t1, t2);
console.log(amplitudeVal2);
