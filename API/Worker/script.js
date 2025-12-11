let w;
function setWorker () {
 if (typeof Worker !== "undefined") {
    // Worker Availeable Your Browser

    // if W is already difiend "woker.js not wokering"
   if (!w) {
    //Create a new Worker
     w = new Worker ("worker.js");
    }

    // listennig for worker events / messages 
    w.onmessage = function (ev) {
        document.getElementById ("demo").innerHTML = ev.data;
        console.log(ev);
        
    }

 } else {
    alert('Your Browser Doesn`t Support Web Worker');
 }

};

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w.null;
  } else {
    alert('Your Browser Doesn`t Support Web Worker')
  }
}
// Note : postMessage er value pete hoile difined koira variable er function er maddome call kore ".data" dile value pabe