const fs = require('fs');

const path = process.platform === 'linux' ? '/dev/stdin' : './stdin';

// 한 줄 입력
// let n = +fs.readFileSync(path).toString().trim().split('\n');

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
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
n = +n;

function solution() {
	const a = input[0]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	const b = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => b - a);

	let case1 = 0;
	let case2 = 0;

	for (let i = 0; i < a.length; i++) {
		case1 += a[i] * b[i];
		// case2 += a[a.length - i - 1] * a[b.length - i - 1];
	}

	return case1;
}

console.log(solution());
