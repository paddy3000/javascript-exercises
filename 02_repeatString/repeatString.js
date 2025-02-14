const repeatString = function(word, times) {
    if (times<0) {
        return "ERROR";
    } else {
    string="";
    for (let index = 1; index <= times; index++) {
        string=string+word;
        
    }
}

    return string;
};


// Do not edit below this line
module.exports = repeatString;
