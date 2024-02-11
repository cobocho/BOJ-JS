let [n, distances, prices] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

distances = distances.split(' ').map(Number);
prices = prices.split(' ').map(Number);

let answer = 0;
let distance = 0;

while (true) {
	let price = prices[distance];
	let length = 0;

	for (let i = distance; i < prices.length - 1; i++) {
		distance++;
		length += distances[i];

		if (price > prices[i + 1]) {
			break;
		}
	}

	answer += price * length;

	if (distance >= distances.length - 1) break;
}

console.log(answer);