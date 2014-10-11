function lessOrEqual(x, y) {
    return x <= y;
}

function comparator(pred) {
    return function (x, y) {
        if (truthy(pred(x, y))) return -1;
        else if (truthy(pred(y, x))) return 1;
        else return 0;
    };
};


[100, 1, 0, 10, -1, -2, -1].sort(comparator(lessOrEqual));
//=> [-2, -1, -1, 0, 1, 10, 100]


