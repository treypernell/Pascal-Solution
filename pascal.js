var generate = function(numRows) {
    let result = [];
    let counter = 2;
    if (numRows == 0) {
        return [];
    }
    if(numRows === 1) {
        return([[1]]);
    }

    result.push([1],[1,1]);
    while(counter < numRows) {
        let newRow = [];
        newRow.push(1);
        for(let i = 0; i < result[counter - 1].length - 1; i++) {
            newRow.push(result[counter - 1][i] + result[counter - 1][i+1])
        }
        newRow.push(1);
        result.push(newRow);
        counter++;
    }
    
    return result;      
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(5));