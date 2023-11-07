



class StopWatch {
    constructor(){
        this.isRunning = false
        this.time = {hours: '00', minutes: '00', seconds: '00'}
        this.setIntervalId = null
    }

    start() {
        if(!this.isRunning) {
            this.setIntervalId = setInterval(() => {
                +this.time.seconds++
            if(this.time.seconds === 60) {
               +this.time.minutes++
                this.time.seconds = 0
            }
            if(this.time.minutes === 60) {
                +this.time.hours++
                this.time.minutes = 0
            }
            console.log(this.time)
            }, 1000)
        }
        this.isRunning = true
        return this
    }

    pause() {
                if (this.isRunning) {
                  clearInterval(this.setIntervalId);
                  this.isRunning = false;
                }
                return this
              }

    getTime() {
        console.log(this.time)
        
        return this
    }

    reset() {
        this.time = {hours: '00', minutes: '00', seconds: '00'}
        if (this.isRunning) {
            clearInterval(this.setIntervalId);
            this.isRunning = false;
          }
        return this
    }
}

const stopWatch = new StopWatch()

// mainTitle.textContent = `${stopWatch.time.hours}:${stopWatch.time.minutes}:${stopWatch.time.seconds}`

// startBtn.addEventListener('click', () => {
//     stopWatch.start()
// })

// pauseBtn.addEventListener('click', () => {
//     stopWatch.pause()
// })

// getTimeBtn.addEventListener('click', () => {
//     stopWatch.getTime()
// })

// resetBtn.addEventListener('click', () => {
//     stopWatch.reset()
//     stopWatch.pause()
// })



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

    

     
    






