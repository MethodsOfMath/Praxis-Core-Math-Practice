var answer = "blank";  
var totNumQuest = 2;
var Qn = 1;

var names = ["Scott", "Fred", "Elizabeth", "Kumar", "Harold", "Jensa", "Maria", "Beth", "Steve", "Harry", "Lucy", 
             "Teneala", "Henrietta", "Bernadette", "Delphinia", "Renea", "Paz", "Stephanie", "Sara", "Sarah", "Larry", 
             "Jerry", "Garry", "Gary"];

var praises = ["Good job!", "Way to go!", "That is correct!", "Yippee!", "Yeah!", "Excellent. Keep it up!"];
var sorry = ["Your answer does not match our answer. It could be in the different format. Is it simplified? Try again.","Try again."];
var vardvars = ['x','y','z','a','b','c','k','m','n'];
var mc = ['A','B','C','D','E'];

function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
} // close function

function fillInTheBlank() {
   var thingie = '<textarea id="Response"></textarea>';
   thingie += '<button onclick="checkAnswer(99)">Submit</button>';
  document.getElementById("AnswerArea").innerHTML = thingie;
} // close function

function multipleChoice() {
   var thingie = "";
   for (i = 0; i < mc.length; i++) {
    thingie += '<button onclick="checkAnswer('+ i + ')">' + mc[i] + '</button>';
   } // close for
  document.getElementById("AnswerArea").innerHTML = thingie;
} // close function

fuction equation2(y,A,m) {
    var ySpot = Math.floor(Math.random()*4)+1;	// position of variable in expression		
    var eq = (";

    if (Math.random() > 0.5) {				// negative sign
      eq += '-';
    } // close if

    line[i] += (Math.floor(Math.random()*A)+m).toString();	// number 1

    if (ySpot == 1) {							// first variable positon
      eq += y;
    } // close if

    if (Math.random() > 0.5) {				// plus or minus
      eq += '-';
    } else {
      eq += '+';
    }

    line[i] += (Math.floor(Math.random()*A)+m).toString(); 	// number 2

    if (ySpot == 2) {							// second variable position
      eq += y;
    }

    line[i] += ")(";

    // negative sign	
    if (Math.random() > 0.5) {				
      eq += '-';
    }

    eq += (Math.floor(Math.random()*A)+m).toString(); 	// number 3
    if (ySpot == 3) {							// third variable position
      eq += y;
    }

    // plus or minus            
    if (Math.random() > 0.5) {				
      eq += '-';
    } else {
      eq += '+';
    }

    eq += (Math.floor(Math.random()*A)+m).toString();	//  number 4
    if (ySpot == 4) {							// fourth variable spot
      eq += y;
    }
  
  eq += ")"; 
  return eq;
}

function loadQuestion(qn) {
    document.getElementById("Answer").innerHTML = "";
  if (qn == 1) {
  	fillInTheBlank();
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
      } // close if else if
    } // close for
    question += "What is the probability of rolling a " + owside + "?";
    question += "<br><br>Enter your answer as a fraction using the '/' symbol. i.e. 1/2.";
    
    answer = "1/" + side;
    
    explain = 'You can completely ignore the rolls. The probability does not depend on previous outcomes. ';
    explain += 'The key word here is "fair." In order for a dice to be fair, each outcome must have the same probabilty. ';
    explain += 'Rolling a ' + owside + ' is one outcome out of ' + side;
    explain += " possiblities. Therefore, the probability that you will roll a " + owside + " is 1/" + side + ".";
    
    kurl = "https://www.khanacademy.org/math/precalculus/prob-comb/basic-prob-precalc/e/probability_1";
    
  }  else if (qn == 2) {
       multipleChoice();
       answer = randomElementOf(mc);
       var y = randomElementOf(vardvars);
       var a = Math.floor(Math.random()*9)+1;
       var b = Math.floor(Math.random()*9)+1;		 
       var m = Math.floor(Math.random()*9)+1;		// multiple
       var D = a+b;		// divisor
       var A = D*m;	  // Big number	
       var line = mc;	 // multiple choice lines
       var aS = "";	// Answer Line
       var ySpot = 1;		// position of variable in expression
       var sign = "+";

        // pick sign for answer
        if (Math.random() > 0.5) {
          sign = "+";
        } else { 
          sign = "-"; 
        } // close if else
    
        // if sign is positive, do not need negative signs before the numbers. 
        if (sign == "+") {
          aS = "(" + a + sign + b + ")(" m + sign + m + "/" + D + ")";
        } else {
          aS = "(" + sign+ a + sign + b + ")(" + sign + m + sign + m + y + "/" + D + ")";
        } // close if else

        for (i = 0; i<line.length; i++) {
          if (answer == mc[i]) {
            line[i] = "[" + mc[i] + "] " + aS;
          } else {
            line[i] = "[" + mc[i] + "] " + equation2(y,A,m);
          }
        }

        question = "Which expression equals " + A + sign + m + y + " " + randomElementOf(allThings); 
        question += " values of " + y + "?<br><br>";

        for (i = 0; i < line.length; i++) {
          question += line[i] + "<br><br>";
        }
        kurl = "https://www.khanacademy.org/math/algebra/introduction-to-algebra/alg1-equivalent-expressions/e/";
        kurl += "equivalent-forms-of-expressions-1";

        explain = "You do not necessarily need to use FOIL. Since there are no variables in one set of the parentheses, ";
        explain += "You can simplify that first. Then you would only need to distribute the sum or difference. Note that ";
        explain += "we need a term with " + m + y + ". We would need to divide by " + D + " and multiply by " + m;
        explain += " to get " + m + y + " in choice " + answer ". The " + y;
        explain += " term in the other options ends up being too large.";
    }
  
  document.getElementById("Question").innerHTML = question;
  var longKhanString = 'For more practice, visit <a href=\"' + kurl + '" target="_blank">' + kurl + '</a>';
  document.getElementById("Khan").innerHTML = longKhanString;
}
                 
function newQuestion() {
  Qn = Math.floor(Math.random()*totNumQuest)+1;
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


function checkAnswer(n) {
  if (n == 99) {
  respo = document.getElementById("Response").value;
  } else {
    respo = mc[n];
  }
  if (respo == answer) {
    document.getElementById("Answer").innerHTML = randomElementOf(praises);
  } else {
    if (n==99) {
    document.getElementById("Answer").innerHTML = sorry[0];
    } else {
      document.getElementById("Answer").innerHTML = sorry[1];
    }
  }
 }
  
newQuestion();
