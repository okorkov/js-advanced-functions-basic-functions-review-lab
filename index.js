
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(p="*") {
  return function(param="special") {
    return `You are ${p}${param}${p}!`
  }
}


const Calculator = {
  'add': function() {return 1 + 3;},
  'subtract': function() {return 1 - 3;},
  'multiply': function() {return 1 * 3;},
  'divide': function() {return 10 / 5;}
};

function actionApplyer(start, arrayOfFunctions) {
  if(arrayOfFunctions.length === 0) {return start;}
    for(const fn of arrayOfFunctions) {
      start = fn(start);
    }
  return start;
}
