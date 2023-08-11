
let bobFollowers = ['Tom' ,'Barbie', 'Sam', 'Dan'];
let hannahsFollowers = ['lucy', 'alex', 'Tom', 'Dan']


let mutualFollowers = [];


for (let i = 0; i < bobFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobFollowers[i] === hannahsFollowers[j]) {
            mutualFollowers.push(bobFollowers[i]);
        }
    }
}

console.log("Mutual followers:", mutualFollowers);