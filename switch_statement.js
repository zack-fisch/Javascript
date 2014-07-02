var user = prompt("How is your day?").toLowerCase
();

var feeling = prompt("How are you feeling?");

switch (user) {
    case ("Okay"):
        console.log("Why okay?");
        if (user && feeling) {
            console.log ("okay.");
        }
        break;
    case("Great!"):
        console.log("Awesome!");
         if (user || feeling) {
            console.log ("okay.");
        }
        else {
            console.log("great.");
        }
        break;
    case("Amazing!"):
        console.log("Wonderful!");
        break;
    default:
        console.log("Thats okay!")
        break;
};