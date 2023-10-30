

export class Stopwatch {
    constructor(callback){
        this.callback = callback
        this.time = {hours: 0, minutes: 0, seconds: 0}
        this.intevalId = null
    }

    start() {
        if(!this.intevalId) {
            this.intevalId = setInterval(() => {
                this.time.seconds++
                if(this.time.seconds === 60) {
                    this.time.seconds = 0
                    this.time.minutes++
                }
                if(this.time.minutes === 60) {
                    this.time.minutes = 0
                    this.time.hours++
                }
                this.callback(`${this.time.hours} : ${this.time.minutes} : ${this.time.seconds}`)
            }, 1000)
            
        }
    }

    pause() {
        if(this.intevalId) {
            clearInterval(this.intevalId)
        }
        this.intevalId = null
    }


    reset() {
        
        if(this.intevalId) {
            clearInterval(this.intevalId)
        }
        
        this.time = {hours: 0, minutes: 0, seconds: 0}
        this.callback(`${this.time.hours} : ${this.time.minutes} : ${this.time.seconds}`)
        this.callback.textContent = this.time
        this.intevalId = null
    }
}

 const OnTick = (time) => console.log(time)
//  export const stopWatch = new StopWatch(OnTick)

 

// class StopWatch {
//       constructor(callback) {
//         this.callback = callback;
//         this.isRunning = false;
//         this.hours = 0;
//         this.minutes = 0;
//         this.seconds = 0;
//         this.intervalId = null;
//       }
    
//       start() {
//         if (!this.isRunning) {
//           this.intervalId = setInterval(() => {
//             this.seconds++;
//             if (this.seconds === 60) {
//               this.seconds = 0;
//               this.minutes++;
//             }
//             if (this.minutes === 60) {
//               this.minutes = 0;
//               this.hours++;
//             }
//             const time = { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
//             this.callback(time);
//             mainTitle.textContent = `${stopWatch.hours}:${stopWatch.minutes}:${stopWatch.seconds}`
//           }, 1000);
//           this.isRunning = true;
//         }
//       }
    
//       pause() {
//         if (this.isRunning) {
//           clearInterval(this.intervalId);
//           this.isRunning = false;
//         }
//       }
    
//       reset() {
//         this.pause();
//         this.hours = 0;
//         this.minutes = 0;
//         this.seconds = 0;
//       }
    
//       getTime() {
//         return { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
//       }
//     }
    
//     const onTick = (time) => console.log(time);
//     const stopWatch = new StopWatch(onTick);