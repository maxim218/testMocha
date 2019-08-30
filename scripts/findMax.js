"use strict";

export default function findMax(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if(a >= c && a >= b) {
        return a;
    }

    if(b >= a && b >= c) {
        return b;
    }
    
    if(c >= a && c >= b) {
        return c;
    }

    return undefined;
}
