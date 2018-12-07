(() => {

    document.getElementById('valueAsync').value = 1000;
    showProgressAsync = () => {
        document.getElementById('timeAsync').innerHTML = '';
        document.getElementById('avgAsync').innerHTML = '';
        let progress = document.getElementById('myprogressAsync');
        progress.style.display = 'block';
    }

    hideProgressAsync = () => {
        let progress = document.getElementById('myprogressAsync');
        progress.style.display = 'none';
    }

    hideProgressAsync();

    averageAsync = () => {
        showProgressAsync();
        try {
            var numbers = document.getElementById('valueAsync').value;
        }
        catch (e) {
            var numbers = 10000;
        }
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
                document.getElementById('avgAsync').innerHTML = `${sum / len}`;
                hideProgressAsync();
            }
        };

        calculateSumAsync(0);
    };
})();