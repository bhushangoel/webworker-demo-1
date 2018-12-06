averageAsync = (numbers) => {
    let startTime = new Date().getTime();
    var len = numbers,
        sum = 0,
        i;

    if (len === 0) {
        return 0;
    }

    let calculateSumAsync = (i) => {
        if (i < len) {
            // Put the next function call on the event loop.
            setTimeout(() => {
                sum += i;
                calculateSumAsync(i + 1);
            }, 0);
        } else {
            // The end of the array is reached so we're invoking the alert.
            let endTime = new Date().getTime();
            document.getElementById('timeAsync').innerHTML = `${(endTime - startTime) / 1000} seconds`;
            alert('Average - ' + sum / len);
        }
    };

    calculateSumAsync(0);
};

helloAsync = () => {
    alert('Hello World !!')
};