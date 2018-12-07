(() => {
    document.getElementById('valueBlock').value = 10000;
    averageBlock = () => {
        try {
            var numbers = document.getElementById('valueBlock').value;
        }
        catch (e) {
            var numbers = 10000;
        }
        let startTime = new Date().getTime();
        let len = numbers,
            sum = 0,
            i;

        if (len === 0) {
            return 0;
        }

        for (i = 0; i < len; i++) {
            console.log('i :: ', i)
            sum += i;
        }

        let endTime = new Date().getTime();
        document.getElementById('timeBlock').innerHTML = `${(endTime - startTime) / 1000} seconds`;
        alert('Average - ', sum / len);
    };

    helloBlock = () => {
        alert("Hello World !!");
    }
})();

