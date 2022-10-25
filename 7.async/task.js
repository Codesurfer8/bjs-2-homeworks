class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined;
    };


    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Не задан id")
        }

        let hasAlarm = this.alarmCollection.some(function (item) {
            if (item.id === id) {
                return true;
            }
            return false;
        });

        if (hasAlarm) {
            console.error("Такой звонок уже существует");
        } else {
            this.alarmCollection.push({ id, time, callback });
        }
    };


    removeClock(id) {
        let indexAlarm = this.alarmCollection.findIndex((item) => item.id === id);
        if (indexAlarm !== -1) {
            this.alarmCollection.splice(indexAlarm, 1);
            return true;
        }

        return false;
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    };

    start() {
        if (this.timerId === undefined) {
            this.timerId = setInterval(() => {
                this.alarmCollection.map(this.checkClock, this)
            }, 100);
        }
    };

    clearInterval() {
        this.timerId = undefined;
        this.alarmCollection.id = undefined;
    };

    stop() {
        if (this.timerId !== undefined) {
            this.clearInterval();
        }
    };

    printAlarms() {
        this.alarmCollection.forEach(function (item) {
            console.log(`Id: ${item.id} time - ${item.time}`);
        })
    };

    clearAlarms() {
        clearInterval(this.id);
        this.alarmCollection.splice(0);
    };

};

// test of task


let call = new AlarmClock();
call.addClock("20:00", setInterval(() => console.log("Пора вставать"), 1000), 1);
call.addClock("20:01", () => {
    console.log("Давай, вставай уже");
    alarmPhone.removeClock(2)
}, 2);

call.addClock("20:02", () => {
    console.log("Просыпайся !");
    call.stop();
    call.clearAlarms();
});

call.printAlarms();
