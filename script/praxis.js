var answer = "blank";  
var totNumQuest = 1;
var Qn = 1;

var names = ["Scott", "Fred", "Elizabeth", "Kumar", "Harold", "Jensa", "Maria", "Beth", "Steve", "Harry", "Lucy", 
             "Teneala", "Henrietta", "Bernadette", "Delphinia", "Renea", "Paz", "Stephanie", "Sara", "Sarah", "Larry", 
             "Jerry", "Garry", "Gary"];

var praises = ["Good job!", "Way to go!", "That is correct!", "Yippee!", "Yeah!", "Excellent! Keep it up!", "Awesome"];
var sorry = ["Your answer does not match our answer. It could be in the different format. Is it simplified? Try again."];

function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
}

function loadQuestion(qn) {
    document.getElementById("Answer").innerHTML = "";
    document.getElementById("Response").value = "";
  if (qn == 1) {
  	
    var sides = [4,6,8,12,20];
    var side = randomElementOf(sides);
    var name1 = randomElementOf(names);
    var rollN = Math.floor(Math.random() * 8) + 3;
    var rolls =[];
    var owside = Math.floor(Math.random()*side)+1;

    question = name1 + " rolls a fair " + side + "-sided die " + rollN + " times. ";
    question += "The rolls were: ";
    for (i = 0; i< rollN; i++) {
      rolls.push(Math.floor(Math.random()*side)+1);
      question += rolls[i]; 
      if (i == rollN-1) {
      	question += ". ";
      } else if (i == rollN-2) {
      question += ", and "; 
      } else {
       question += ", "; 
      }
    }
    question += "What is the probability of rolling a " + owside + "?";
    question += "<br><br>Enter your answer as a fraction using the '/' symbol. i.e. 1/2.";
    answer = "1/" + side;
    explain = 'You can completely ignore the rolls. The probability does not depend on previous outcomes. ';
    explain += 'The key word here is "fair." In order for a dice to be fair, each outcome must have the same probabilty. ';
    explain += 'Rolling a ' + owside + ' is one outcome out of ' + side;
    explain += " possiblities. Therefore, the probability that you will roll a " + owside + " is 1/" + side + ".";
    
  
    kurl = "https://www.khanacademy.org/math/precalculus/prob-comb/basic-prob-precalc/e/probability_1";
    
  }
  document.getElementById("Question").innerHTML = question;
  var longKhanString = 'For more practice, visit <a href=\"' + kurl + '" target="_blank">' + kurl + '</a>';
  document.getElementById("Khan").innerHTML = longKhanString;
  
}
                 
function newQuestion() {
  Qn = Math.floor(Math.random()*totNumQuest)+1;
  //Qn = 1;
  loadQuestion(Qn);
}

function sameQuestion() {
  loadQuestion(Qn);
}

function hideWord() {
  document.getElementById("Response").value = "";
}

function showAnswer() {
  document.getElementById("Answer").innerHTML = answer;
}

function getExplain() {
    document.getElementById("Answer").innerHTML = explain;
}


function checkAnswer() {
  respo = document.getElementById("Response").value;
  if (respo == answer) {
    document.getElementById("Answer").innerHTML = randomElementOf(praises);
  } else {
    document.getElementById("Answer").innerHTML = randomElementOf(sorry);
  }
 }
  
newQuestion();
