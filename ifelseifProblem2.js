let a = 3;

function readNumberForWeekdays(a){  
if (a == 1){
console.log("Sunday");
} else if (a == 2) {
  console.log("Monday");
} else if (a == 3) {
  console.log("Tuesday");
}else if (a == 4) {
  console.log("Wednesday");
}else if (a == 5) {
  console.log("Thursday");
}else if (a == 6) {
  console.log("Friday");
}else if (a == 7) {
  console.log("Saturday");
}else {
  console.log("Invalid Input");
}
}

readNumberForWeekdays(3);