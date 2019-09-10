"use strict";

export default function timeMulModule(a, b, callback) {
    setTimeout(function() {
        setTimeout(function() {
            a = parseInt(a);
            b = parseInt(b);
            let value = a * b;
            value = parseInt(value);
            if(value < 0) {
                value = value * (-1);
            }
            value = parseInt(value);
            if(!value) {
                value = 0;
            }
            callback(value);
        }, 2000);
    }, 2000);
}
