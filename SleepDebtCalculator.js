function getSleepHours (day) {
  if(day == "monday") {
    return 8;
  } else if(day =="tuesday"){
    return 7.5;
  } else if(day =="wednesday"){
    return 9;
  } else if(day =="thursday"){
    return 6;
  } else if(day =="friday"){
    return 10;
  } else if(day == "saturday"){
    return 8;
  } else if(day =="sunday"){
    return 7;
  }
}

function getActualSleepHours() {
  const sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
  return sum;
}

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours > idealSleepHours) {
    console.log("You are sleeping " + (actualSleepHours-idealSleepHours) + " more hours than you need"); 
  } else if(actualSleepHours == idealSleepHours){
    console.log(`You are sleeping exactly what you need`);
  } else {
    console.log("You are sleeping " + (idealSleepHours - actualSleepHours) + " less hours than you need"); 
  }
}
calculateSleepDebt();
