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

function solution() {
	let rest = n;

	let cnt = 0;

	if (n === 2) {
		return 1;
	}

	if (n <= 3) {
		return -1;
	}

	while (rest > 0) {
		if (rest === 2) {
			return cnt + 1;
		}

		if (rest === 1) {
			return -1;
		}

		if (rest < 5) {
			rest -= 2;
			cnt++;
		}

		if ((rest - 5) % 2 === 0 || rest - 5 > 4) {
			rest -= 5;
			cnt++;
		} else {
			rest -= 2;
			cnt++;
		}
	}

	return cnt;
}

console.log(solution());
