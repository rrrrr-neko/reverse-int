module.exports = function reverse (n) {
    let res = '';
    n = n.toString();
    if ( n < 0) {
        n = n.slice(1);
    }
    res += n.split('').reverse().join('');
    return +res;
}
