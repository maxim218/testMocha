"use strict";

export default function getSum(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    let summa = a + b;
    if(!summa) summa = 0;
    return summa;
}
