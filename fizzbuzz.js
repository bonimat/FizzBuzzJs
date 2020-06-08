exports.write = function (n) {
    var result = "";
    if (n % 3 === 0) {
        result = "fizz";
    }
    if (n % 5 === 0) {
        result += "buzz";
    }
    if (result==="") {
        result = n;
    }
    return result;
}
