const input = require('fs').readFileSync('./dev/stdin').toString().trim();

const result = [];

let quantity = 1;

for (let i = 0; i <= input.length - quantity; i++) {
	result.push(input.slice(i, i + quantity));

	if (i === input.length - quantity) {
		quantity++;
		i = -1;
	}
}

console.log(new Set(result).size);
