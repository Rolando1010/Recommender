import { performance } from "perf_hooks";

class Timer {
    processName: string = "";
    start: number = 0;

    constructor(processName: string) {
        this.processName = processName;
        this.start = performance.now();
    }

    end() {
        const end = performance.now();
        console.log(`${this.processName} take ${end - this.start} miliseconds`);
    }
}

export { Timer };