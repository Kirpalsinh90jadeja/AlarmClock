let alarmTime=null;
let alarmTimeout=null;
let stopTimeout = null;


const btn = document.getElementById("btn")
const msg = document.getElementById("msg")
const sound = document.getElementById("alarmsound")


function setlalarm(){
    const input = document.getElementById("time").value;
    if (!input){
        alert("Please  set a valid time");
        return ;
    }
    alarmTime = input;
    msg.innerText = `Alarm set for ${alarmTime}`;
    
    if(alarmTimeout) clearTimeout(alarmTimeout);
    
    if(stopTimeout) clearTimeout(stopTimeout);
    checkAlarm();
}
function checkAlarm (){
    const now = new Date();
    const [alarmHour, alarmMinute] = alarmTime.split(":").map(Number);
    
    console.log(alarmHour,alarmMinute);
    const alarmDate = new Date();
    alarmDate.setHours(alarmHour,alarmMinute,0,0);

    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm>= 0){
        alarmTimeout =setTimeout(()=>{
            sound.play();
            // alert("Alarm is ringing");

            document.getElementById("msg").innerText = "Alarm finished " ;

            // for stop sound 
            stopTimeout = setTimeout( ()=>{
                sound.pause();
                sound.currentTime = 0;  // for start audio from 0 platback
                msg.innerText = "Alarm Stopped"
                
            },29000);

        } , timeToAlarm);

       

    } else {
        alert("The time is already passed foe today :");

        document.getElementById("msg").innerText  = "Set a  future time for the alarm";

    }

 
}
    
btn.addEventListener('click',()=>{
    setlalarm();
})