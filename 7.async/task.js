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
        if(alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    };

    start() {
        if(this.timerId === undefined) {
            this.timerId = setInterval(() => {
                this.alarmCollection.map(this.checkClock, this)
            }, 100);
        }
    };

    stop() {
        
    };
};
 
