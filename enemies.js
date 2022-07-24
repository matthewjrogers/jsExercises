// start the program
// log out what is your name
// ask for input from the user
console.log("What is your name?");
// setup a function to run after the input is provided, with input
function handleInput(chunk) {
    // clean up the input
    let enemies = ["darth vader", "voldemort", "sauron", "count rugen"];
    let rugen_response = "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";

    let name = chunk.toString().trim();

    if (enemies.includes(name.toLowerCase())) {
        console.log((name.toLowerCase() === "count rugen" ? rugen_response : ("Go away, " + name)));
    } else {
        console.log("Hello, " + name + "!");
    }

    // print the input to the console
    console.log("What is your name?");
}

process.stdin.on("data", handleInput);

// end
