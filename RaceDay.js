let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30am, your race number is ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00am, your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30, your race number is ${raceNumber}`);
} else {
  console.log('Go see the registration desk');
}
