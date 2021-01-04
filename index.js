// Quiz on India- Assignment 2 for Level 1

var readlineSync=require("readline-sync");
var chalk=require("chalk");
var score=0;

console.log(chalk.red.bold('\nWelcome To How Well Do You Know India Quiz'));

var userName=readlineSync.question(chalk.hex('#FFA500').bold("What's Your Name ? "));

console.log(chalk.hex("#f5b31b").bold("Welcome "+ userName ,"\n Let's Play ! \n (Remember your Answer should be in Abc Format)"));


function play(ques,ans){
  console.log(chalk.hex("#1869f5").bold(ques));
  var userAns=readlineSync.question(chalk.hex("#2cb5f5").bold("Your Answer: "));

  if (userAns === ans) {
		console.log(chalk.green('You were absolutely CORRECT!\n'));
		score=score+1;
  }else{
    console.log(chalk.red("You are WRONG!\n"));
  }
}
var one={
  ques:"What Indian city is the capital of two states?",
  ans:"Chandigarh"
}

var two={
  ques:"How many countries border India?",
  ans:"Six"
}

var three={
  ques:"What is India’s smallest state by area?",
  ans:"Goa"
}


var four={
  ques:"Delhi is located along what river?",
  ans:"The Yamuna"
}


var five={
  ques:"Which state in India do we find the wettest regions?",
  ans:"Meghalaya"
}


var six={
  ques:"Which Indian president is nicknamed 'Missile Man'?",
  ans:"A P J Abdul Kalam"
}


var seven={
  ques:"The Victoria Memorial Hall is located in which Indian city?",
  ans:"Kolkata"
}


var eight={
  ques:"Which Indian city was the capital of the Gaekwad Dynasty?",
  ans:"Vadodara"
}


var nine={
  ques:"Which Indian cricketer became the first sportsman to be awarded the Bharat Ratna, India's highest civilian order?",
  ans:"Sachin Tendulkar"
}


var ten={
  ques:"Which Indian social reformer is known as the Father of Modern India?",
  ans:"Raja Ram Mohan Roy"
}


var set=[one,two,three,four,five,six,seven,eight,nine,ten];

for(i=0;i<set.length;i++){
  play(set[i].ques,set[i].ans);
}

console.log(chalk.hex("#169908").bold("You Scored: "),chalk.hex("#81f03c").bold(score));