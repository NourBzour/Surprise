import React from "react";
import confetti from "canvas-confetti";

export default class Ran extends React.Component {
  fireConfetti = () => {
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
      });

}

  render() {
    setTimeout(() => {
      this.fireConfetti();
    }, 20000);
    setTimeout(() => {
        this.fireConfetti();
      }, 70000);
      setTimeout(() => {
        this.fireConfetti();
      }, 100000);
      setTimeout(() => {
        this.fireConfetti();
      }, 170000);
      setTimeout(() => {
        this.fireConfetti();
      }, 250000);
      setTimeout(() => {
        this.fireConfetti();
      }, 350000);
      setTimeout(() => {
        this.fireConfetti();
      }, 450000);
      setTimeout(() => {
        this.fireConfetti();
      }, 550000);
      setTimeout(() => {
        this.fireConfetti();
      }, 650000);
      setTimeout(() => {
        this.fireConfetti();
      }, 750000);
      setTimeout(() => {
        this.fireConfetti();
      }, 850000);
      setTimeout(() => {
        this.fireConfetti();
      }, 950000);
    return (
      <div>
        <canvas id="mycanvas" />
      </div>
    );
  }
}