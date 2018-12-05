let counter = 0;
function pause(ms) {
    let time = new Date();
    counter += 1;
    while ((new Date()) - time <= ms) {
        // waiting ...
    }

    postMessage(counter);
}

onmessage = (e) => {
    pause(100);
};