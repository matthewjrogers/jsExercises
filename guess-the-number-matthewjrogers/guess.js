const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}


guess_the_number_game();

async function guess_the_number_game(max_guess = 100000){

    let lower_bound = 1;
    let upper_bound = max_guess;

    let choice = await ask(`Choose a number between 1 and ${upper_bound} `);
    let chosen_number = Number(choice);

    while (true) {
        let guess = lower_bound + Math.floor((upper_bound - lower_bound)/2)

        let ans = await ask(`Is your number ${guess}? (y/n) `)

        if (ans.toLowerCase() === 'y'){
            console.log('Thanks for playing!')
            process.exit();
        } 

        let new_info = await ask(`Is your number higher or lower than ${guess}? (h/l) `)

        if (new_info === 'l'){
            upper_bound = guess
        } else if (new_info === 'h'){
            lower_bound = guess
        } else {
            new_info = await ask(`Only lowercase L or H please! Is your number higher or lower than ${guess}? (h/l) `)
        }

        if (lower_bound === upper_bound){
            console.log(`Your number is ${lower_bound}! Thanks for playing! `)
            process.exit();
        }
    };

};

//while (!foundCorrectNumber) {
  // Get user input
 // let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
//guess = Number(guess);
 
  // Compare the guess to the secret answer and let the user know.
 // if (guess === numberToGuess) {
//console.log('Congrats, you got it!');
 //   foundCorrectNumber = true;
 // } else {
 //   console.log('Sorry, guess again!');
 // }
//}