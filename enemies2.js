// start the program
// log out what is your name
// ask for input from the user
console.log("What is your name?");

// setup a function to run after the input is provided, with input
function handleInput(chunk) {
  // clean up the input
  let name = chunk.toString().trim();
  // print the input to the console
  console.log("Hello, " + name + "!");
  console.log("What is your name?");
}

process.stdin.on("data", handleInput);
// end