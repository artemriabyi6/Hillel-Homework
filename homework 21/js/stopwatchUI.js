export class StopwatchUI {
    constructor(callback) {
        this.callback = callback

        this.showTime = document.createElement('h1')
        this.showTime.textContent = `${this.callback.hours} : ${this.callback.minutes} : ${this.callback.seconds}`

        this.startBtn = document.createElement('button')
        this.startBtn.textContent = 'Start'

        this.pauseBtn = document.createElement('button')
        this.pauseBtn.textContent = 'Pause'


        this.resetBtn = document.createElement('button')
        this.resetBtn.textContent = 'Reset'
    }

    addStartBtnListener(callback) {
        this.startBtn.addEventListener('click', callback)
    }

    addPauseBtnListener(callBack) {
        this.pauseBtn.addEventListener('click', callBack)
    }

    addResetBtnListener(callBack) {
        this.resetBtn.addEventListener('click', callBack)
    }

    appendStopWatch(container) {
        container.append(this.showTime)
        container.append(this.startBtn)
        container.append(this.pauseBtn)
        container.append(this.resetBtn)
    }

    setTime(time) {
        this.showTime.textContent = time
    }
}

