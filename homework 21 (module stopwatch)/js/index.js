 import { Stopwatch} from "./stopwatch.js";
 import { StopwatchUI } from "./stopwatchUI.js";


 const initialTime = {hours: 0, minutes: 0, seconds: 0}; 
 const ui = new StopwatchUI(initialTime);
 const ai = new StopwatchUI(initialTime);

 const onTick = (time) => ui.setTime(time);
 const ofTick = (time) => ai.setTime(time);
 const stopwatch = new Stopwatch(onTick);
 const startWatch = new Stopwatch(ofTick);


 ui.appendStopWatch(document.body)
 ui.addStartBtnListener(e => stopwatch.start())
 ui.addPauseBtnListener(e => stopwatch.pause())
 ui.addResetBtnListener(e => stopwatch.reset())


 ai.appendStopWatch(document.body)
 ai.addStartBtnListener(e => startWatch.start())
 ai.addPauseBtnListener(e => startWatch.pause())
 ai.addResetBtnListener(e => startWatch.reset())

 
 

