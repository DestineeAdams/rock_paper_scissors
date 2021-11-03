let playerChoice = " "
let computerChoice = " "

let oppentScore = 0
let playerScore = 0

let roundnum = 1;

let state = " ";

// while(true){

// }

// function preload() {

//     // play choice buttons
//     button1 = createButton('rock')
//     button1.position(20, 400)

//     button2 = createButton('paper')
//     button2.position(165, 400)

//     button3 = createButton('scissors')
//     button3.position(300, 400)

// }

// function setup() {
//     createCanvas(400, 300)

//     noStroke()
// }

// function draw() {
//   background(0, 200, 220);

//   playScene()


// }

// function playScene() {

//     // scoreing and rounds
//     textSize(14)
//     textAlign(CENTER);
//     textStyle(NORMAL)

//     // stats
//     rect(150, 10, 80, 30)
//     text("round: " + roundnum, 190, 30)

//     rect(8, 10, 60, 30)
//     text("score: " + playerScore, 35, 30)

//     rect(330, 10, 60, 30)
//     text("score: " + oppentScore, 355, 30)
	
//   	// setup buttons
//     button1.mousePressed(case1);
//     button2.mousePressed(case2);
//     button3.mousePressed(case3);

//     textSize(20)

//     text("playerchoice: " + playerChoice, 200, 100)
//     text("computerChoice: " + computerChoice, 200, 125)
//     text(state, 200, 150)


// }

// // button function
// function case1() {
//   playerChoice = 'rock'

//   computerChoose()
//   compare()
//   roundnum ++
// }

// function case2() {
//   playerChoice = 'paper'

//   computerChoose()
//   compare()
//   roundnum ++
// }

// function case3() {
//   playerChoice = 'scissors'

//   computerChoose()
//   compare()
//   roundnum ++
// }


// function computerChoose() {
//   computerChoice = floor(random(1, 4))

//   if(computerChoice === 1) {
//     computerChoice = "rock"
//   }
//   if(computerChoice === 2) {
//     computerChoice = "paper"
//   }
//   if(computerChoice === 3) {
//     computerChoice = "scissors"
//   }

//   return computerChoice

// }

// function compare(){
//   if(playerChoice === computerChoice){
//     state = "it's a tie"
//   }

//   // all the winning  cases
//   if(playerChoice === "rock" && computerChoice === "scissors"){
//     state = "you win"
//     playerScore++
//   }
//   if(playerChoice === "paper" && computerChoice === "rock"){
//     state = "you win"
//     playerScore++
//   }
//   if(playerChoice === "scissors" && computerChoice === "paper"){
//     state = "you win"
//     playerScore++
//   }


//   // all the losing cases
// 	if(computerChoice === "rock" && playerChoice === "scissors"){
//     state = "you lose"
//     oppentScore++
//   }
//   if(computerChoice === "paper" && playerChoice === "rock"){
//     state = "you lose"
//     oppentScore++
//   }
//   if(computerChoice === "scissors" && playerChoice === "paper"){
//     state = "you lose"
//     oppentScore++
//   }

// }
