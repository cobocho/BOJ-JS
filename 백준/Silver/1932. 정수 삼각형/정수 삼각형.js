let [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const og = input.map((v) => v.split(' ').map(Number));
const triangle = input.map((v) => v.split(' ').map(Number));

for (let i = 0; i < triangle.length - 1; i++) {
	for (let j = 0; j < triangle[i].length; j++) {
		const cur = triangle[i][j];

		// 좌측 자식
		triangle[i + 1][j] = Math.max(triangle[i + 1][j], cur + og[i + 1][j]);
		// 우측 자식
		triangle[i + 1][j + 1] = Math.max(
			triangle[i + 1][j + 1],
			cur + og[i + 1][j + 1]
		);
	}
}

console.log(Math.max(...triangle.at(-1)));
