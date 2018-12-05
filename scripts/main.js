(() => {
    if (window.Worker) {
        let myWorker = new Worker('./scripts/worker.js');

        let ele = document.createElement('h3');
        ele.innerHTML = 'Computations Complete: 0';
        document.body.appendChild(ele);

        let counter = 0;

        myWorker.onmessage = (e) => {
            counter += e.data;
            ele.innerHTML = 'Computations Complete: ' + String(counter);
        };

        document.addEventListener('mousemove', function () {
            let cross = document.getElementsByClassName('x')[0];
            cross.style.left = String(event.clientX) + 'px';
            cross.style.top = String(event.clientY) + 'px';
            myWorker.postMessage(100);
        });
    }
})();