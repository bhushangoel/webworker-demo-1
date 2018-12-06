(() => {
    if (window.Worker) {
        let myWorker = new Worker('./scripts/worker.js');

        myWorker.onmessage = (e) => {
            document.getElementById('time').innerHTML = `${e.data.time} seconds`;
        };

        average = (numbers) => {
            myWorker.postMessage(numbers);
        }

        hello = () => {
            alert('Hello')
        }
    }
})();