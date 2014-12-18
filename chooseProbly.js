function chooseProbly() {
  
  currentFrom = chosenData["a"];
  
  for (possibleTo in currentFrom) {
    rangeCount += currentFrom[possibleTo];
    property = possibleTo;
    toRange[property] = rangeCount;
  }
  
  randomNumber = Math.random();
  
  for (possibilities in toRange) {
    if (Number(toRange[possibilities]) - randomNumber >= 0) {
      if (chosenTo == "") {
        chosenTo = possibilities;
        difference = Number(toRange[possibilities]) - randomNumber;
      } else if (Number(toRange[possibilities]) - randomNumber < difference) {
        chosenTo = possibilities;
        difference = Number(toRange[possibilities]) - randomNumber;
      }
    }
  }
  
  difference = 1;
  toRange = {};
  rangeCount = 0;
}
