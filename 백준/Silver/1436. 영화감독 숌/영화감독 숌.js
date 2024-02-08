const input = require('fs').readFileSync('./dev/stdin').toString().trim();

let result = '';
let cnt = 665;
let quantity = 0;

while (quantity < Number(input)) {
	cnt++;

	if (cnt.toString().includes('666')) {
		quantity++;
		result = cnt.toString();
	}
}

console.log(result);
