const obj1 = {
    message: 'Hi!hello',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(obj1.logMessage.bind(obj1), 1000);
