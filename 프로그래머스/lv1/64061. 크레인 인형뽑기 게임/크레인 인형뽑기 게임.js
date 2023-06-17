function solution(board, moves){
        let answer = 0;
        let basket = [];
        moves.forEach(pos => {
          for(let i = 0; i < board.length; i++) {
            if(board[i][pos - 1] !== 0) {
              let doll = board[i][pos - 1];
              board[i][pos - 1] = 0;
              if(doll === basket[basket.length -1]) {
                answer += 2;
                basket.pop();
              }
              else basket.push(doll);
              break;
            }
          }
        });
        return answer;
      }