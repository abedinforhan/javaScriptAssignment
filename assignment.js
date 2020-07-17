
 var result1 = feetTomile(5);
 console.log(result1);

var result2 = woodCalculator(1, 1, 1);
console.log(result2);

var result3 = brickcalculator(15);
 console.log(result3);

var result4 = tinyFriend(['Sadia', 'Tanha', 'Nahida', 'Tamanna', 'Nishi', 'Mumu', 'Anika', 'Nigar']);
 console.log(result4);


function feetTomile(inputFeet) {

  if (inputFeet > 0) {

    var mile =((inputFeet * 0.000189394));  //feet to mile conversion
    return mile;
  }

  else {
    return "Input Can not be negative or Zero!!!";
  }

}

//wood calculating Function
function woodCalculator(chairNum, tableNum, bedNum) {

  if ((chairNum >= 0) && (tableNum >= 0) && (bedNum >= 0)) {

    if ((chairNum == 0) && (tableNum == 0) && (bedNum == 0)) {
      return "You have entered All Zero!please give a input";
    }

    else {
      var chairWood = 1 * chairNum;
      var tableWood = 3 * tableNum;
      var bedWood = 5 * bedNum;

      var totalWood = chairWood + tableWood + bedWood;
      return totalWood;
    }
  }

  else {
    return "You have entered  negative input";
  }
}

// Brick Calculating Function

function brickcalculator(input) {
  eachFeet = 1000;  //bricks needed for each feet
  if (input <= 0) {
    return "Input can not be negative or zero!!"
  }

  else if (input > 0 && input <= 10) {
    var Total = (input * 15 * eachFeet);
    return Total;
  }

  else if (input > 10 && input <= 20) {
    var calc1 = (input - 10) * 12 * eachFeet; //calculting 11-20
    var Total = (10 * 15 * eachFeet) + calc1; //calculating 1-10 and add 
    return Total;
  }
  else {
    var calc1 = (input - 20) * 10 * eachFeet;
    var Total = (10 * 15 * eachFeet + 10 * 12 * eachFeet) + calc1;
    return Total;
  }
}

//Tiny friend calculating Function

function tinyFriend(inArr) {

  var tempLen = inArr[0].length;
  
  for (var i = 0; i < inArr.length; i++) {

    if (inArr[i].length <= tempLen) {
      tempLen = inArr[i].length;
      var index = i;
    }
  }
  return inArr[index];
}

