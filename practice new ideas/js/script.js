// import index from './index.js'
// import { sum as sumFn } from './index.js';
// console.log(index)
// console.log(sumFn(1, 2))


// console.log(1)


class Stopwatch {
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
        this.time = {hours: 0, minutes: 0, seconds: 0}
        title.textContent = `${stopWatch.time.hours} : ${stopWatch.time.minutes} : ${stopWatch.time.seconds}`
        if(this.intevalId) {
            clearInterval(this.intevalId)
        }
        this.intevalId = null
    }
}


const onTick = (time) => title.textContent = time
const stopWatch = new Stopwatch(onTick)


const container = document.createElement('div')
document.body.prepend(container)

const title = document.createElement('h1')
title.textContent = `${stopWatch.time.hours} : ${stopWatch.time.minutes} : ${stopWatch.time.seconds}`
container.appendChild(title)

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
container.appendChild(startBtn)
startBtn.addEventListener('click', () => {stopWatch.start()})


const pauseBtn = document.createElement('button')
pauseBtn.textContent = 'Pause'
container.appendChild(pauseBtn)
pauseBtn.addEventListener('click', () => {stopWatch.pause()})


const resetBtn = document.createElement('button')
resetBtn.textContent = 'Reset'
container.appendChild(resetBtn)
resetBtn.addEventListener('click', () => {stopWatch.reset()})


//stopWatch.start()


