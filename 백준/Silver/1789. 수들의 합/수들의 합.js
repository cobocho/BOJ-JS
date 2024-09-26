const fs = require('fs');

const path = process.platform === 'linux' ? '/dev/stdin' : './stdin';

// 한 줄 입력
let n = +fs.readFileSync(path).toString().trim().split('\n');

// n개 및 배열 한줄 입력
// let [n, m] = fs
// 	.readFileSync(path)
// 	.toString()
// 	.trim()
// 	.split('\n')
// 	.map((v, i) => {
// 		if (i === 0) {
// 			return Number(v);
// 		} else {
// 			return v.split(' ').map(Number);
// 		}
// 	});

// n개 및 배열 여러 줄 입력
// let [n, arr] = fs
// 	.readFileSync(path)
// 	.toString()
// 	.trim()
// 	.split('\n')
// 	.map((v, i) => {
// 		if (i === 0) {
// 			return Number(v);
// 		} else {
// 			return v.split(' ').map(Number);
// 		}
// 	});

// [n, m] 이후 배열
// let arr = fs.readFileSync(path).toString().trim().split('\n');
// let [n, m] = arr[0].split(' ').map(Number);

// n 이후 배열
// let arr = fs.readFileSync(path).toString().trim().split('\n');
// let n = +arr[0];

function solution() {
	let result = 0;
	let sum = 0;
	let last = 1;

	while (sum < n) {
		const plused = (sum += last);

		if (plused < n) {
			sum = plused;
			last++;
			result++;
			continue;
		}
		if (plused === n) {
			result++;
			break;
		}
		break;
	}

	return result;
}

console.log(solution());
