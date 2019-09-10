"use strict";

import assert from 'assert';

import getSum from "./../scripts/getSum";
import findMax from "./../scripts/findMax";
import timeMul from "./../scripts/timeMul";

describe("Тестирование функции получения максимального числа", () => {
    it("Передача разных чисел в качестве параметров", () => {
        assert.deepStrictEqual(findMax(125, 67, 9), 125);
        assert.deepStrictEqual(findMax(125, 9, 67), 125);
        assert.deepStrictEqual(findMax(67, 125, 9), 125);
        assert.deepStrictEqual(findMax(67, 9, 125), 125);
        assert.deepStrictEqual(findMax(9, 125, 67), 125);
        assert.deepStrictEqual(findMax(9, 67, 125), 125);
    });

    it("Передача в функцию undefined null NaN", () => {
        assert.deepStrictEqual(findMax(undefined, 25, 34), undefined);
        assert.deepStrictEqual(findMax(undefined, null, 34), undefined);
        assert.deepStrictEqual(findMax(undefined, null, NaN), undefined);
        assert.deepStrictEqual(findMax(-45, null, 10), undefined);
        assert.deepStrictEqual(findMax(12, 10, NaN), undefined);
    });

    it("Передача чисел с повторениями", () => {
        assert.deepStrictEqual(findMax(50, 50, 50), 50);
        assert.deepStrictEqual(findMax(120, 50, 50), 120);
        assert.deepStrictEqual(findMax(50, 120, 50), 120);
        assert.deepStrictEqual(findMax(50, 50, 120), 120);
        assert.deepStrictEqual(findMax(120, 120, 50), 120);
        assert.deepStrictEqual(findMax(120, 50, 120), 120);
        assert.deepStrictEqual(findMax(50, 120, 120), 120);
    });

    it("Передача строк в качестве параметров функции", () => {
        assert.deepStrictEqual(findMax("125", "67", "9"), 125);
        assert.deepStrictEqual(findMax("125", "9", "67"), 125);
        assert.deepStrictEqual(findMax("67", "125", "9"), 125);
        assert.deepStrictEqual(findMax("67", "9", "125"), 125);
        assert.deepStrictEqual(findMax("9", "125", "67"), 125);
        assert.deepStrictEqual(findMax("9", "67", "125"), 125);
    });

    it("Передача отрицательных чисел", () => {
        assert.deepStrictEqual(findMax(-10, -20, -30), -10);
        assert.deepStrictEqual(findMax(-20, -10, -30), -10);
        assert.deepStrictEqual(findMax(-20, -30, -10), -10);
    });
});

describe("Тестирование функции получения суммы чисел", () => {
    it("Передача чисел в качестве параметров", () => {
        assert.deepStrictEqual(getSum(2, 3), 5);
        assert.deepStrictEqual(getSum(17, 3), 20);
        assert.deepStrictEqual(getSum(8, 25), 33);
        assert.deepStrictEqual(getSum(-15, 19), 4);
        assert.deepStrictEqual(getSum(-5, -12), -17);
        assert.deepStrictEqual(getSum(8, -20), -12);
    });

    it("Передача строк в качестве параметров", () => {
        assert.deepStrictEqual(getSum("4", "5"), 9);
        assert.deepStrictEqual(getSum("12", "4"), 16);
        assert.deepStrictEqual(getSum("-4", "10"), 6);
        assert.deepStrictEqual(getSum("8", "-3"), 5);
        assert.deepStrictEqual(getSum("-10", "-20"), -30);
    });

    it("Передача в функцию undefined null NaN", () => {
        assert.deepStrictEqual(getSum(undefined, 5), 0);
        assert.deepStrictEqual(getSum(null, 75), 0);
        assert.deepStrictEqual(getSum(NaN, 843), 0);
        assert.deepStrictEqual(getSum(12, undefined), 0);
        assert.deepStrictEqual(getSum(-15, null), 0);
        assert.deepStrictEqual(getSum(-3, NaN), 0);
        assert.deepStrictEqual(getSum(undefined, null), 0);
        assert.deepStrictEqual(getSum(undefined, NaN), 0);
        assert.deepStrictEqual(getSum(null, NaN), 0);
    });

    it("Передача в функцию некорректных строк", () => {
        assert.deepStrictEqual(getSum("", 12), 0);
        assert.deepStrictEqual(getSum("hello", -12), 0);
        assert.deepStrictEqual(getSum(4, "abcd"), 0);
        assert.deepStrictEqual(getSum("xyz", "abcd"), 0);
    });
});

describe("Тестирование асинхронной функции", () => {
    it("Передача положительных значений", (done) => {
        timeMul(12, 5, (ans) => {
            assert.deepStrictEqual(ans, 60);
            done();
        });
    });

    it("Передача одного отрицательного значения", (done) => {
        timeMul(-7, 2, (ans) => {
            assert.deepStrictEqual(ans, 14);
            done();
        });
    });

    it("Передача некорректного значения", (done) => {
        timeMul("abcde", 5, (ans) => {
            assert.deepStrictEqual(ans, 0);
            done();
        });
    });
});

