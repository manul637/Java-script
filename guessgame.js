const max = prompt("Enter maximun number ");
// console.log(max);


const random = Math.floor(Math.random() * max) + 1;
console.log(random);


let guess = prompt("Guess the number");

while(true) {                                    //tru means always running 
     if (guess == "quit"){
        console.log("User quit");
        break;
     }


     if(guess == random){
        console.log("You are right ! Congrats! random number was ",random );
        break;
     }else if(guess < random){
       guess = prompt("hint : your guess was too small. please try again");
     }else {
        guess= prompt("hint : your guess was too large . please try again")
     }
}