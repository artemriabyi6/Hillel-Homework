const getContainer = document.querySelector('.container')
const getTimeWrapper = document.getElementById('time')
const mainTitle = document.querySelector('h1')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const getTimeBtn = document.querySelector('#getTime')
const resetBtn = document.querySelector('#reset')



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
            mainTitle.textContent = `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`
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
        const lap = document.createElement('h2')
        lap.textContent = `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`
        document.body.append(lap)
        return this
    }

    reset() {
        this.time = {hours: '00', minutes: '00', seconds: '00'}
        mainTitle.textContent = `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`
        return this
    }
}

const stopWatch = new StopWatch()

mainTitle.textContent = `${stopWatch.time.hours}:${stopWatch.time.minutes}:${stopWatch.time.seconds}`

startBtn.addEventListener('click', () => {
    stopWatch.start()
})

pauseBtn.addEventListener('click', () => {
    stopWatch.pause()
})

getTimeBtn.addEventListener('click', () => {
    stopWatch.getTime()
})

resetBtn.addEventListener('click', () => {
    stopWatch.reset()
    stopWatch.pause()
})