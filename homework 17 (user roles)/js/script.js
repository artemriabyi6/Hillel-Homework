// let a = {
//   hours: 0,
//   minutes: 0,
//   seconds: 0
// }

// function aOnTick() {

//   let a = {
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   }

//   ++a.seconds
//   if(a.seconds === 60) {
//     a.seconds = 0
//     a.minutes += 1
//   }

//   if(a.minutes === 60) {
//     a.minutes = 0
//     a.hours += 1
//   }
//   return console.log(a)
// }
// aOnTick()

// // let setIntervalId = setInterval(aOnTick, 10000)
// let setIntervalId;

// class StopWatch {
//   constructor(time, id){
//     this.time = time
//     this.id = id
//   }

//   start() {
//      setIntervalId = setInterval(aOnTick, 1000)
//   }

//   pause() {
//     console.log(this.time)
//   }

// getTime() {
//   console.log(this.id)
// }

//  pause() {
//   clearInterval(setIntervalId)
//   console.log(setIntervalId)
//  }
// }

// let b = new StopWatch(aOnTick)

//b.start()
// b.pause()
//  b.getTime()

// class StopWatch {
//   constructor(callback) {
//     this.callback = callback;
//     this.isRunning = false;
//     this.hours = 0;
//     this.minutes = 0;
//     this.seconds = 0;
//     this.intervalId = null;
//   }

//   start() {
//     if (!this.isRunning) {
//       this.intervalId = setInterval(() => {
//         this.seconds++;
//         if (this.seconds === 60) {
//           this.seconds = 0;
//           this.minutes++;
//         }
//         if (this.minutes === 60) {
//           this.minutes = 0;
//           this.hours++;
//         }
//         const time = { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
//         this.callback(time);
//       }, 1000);
//       this.isRunning = true;
//     }
//   }

//   pause() {
//     if (this.isRunning) {
//       clearInterval(this.intervalId);
//       this.isRunning = false;
//     }
//   }

//   reset() {
//     this.pause();
//     this.hours = 0;
//     this.minutes = 0;
//     this.seconds = 0;
//   }

//   getTime() {
//     return { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
//   }
// }

// const onTick = (time) => console.log(time);
// const stopWatch = new StopWatch(onTick);
// stopWatch.start();

// class StopWatch {
//   constructor(callBack) {
//     this.callBack = callBack;
//     this.hours = 0;
//     this.minutes = 0;
//     this.seconds = 0;
//     this.isRunning = false;
//     this.setIntervalId = null;
//   }

//   start() {
//     if (!this.isRunning) {
//       this.setIntervalId = setInterval(() => {
//         this.seconds++;
//         if (this.seconds === 60) {
//           this.seconds = 0;
//           this.minutes++;
//         }
//         if (this.minutes === 60) {
//           this.minutes = 0;
//           this.hours++;
//         }

//         const time = {
//           hours: this.hours,
//           minutes: this.minutes,
//           seconds: this.seconds,
//         };
//         this.callBack(time);
//       }, 1000);
//       this.isRunning = true;
//     }
//   }

//   pause() {
//     clearInterval(this.setIntervalId);
//   }

//   getTime() {
//     return setTimeout(() => {
//       console.log({
//         hours: this.hours,
//         minutes: this.minutes,
//         seconds: this.seconds,
//       });
//     }, 10000);
//   }
// }

// const onTick = (time) => console.log(time);
// const stopWatch = new StopWatch(onTick);

//stopWatch.start();
//  stopWatch.pause()
//stopWatch.getTime();



