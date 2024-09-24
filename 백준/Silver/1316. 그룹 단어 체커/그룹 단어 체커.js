const fs = require('fs');

const path = process.platform === 'linux' ? '/dev/stdin' : './stdin';

// 한 줄 입력
// let n = +fs.readFileSync(path).toString().trim().split('\n');

// n개 및 배열 한줄 입력
/**
 * 4
 * 2 1 1 0
 */
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
// let [input, str] = fs.readFileSync(path).toString().trim().split('\n');
// let [n, k] = input.split(' ').map(Number);

// n 이후 여러줄
let [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n');
n = +n;

function solution() {
	let record = {};
	let answer = 0;
	let last = '';

	for (const word of arr) {
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			if (last !== char && record[char] === true) {
				last = '';
				record = {};
				break;
			}
			if (record[char] === undefined) {
				record[char] = true;
				last = char;
			}
			if (i === word.length - 1) {
				answer++;
				last = '';
				record = {};
			}
		}
	}

	return answer;
}

console.log(solution());
