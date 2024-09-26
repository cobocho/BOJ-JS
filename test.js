const fs = require('fs');

const path = process.platform === 'linux' ? '/dev/stdin' : './stdin';

// 한 줄 입력
const n = +fs.readFileSync(path).toString().trim().split('\n');

// n개 및 배열 한줄 입력
// const [n, m] = fs
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

function solution() {
	if (n === 0) {
		return 1;
	}

	function recur(v, rest) {
		if (rest === 1) {
			return v;
		}

		return recur(v * (rest - 1), rest - 1);
	}

	return recur(n, n);
}

console.log(solution(n));
