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

// [n, m] 이후 한줄
let [input, str] = fs.readFileSync(path).toString().trim().split('\n');
let [n, k] = input.split(' ').map(Number);

// n 이후 배열
// let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
// n = +n;

function solution() {
	let result = 0;
	str = str.split('');

	for (let i = 0; i < str.length; i++) {
		const isHuman = str[i] === 'P';

		if (!isHuman) continue;

		const start = i - k;
		const end = i + k;

		for (let j = start; j <= end; j++) {
			if (str[j] === 'H') {
				result++;
				str[j] = 'E';
				break;
			}
		}
	}

	return result;
}

console.log(solution());
