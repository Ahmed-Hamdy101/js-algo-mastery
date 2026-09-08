// find something in array

const haystack = (search, answer) => {
    let result = answer;
    for (let i = 0; i < search.length; i++) {
        if (search[i] === answer) {
            result = answer;
            console.log('we find it ' + answer);
        } else if (i === search.length - 1 && search[i] !== answer) {
            result = search.push(answer);
        }
    }
    return result + " " + search;
}

console.log(haystack(['tom', 'trex', 'mando'], 'unkown'))
