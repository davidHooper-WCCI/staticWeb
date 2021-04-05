import {students} from './students.js'
import {questions} from './questions.js'

import {displayStudentList} from './studentList.js'

const classTimerInSec = 5*60;
const studentTimerInSec = 30;
let resetStudentTime = false;
let lastStudent = 0
let currentStudent = -1;
let currentQuestion = 0;
let randomQuestions = questions.sort(() => Math.random() - 0.5)
let music = new Audio("https://www.soundboard.com/mediafiles/22/226000-d812f5cc-04ab-4858-9045-00731ef1f3f3.mp3");
var studentTime
let studentList = displayStudentList(students);
const studentTimerWrapper = document.querySelector(".student-timer-wrapper")
const startbutton = document.createElement("button");
startbutton.innerHTML="START"
startbutton.classList.add("start-button");
studentTimerWrapper.append(startbutton);
const studentTimer = document.querySelector("#student-timer");
studentTimer.remove();
startbutton.addEventListener("click", ()=>{
    startbutton.remove();
    studentTimerWrapper.append(studentTimer);
    startTimer(classTimerInSec, document.querySelector("#time"));
    startTimer(studentTimerInSec, document.querySelector("#student-timer"))
    displayQuestion(randomQuestions);
    currentStudent = 0;
    updateStudentSelected();
    music.play();
   
})
const rightButton = document.querySelector("#right-button");
const wrongButton = document.querySelector("#wrong-button");
rightButton.addEventListener("click", ()=>{
    currentStudent++;
    updateStudentSelected();
    resetStudentTime = true;
    displayQuestion(randomQuestions);
    
})

wrongButton.addEventListener("click", ()=>{
    currentStudent=0;
    resetStudentTime = true;
    document.querySelector(".classList").removeChild(studentList);
    studentList = displayStudentList(students);
    studentButtons = studentList.childNodes;
    document.querySelector(".classList").append(studentList)
    updateStudentSelected();
    displayQuestion(randomQuestions);
    music.pause();
    let loseMusic = new Audio("https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/audioblocks-video-game-fail-wrong-answer-2_SbPWP3OQtDI_NWM.mp3").play();
    //loseMusic.onended = music.play();
})
const displayQuestion = function(questions){
    document.querySelector(".question").innerHTML = questions[currentQuestion];
    if(currentQuestion >= randomQuestions.length -1 )
    {
        currentQuestion = 0;
    }
    currentQuestion++;

}
const updateStudentSelected = function(){
    if(currentStudent > lastStudent || currentStudent == 0){
        studentButtons[lastStudent].classList.remove("selected")
    }
    lastStudent = currentStudent;
    studentButtons[currentStudent].classList.add("selected")
}
    

document.querySelector(".classList").append(studentList);

let studentButtons = studentList.childNodes;



const startTimer = function(duration, element){
    

    let timer = duration, minutes, seconds;
    let refreshInterval = setInterval(function () {
        if(duration < classTimerInSec && resetStudentTime){
            timer = duration;
            resetStudentTime = false;
        }
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(minutes>0){
            element.innerText = minutes + ":" + seconds;
        }
        else
        {
            element.innerText = seconds;
        }

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds == 0 && minutes == 0){
            document.querySelector(".question").innerText = "GAME OVER";
            clearInterval(refreshInterval);
        }
    }, 1000);


}
