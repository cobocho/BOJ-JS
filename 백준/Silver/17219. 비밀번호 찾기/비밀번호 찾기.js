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
let arr = fs.readFileSync(path).toString().trim().split('\n');
let [n, m] = arr[0].split(' ').map(Number);

// n 이후 배열
// let arr = fs.readFileSync(path).toString().trim().split('\n');
// let n = +arr[0];

function solution() {
	const sites = {};
	const result = [];

	for (let i = 1; i < arr.length - m; i++) {
		const [site, pw] = arr[i].split(' ');
		sites[site] = pw;
	}

	for (let i = arr.length - m; i < arr.length; i++) {
		const site = arr[i];
		result.push(sites[site]);
	}

	return result.join('\n');
}

console.log(solution());
