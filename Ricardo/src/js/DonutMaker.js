let nav = document.querySelector("nav");

let collapsibleNavBar = document.getElementsByClassName("collapsibleNavBar");
let i;

for (i=0; i< collapsibleNavBar.length; i++) {
    collapsibleNavBar[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;

        if(content.style.display === "block") {
            content.style.display = "none";
            nav.style.marginBottom = "0px";
        } else {
            content.style.display = "block";
            nav.style.marginBottom = "65px";
        }
    });
}

let donutButton = document.images["donutButton"];
// let purchaseClickMultiplierSound = document.["purchase__click__multiplier"];

let donutButtonBeep = new Audio();
donutButtonBeep.src = 'src/DonutSound.mp3';

// let purchaseClickMultiplierSoundBeep = new Audio();
// purchaseClickMultiplierSoundBeep.src = 'src/DonutSound.mp3';


let purchaseAutoClicker = document.querySelector("#purchase__auto__clicker");

let autoClickerPriceSpan = document.querySelector("#auto__clicker__price");

let autoClickerSpan = document.querySelector("#auto__clickers__total");

let purchaseClickMultipliers = document.querySelector("#purchase__click__multiplier");

let clickMultiplierPriceSpan = document.querySelector("#click__multiplier__price");

let clickMultiplierSpan = document.querySelector("#click__multiplier");

let resetButton = document.querySelector("#reset__button");



donutButton.addEventListener("click", addDonut);

donutButton.addEventListener("click", playAudio);

purchaseAutoClicker.addEventListener("click",purchaseAutoClickerCount);

purchaseClickMultipliers.addEventListener("click", purchaseClickMultiplier);

// purchaseClickMultiplierSound.addEventListener("click", playAudio);




let donutNumber = document.querySelector(".donut_count");
let donutCount = 0;
let autoClickerPrice = 100;
let autoClickerCount = 0;
let clickMultiplierPrice = 10;
let clickMultiplierCount = 0;

resetButton.addEventListener("click", reset);

function addDonut() {
    donutCount += Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
}

function playAudio() {
    donutButtonBeep.play();
    donutButtonBeep.currentTime = 0;
    // purchaseClickMultiplierSoundBeep.play();
    // purchaseClickMultiplierSoundBeep.currentTime = 0;

}


function retrieveDonutCount() {
    return donutCount;
}

function purchaseAutoClickerCount() {
    if (donutCount >= autoClickerPrice) {
        donutCount -= autoClickerPrice;
        autoClickerCount += 1;
        autoClickerPrice =Math.round(autoClickerPrice * 1.10);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
        autoClickerPriceSpan.innerText =numberWithCommas (autoClickerPrice);
        autoClickerSpan.innerText = numberWithCommas(autoClickerCount);
        if (autoClickerCount <= 1) {
            activateAutoClickers();
    }  
}
}

function retrieveAutoClickerCount() {
    return autoClickerCount;
}

function activateAutoClickers() {
    setInterval(function(){
    donutCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
    }, 1000);
    
}

function purchaseClickMultiplier() {
    if (donutCount >= clickMultiplierPrice) {
        donutCount -= clickMultiplierPrice;
        clickMultiplierCount += 1;
        clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.1);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
        clickMultiplierPriceSpan.innerText = numberWithCommas(clickMultiplierPrice);
        clickMultiplierSpan.innerText = numberWithCommas (clickMultiplierCount);
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}




function reset(){
    location.reload();
}










