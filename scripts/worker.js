onmessage = (e) => {
    let numbers = e.data;
    let startTime = new Date().getTime();
    let len = numbers,
        sum = 0,
        i;

    if (len === 0) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        sum += i;
    }

    let endTime = new Date().getTime();
    postMessage({average: sum / len, time: ((endTime - startTime) / 1000)})
};
