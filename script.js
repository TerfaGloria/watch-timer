const startBtn=document.getElementById('start')
const stopBtn=document.getElementById('stop')
const resetBtn=document.getElementById('reset')
const time=document.getElementById('time')


let timeElaspe=0
let interval=0

function setTime(){

    const hours=Math.floor(timeElaspe / 3600)
    const minutes=Math.floor((timeElaspe % 3600) / 60)
    const seconds= timeElaspe % 60

    time.innerHTML= ` ${padstart(hours)} ${padstart(minutes)} ${padstart(seconds)}`
}


function Timer(){
    timeElaspe++
    setTime()
    
}

function startOclock(){
    interval=setInterval(Timer, 1000)

}

function stopOclock(){
    clearInterval(interval)

}

function resetOclock(){
    stopOclock()
    timeElaspe=0
    setTime()
    startOclock()
}

function padstart(value){
    return value.toString().padStart(2, '0')
    
}




     
    



startBtn.addEventListener('click',startOclock)

stopBtn.addEventListener('click', stopOclock)

resetBtn.addEventListener('click', resetOclock)