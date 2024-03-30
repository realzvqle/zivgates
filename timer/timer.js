let time = 0;
timerContent = document.getElementById("timer")
timerContent.textContent = time.toString();
limitContent = document.getElementById("limit")
clearLock = document.getElementById("clear")
const alarm = new Audio('resources/alarmfinish.wav')
let buttonClicked = false;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("stop").addEventListener("click", function() {
    alarm.pause();
    alarm.currentTime = 0;
    alarm.load();
    buttonClicked = true;
});

async function start(){
    alarm.pause();
    alarm.currentTime = 0;
    alarm.load();
    buttonClicked = false;
    
    time = 0;
    let limit = parseInt(limitContent.value);
    if(!limit){
        alert("Please Enter A Valid Number!")
        return 0;
    }
    clearLock.disabled = true;
    limitContent.disabled = true;
    let counter = 1;
    while(counter <= limit){
        if(buttonClicked){
            clearLock.disabled = false;
            limitContent.disabled = false;
            return;
        } 
        time++;
        timerContent.textContent = time.toString();
        counter++;
        await sleep(1000);
    }

        alarm.play();
        clearLock.disabled = false;
        limitContent.disabled = false;

    }

function clearContent(){
    alarm.pause();
    alarm.currentTime = 0;
    alarm.load();
    time = 0;
    timerContent.textContent = time.toString();

}