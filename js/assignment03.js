let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");
elem[3]
  = document.getElementById("3");
elem[4]
  = document.getElementById("4");
elem[5]
  = document.getElementById("5");
elem[6]
  = document.getElementById("6");
elem[7]
  = document.getElementById("7");
elem[8]
  = document.getElementById("8");
elem[9]
  = document.getElementById("9");
elem[10]
  = document.getElementById("10");
elem[11]
  = document.getElementById("11");
elem[12]
  = document.getElementById("12");
elem[13]
  = document.getElementById("13");
elem[14]
  = document.getElementById("14");
elem[15]
  = document.getElementById("15");
elem[16]
  = document.getElementById("16");
elem[17]
  = document.getElementById("17");
elem[18]
  = document.getElementById("18");



// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]); over(elem[1]);};
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]); over(elem[2]);};
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]); over(elem[3]);};
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]); over(elem[4]);};
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]); over(elem[5]);};
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]); over(elem[6]);};
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]); over(elem[7]);};
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]); over(elem[8]);};
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]); over(elem[9]);};
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]); over(elem[10]);};
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]); over(elem[11]);};
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]); over(elem[12]);};
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]); over(elem[13]);};
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]); over(elem[14]);};
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]); over(elem[15]);};
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]); over(elem[16]);};
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]); over(elem[17]);};
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]); over(elem[18]);};

// assign a function to the - button
elem[1].children[4].children[1].onclick 
  = function(){dec1(elem[1]); over(elem[1]);};
elem[2].children[4].children[1].onclick 
  = function(){dec1(elem[2]); over(elem[2]);};
elem[3].children[4].children[1].onclick 
  = function(){dec1(elem[3]); over(elem[3]);};
elem[4].children[4].children[1].onclick 
  = function(){dec1(elem[4]); over(elem[4]);};
elem[5].children[4].children[1].onclick 
  = function(){dec1(elem[5]); over(elem[5]);};
elem[6].children[4].children[1].onclick 
  = function(){dec1(elem[6]); over(elem[6]);};
elem[7].children[4].children[1].onclick 
  = function(){dec1(elem[7]); over(elem[7]);};
elem[8].children[4].children[1].onclick 
  = function(){dec1(elem[8]); over(elem[8]);};
elem[9].children[4].children[1].onclick 
  = function(){dec1(elem[9]); over(elem[9]);};
elem[10].children[4].children[1].onclick 
  = function(){dec1(elem[10]); over(elem[10]);};
elem[11].children[4].children[1].onclick 
  = function(){dec1(elem[11]); over(elem[11]);};
elem[12].children[4].children[1].onclick 
  = function(){dec1(elem[12]); over(elem[12]);};
elem[13].children[4].children[1].onclick 
  = function(){dec1(elem[13]); over(elem[13]);};
elem[14].children[4].children[1].onclick 
  = function(){dec1(elem[14]); over(elem[14]);};
elem[15].children[4].children[1].onclick 
  = function(){dec1(elem[15]); over(elem[15]);};
elem[16].children[4].children[1].onclick 
  = function(){dec1(elem[16]); over(elem[16]);};
elem[17].children[4].children[1].onclick 
  = function(){dec1(elem[17]); over(elem[17]);};
elem[18].children[4].children[1].onclick 
  = function(){dec1(elem[18]); over(elem[18]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "1";
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

// create an dec1 function 
function dec1 (elem) {
  if(elem.children[2].innerHTML <= "1") {
    elem.children[2].innerHTML = "-";
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

//create an over function 
function over (elem) {
  let currentPar = elem.children[1].innerHTML;
  let currentScore = elem.children[2].innerHTML;
  if((currentScore == "-") || (currentScore < 0)) 
    elem.children[3].innerHTML = "-";
  else {
    currentPar = Number.parseInt(currentPar)
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore-currentPar;
  }
}
