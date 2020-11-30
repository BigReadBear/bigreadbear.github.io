// --- global variables ---

var loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
  ]; 
  let loanWithInterest = 0;
  let int = 0;
  
  // --- function: loadDoc() ---
  
  function loadDoc() {
    
    // pre-fill defaults for first loan year
    // change all the html selectors to jquery selectors and add the appropiate jquary attributes 
    var defaultYear = loans[0].loan_year;
    $("#loan_year0" + 1).val(defaultYear++);
    var defaultLoanAmount = loans[0].loan_amount;
    $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
    var defaultInterestRate = loans[0].loan_int_rate;
    $("#loan_int0" + 1).val(defaultInterestRate);
    var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
    
    // pre-fill defaults for other loan years using jquery and add the appropiate attributes 
    for(var i=2; i<6; i++) {
      $(`#loan_year0${i}`).val(defaultYear++);
      $(`#loan_year0${i}`).attr("disabled","true");
      $(`#loan_year0${i}`).css({"backgroundColor":"grey","color":"white"});
      $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
      $(`#loan_int0${i}`).val(defaultInterestRate);
      $(`#loan_int0${i}`).attr("disabled","true");
      $(`#loan_int0${i}`).css({"backgroundColor":"grey","color":"white"});
      loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
      $(`#loan_bal0` + i).text(toMoney(loanWithInterest));
      } // end: "for" loop
    
    // all input fields: select contents on focus
    $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow"); //focussed field set to yellow
    }); 
    $("input[type=text]").blur(function() { 
      $(this).css("background-color", "white"); //out of focus object sit to white
      updateLoansArray();
    });
    
    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();

  } // end: function loadDoc()
  
  //fucntion to update the form, aka the values displayed in the form
  function updateForm() {
    loanWithInterest = 0;
    let total = 0;
    //loops through the text fields
    for(i=1;i<6;i++){
      $(`#loan_year0${i}`).val(loans[i-1].loan_year); //set value to previous 
      let amt = loans[i-1].loan_amount; 
      $(`#loan_amt0${i}`).val(amt);
      total+= parseFloat(amt); 
      $(`#loan_int0${i}`).val(loans[i-1].loan_int_rate);
      loanWithInterest = (loanWithInterest + parseFloat(amt)) * (1 + loans[0].loan_int_rate);

      $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    }
    int = loanWithInterest-total;
    $(`#loan_int_accrued`).text(toMoney(int)); //loan interest accrued, bottom right of the form to money 
  }
  
//existing function needed to round ints to 2 decimals needed for the tomoney function 
  function toComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

//simple function needed to change values to monetary values, which i created because otherwise the numbers were all over the place and it looked hideous
 function toMoney (value) {
    return `\$${toComma(value.toFixed(2))}`;
  }
  
  //function to validate and update the form if correct values are entered
  function updateLoansArray() {
    let valid = true; //initialize boolean to store valid or invalid 
    //regular expressions
    let year = /^(19|20)\d{2}$/; //only allow the last two centuries to be inputted
    let amt = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //only positive integers and 2 or 1 decimal number
    let int = /^(0|)+(.[0-9]{1,5})?$/; //only allow decimals up to 5 points

    //test the input field witht he regexpress, set to valid is true when valid otherwise invalid bgcolor is red 
    if(!year.test($(`#loan_year01`).val())){
      valid = false;
      $('#loan_year01').css("background-color", "red");
    }
    //test the input field witht he regexpress, set to valid is true when valid otherwise invalid bgcolor is red 
    //different than the others because we can input all of the filed in this colllumn thus we need to check every input field of the loan amount
    //hence the for loop
    for (i = 1; i < 6; i++) {
      if(!amt.test($(`#loan_amt0${i}`).val())){
        valid = false;
        $('#loan_amt0${i}').css("background-color", "red");
      } 
    }
    //test the input field witht he regexpress, set to valid is true when valid otherwise invalid bgcolor is red 
    if(!int.test($(`#loan_int01`).val())){
      valid = false;
      $('#loan_int01').css("background-color", "red");
    }

    //when all the input fields are correct, update the loansarray and store correct values
    if(valid){
      loans[0].loan_year = parseInt($("#loan_year01").val());
      for(var i=1; i<5; i++) {
        loans[i].loan_year = loans[0].loan_year + i;
      }
      for(i = 1; i<6; i++){
        let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); //fixed to two decimal points, like real money
        loans[i-1].loan_amount = amt;
      }
      let rate = parseFloat($("#loan_int01").val());
      for(i=0; i<5; i++){
        loans[i].loan_int_rate = rate;
      }
      //then call the updateform function so we can actually see what we stored
      updateForm();
    }
  }

//function to save the form, has an appropriate button
 function saveForm() {
   localStorage.setItem('form', JSON.stringify(loans));
 }

//fucntion to load the form, has an appropriate button
 function loadForm() {
   //if there's something stored
  if(localStorage.getItem('form') != null){
    //update loans array as the stored array
     loans = JSON.parse(localStorage.getItem('form'));
    //display the new form
     updateForm();
    //otherwise display an appropriate alert 
  } else {
     alert('Nothing to save');
  }
 }

 
//Angular to populate payment table 
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  //initiliaze scopes
  $scope.payments =[]; //payment table 
  $scope.lastPaymentRow = []; //the last row of the table 
  //fucntion to populate table which can be called using ng 
  $scope.populate = function () {
    let total = loanWithInterest; ///loan total retrieved from global variable 
    let interest = loans[0].loan_int_rate; //interest rate
    let r = interest / 12; //interets per month needed for the formula
    let n = 11; //total years paying, n = n+1, needed for formula
    //loan payment formula retrieved from https://www.calculatorsoup.com/calculators/financial/loan-calculator.php
    let paymentFormula = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    //loop that populates the payments table, for 10 years, 0 to 10
    for (let i = 0; i < 10; i++) {
      total -= paymentFormula; //payment per year - total 
      let int = total * (interest); //new interest because there is a new total
      //store payment per year in the table
      $scope.payments[i]={
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(paymentFormula), 
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      };
    }
    //last row of the table  aside because we have to said some values to 0 now because they are no longer applicable, this also makes setting the bgcolor easier because i have seperate scope now 
    //and set payment to remaining total
    $scope.lastPaymentRow[0] = {
      "lyear":loans[4].loan_year + 11,
      "lpayment": toMoney(total),
      "lamt": toMoney(0),
      "lye":toMoney(0),
    };
    //style to set the bgcolor to yellow when called, in this case the last row
    $scope.lastPaymentColor = {
    "background-color" : "yellow"
    };
  };
});
