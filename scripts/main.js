(() => {
    document.getElementById('value').value = 1000000;

    showProgress = () => {
        document.getElementById('time').innerHTML = '';
        document.getElementById('avg').innerHTML = '';
        let progress = document.getElementById('myprogress');
        progress.style.display = 'block';
    }

    hideProgress = () => {
        let progress = document.getElementById('myprogress');
        progress.style.display = 'none';
    }

    hideProgress();
    if (window.Worker) {
        let myWorker = new Worker('./scripts/worker.js');

        myWorker.onmessage = (e) => {
            document.getElementById('time').innerHTML = `${e.data.time} seconds`;
            document.getElementById('avg').innerHTML = `${e.data.average}`;
            hideProgress();
        };


        average = () => {
            showProgress();
            try {
                var numbers = document.getElementById('value').value;
            }
            catch (e) {
                var numbers = 10000;
            }
            myWorker.postMessage(numbers);
        }
    }
})();