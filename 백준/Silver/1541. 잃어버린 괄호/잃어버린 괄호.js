const input = require('fs').readFileSync('./dev/stdin').toString().trim();

const tokens = [];

let tmp = '';

for (let i = 0; i < input.length; i++) {
	if (isNaN(+input[i])) {
		tokens.push(+tmp);
		tokens.push(input[i]);
		tmp = '';
	} else {
		tmp += input[i];
	}
}

tokens.push(+tmp);

for (let i = 0; i < tokens.length; i++) {
	if (tokens[i] === '+') {
		const tmp = tokens[i - 1] + tokens[i + 1];
		tokens.splice(i - 1, 3, tmp);
		i -= 2;
	}
}

let answer = tokens[0];

for (let i = 1; i < tokens.length - 1; i++) {
	if (tokens[i] === '+') {
		answer += tokens[i + 1];
		i++;
	} else if (tokens[i] === '-') {
		answer -= tokens[i + 1];
		i++;
	}
}

console.log(answer);
