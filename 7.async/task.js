class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined;
    };

    addClock(hoursMonths, func, identAlarm) {
        if(identAlarm !== "id") {
            throw new Error("Идентификатор не задан");
        }
    };
};