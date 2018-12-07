(() => {

    document.getElementById('valueBlock').value = 10000;
    showProgressBlock = () => {
        document.getElementById('timeAsync').innerHTML = '';
        document.getElementById('avgAsync').innerHTML = '';
        let progress = document.getElementById('myprogressBlock');
        progress.style.display = 'block';
    }

    hideProgressBlock = () => {
        let progress = document.getElementById('myprogressBlock');
        progress.style.display = 'none';
    }

    hideProgressBlock();
    averageBlock = () => {
        showProgressBlock();
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
            sum += i;
        }

        let endTime = new Date().getTime();
        document.getElementById('timeBlock').innerHTML = `${(endTime - startTime) / 1000} seconds`;
        document.getElementById('avgBlock').innerHTML = `${sum / len}`;
        hideProgressBlock();
    }
})();