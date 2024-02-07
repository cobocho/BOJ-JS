const input = require('fs').readFileSync('./dev/stdin').toString().trim();

const cards = Array.from({ length: input }, (v, i) => i + 1).reverse();
const queue = [];

while (true) {
	// 제일 위 카드를 버린다.
	queue.push(cards.pop());
	// 제일 위 카드를 아래로 옮긴다.
	cards.unshift(cards.pop());

	if (cards.length === 1) break;
}

queue.push(cards[0]);

console.log(queue.join(' '));
