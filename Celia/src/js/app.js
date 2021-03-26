// Donut
let donutsDisplayed = document.querySelector("#donut-count");
let donutButton = document.querySelector("#donut-button");
let donutCount = 0;

donutButton.addEventListener("click", function() {
    donutCount += Math.pow(1.2, multiplierCount);
    donutsDisplayed.innerText = Math.round(donutCount);
});

// AutoClick
let autoClickDisplayed = document.querySelector("#auto-count");
let autoClickButton = document.querySelector("#auto-button");
let nextAutoClickCost = document.querySelector("#auto-cost");
let autoClickCount = 0;
let autoClickCost = 100;

function enableAutoClick() {
    setInterval(function() {
        donutCount += autoClickCount;
        donutsDisplayed.innerHTML = Math.round(donutCount)
    }, 1000);
}

autoClickButton.addEventListener("click", buyAutoClick);

function buyAutoClick() {
    if (donutCount >= autoClickCost){
        autoClickCount += 1;
        donutCount -= autoClickCost;
        autoClickCost = Math.round(autoClickCost * 1.1);
        donutsDisplayed.innerText = Math.round(donutCount);
        nextAutoClickCost.innerText = autoClickCost + " donuts";
        autoClicksDisplayed.innerText = autoClickCount;
        if (autoClickCount <= 1) {
            enableAutoClick();
        }
    }
}

// multiplier
let multipliersDisplayed = document.querySelector("#multiplier-count");
let multiplierButton = document.querySelector("#multi-button");
let nextMultiplierCost = document.querySelector("#multiplier-cost");
let multiplierCount = 0;
let multiplierCost = 10;

function enableMultiClick() {
    setInterval(function() {
        donutCount += multiplierCount;
        donutsDisplayed.innerHTML = Math.round(donutCount)
    }, 1000);
}

multiplierButton.addEventListener("click", buyMultiplier);

function buyMultiplier() {
    if (donutCount >= multiplierCost) {
        multiplierCount += 1;
        donutCount -= multiplierCost;
        multiplierCost = Math.round(multiplierCost * 1.1);
        donutsDisplayed.innerText = Math.round(donutCount);
        nextMultiplierCost.innerText = multiplierCost + " donuts";
        multipliersDisplayed.innerText = multiplierCount;
        if (multiplierCount <= 1) {
            enableMultiClicker();
        }
    }
}

// reset
const gameReset = document.querySelector("#reset-button");

gameReset.addEventListener("click", function() {
    donutCount = 0;
    autoClickerCount = 0;
    multiplierCount = 0;
    
    donutsDisplayed.innerText = donutCount;
    autoClickDisplayed.innerText = autoClickCount;
    multipliersDisplayed.innerText = multiplierCount;
   
    nextAutoClickerCost.innerText = "100 donuts";
    nextMultiplierCost.innerText = "10 donuts";
})
