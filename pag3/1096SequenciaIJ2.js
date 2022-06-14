  let input = require('fs').readFileSync('stdin', 'utf8');
  let lines = input.split('\n');

  let countIndexOne = 1;
  let countIndexTwo = 7;

  for (let i = 1; i <= 5; i++) {

      for (let index = 1; index <= 3; index++) {

         console.log(`I=${countIndexOne} J=${countIndexTwo}`);
          countIndexTwo -= 1;
      }

      countIndexOne += 2;
      countIndexTwo = 7;

  }