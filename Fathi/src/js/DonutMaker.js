class DonutMaker {
    constructor() {
      this.clickCount = 0;
      this.autoClickCount = 0;
      this.autoClickCost = 100;
      this.multiplierCount = 0;
      this.multiplierCost = 10;
    }
  
    recordClick() {
      if (this.multiplierCount >= 1) {
        this.clickCount += Math.pow(1.2, this.multiplierCount);
      } else {
        this.clickCount++;
      }
    }
  
    buyAutoClicker = () => {
      if (this.clickCount >= this.autoClickCost) {
        this.clickCount -= this.autoClickCost;
        this.autoClickCount++;
        this.autoClickCost = Math.round(this.autoClickCost * 1.1);
      }
    };
  
    activateAutoClickers = () => {
      this.clickCount +=
        this.autoClickCount * Math.pow(1.2, this.multiplierCount);
    };
  
    buyMultiplier = () => {
      if (this.clickCount >= this.multiplierCost) {
        this.clickCount -= this.multiplierCost;
        this.multiplierCount++;
        this.multiplierCost = this.multiplierCost * 1.1;
        this.activateMultipliers();
      }
    };
  
    activateMultipliers = () => {
      this.clickCount += Math.pow(1.2, this.multiplierCount);
    };
  
  
    get currentDonutCount() {
      return this.clickCount;
    }
  
    get currentMultiplierCount() {
      return this.multiplierCount;
    }
  
    get perSecondCount() {
      if (this.autoClickCount > 0) {
        return this.autoClickCount * Math.pow(1.2, this.multiplierCount);
      } else {
        return 0;
      }
    }
  }
  
  export { DonutMaker };





