import React from "react";
import confetti from "canvas-confetti";

export default class Snow extends React.Component {
  fireConfetti = () => {
    var end = Date.now() + (5 * 400);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 45,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 45,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

}

  render() {
    setTimeout(() => {
      this.fireConfetti();
    }, 1000);
    setTimeout(() => {
      this.fireConfetti();
    }, 9000);

    return (
      <div>
        <canvas id="mycanvas" />
      </div>
    );
  }
}
//<button onClick={this.fireConfetti}>Fire confetti</button>