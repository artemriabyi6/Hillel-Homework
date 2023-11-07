

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
