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
// let [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n');
// n = +n;

// 여러줄
let arr = fs.readFileSync(path).toString().trim().split('\n');

function check(bingo, y, x) {
	let hor = 0;
	let ver = 0;
	let cnt = 0;

	const check = 'XXXXX';

	const down = `${bingo[0][0]}${bingo[1][1]}${bingo[2][2]}${bingo[3][3]}${bingo[4][4]}`;
	const up = `${bingo[4][0]}${bingo[3][1]}${bingo[2][2]}${bingo[1][3]}${bingo[0][4]}`;

	if (down === check) {
		cnt++;
	}
	if (up === check) {
		cnt++;
	}

	for (let i = 0; i < 5; i++) {
		const hor = bingo[i].join('');
		const ver = `${bingo[0][i]}${bingo[1][i]}${bingo[2][i]}${bingo[3][i]}${bingo[4][i]}`;

		if (hor === check) {
			cnt++;
		}
		if (ver === check) {
			cnt++;
		}
	}

	return cnt >= 3;
}

function solution() {
	const bingo = [];
	const calls = [];
	const coords = {};

	for (let i = 0; i < 5; i++) {
		const line = arr[i].split(' ').map(Number);
		const callLine = arr[i + 5].split(' ').map(Number);
		line.forEach((num, idx) => (coords[num] = [i, idx]));
		bingo.push(line);
		calls.push(callLine);
	}
	const numbers = calls.flat();

	for (let i = 0; i < 25; i++) {
		const number = numbers[i];
		const [y, x] = coords[number];
		bingo[y][x] = 'X';

		if (check(bingo, y, x)) {
			return i + 1;
		}
	}
}

console.log(solution());
