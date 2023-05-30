function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    var answer = 0;
    let cache = Array.from({length: cacheSize}, (v) => v = 'null');
    for(let i = 0; i < cities.length; i++) {
        for(let j = 0; j < cache.length; j++) {
            if(cities[i].toUpperCase() === cache[j].toUpperCase()) { //캐시 히트
                answer++;
                cache.unshift(cache.splice(j, 1)[0]);
                break;
            }
            if(j === cache.length - 1) { //캐시 미스
                answer += 5;
                cache.unshift(cities[i]);
                cache.pop();
            }            
        }
    }
    return answer;
}