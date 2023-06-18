function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(tree => {
        const skills = skill.split('');
        for (let i = 0; i < tree.length; i++) {
            if (tree[i] === skills[0]) {
                skills.shift();
            } else if (skills.includes(tree[i])) break;
            
            if (i === tree.length - 1) answer++;
        }
    })
    return answer;
}