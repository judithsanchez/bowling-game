// Rules
// https://www.playerssports.net/page/bowling-rules#:~:text=Spare%3A%20A%20%E2%80%9Cspare%E2%80%9D%20is,the%20first%20ball%20is%20counted).

// Solution 1

// function bowlingGame(pins) {
//   let score = 0;
//   let frame = 1;
//   let frameScore = 0;
//   let roll = 0;
//   let isSpare = false;
//   let isStrike = false;
//   let areConsecutiveStrikes = false;

//   for (let i = 0; i < pins.length; i += 1) {
//     if (pins[i] !== 10) {
//       roll += 1;
//       score += pins[i];
//       frameScore += pins[i];

//       if (areConsecutiveStrikes && roll === 1) {
//         score += pins[i];
//         areConsecutiveStrikes = false;
//       }
//       if (isStrike && roll === 2) {
//         score += frameScore;
//         isStrike = false;
//       }
//       if (isSpare && roll === 1) {
//         score += pins[i];
//         isSpare = false;
//       }

//       if (roll === 2) {
//         if (frameScore === 10) {
//           isSpare = true;
//         }
//         frame += 1;
//         roll = 0;
//         frameScore = 0;
//       }
//     } else {
//       if (isStrike) {
//         score += 10;
//         areConsecutiveStrikes = true;
//       }
//       score += 10;
//       frame += 1;
//       isStrike = true;
//     }
//   }
//   return score;
// }

// console.log(bowlingGame([10, 3, 6])); // 28
// console.log(bowlingGame([10, 10, 4, 2])); // 46
// console.log(bowlingGame([7, 3, 4, 2])); // 20

class BowlingGame {
  constructor() {
    this.score = 0;
    this.frame = 1;
    this.frameScore = 0;
    this.roll = 0;
    this.prevSpare = false;
    this.prevStrike = false;
    this.areConsecutiveStrikes = false;
  }

  rollStrike(pins) {
    if (pins === 10) {
      if (this.prevStrike) {
        this.score += pins;
        this.areConsecutiveStrikes = true;
      }
      this.score += 10;
      this.frame += 1;
      this.prevStrike = true;
      console.log('Total Score: ' + this.score);
      return this.score;
    }
  }

  rollBall(pins) {
    if (pins === 10) {
      return this.rollStrike(pins);
    }

    this.roll += 1;
    this.score += pins;
    this.frameScore += pins;

    if (this.roll === 1) {
      if (this.areConsecutiveStrikes) {
        this.score += pins;
        this.areConsecutiveStrikes = false;
      }

      if (this.prevSpare) {
        this.score += pins;
        this.prevSpare = false;
      }
    }

    if (this.roll === 2) {
      if (this.prevStrike) {
        this.score += this.frameScore;
        this.prevStrike = false;
      }

      if (this.frameScore === 10) {
        this.prevSpare = true;
      }
      this.frame += 1;
      this.roll = 0;
      this.frameScore = 0;
    }
    console.log('Total Score: ' + this.score);
    return this.score;
  }
}

const game = new BowlingGame();
game.rollBall(10);
game.rollBall(3);
game.rollBall(6);
game.rollBall(10);
game.rollBall(4);
game.rollBall(2); //  50
