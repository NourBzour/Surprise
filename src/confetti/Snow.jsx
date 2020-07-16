import React from "react";
import confetti from "canvas-confetti";

export default class Snow extends React.Component {
  fireConfetti = () => {
  
    var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
     

}

  render() {
     setTimeout(() => {
       this.fireConfetti();
     }, 1000);
     setTimeout(() => {
      this.fireConfetti();
    }, 30000);
    setTimeout(() => {
      this.fireConfetti();
    }, 80000);
    setTimeout(() => {
      this.fireConfetti();
    }, 130000);
    setTimeout(() => {
      this.fireConfetti();
    }, 180000);
    setTimeout(() => {
      this.fireConfetti();
    }, 250000);
    return (
      <div>
        <canvas id="mycanvas" />
       
      </div>
    );
  }
}
//