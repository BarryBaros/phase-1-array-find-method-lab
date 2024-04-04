// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(record) {  //DEFINE A FUNCTION AND GIVE IT A PARAMETER(record)
    const winningYear = record.find(game => game.result === "W");   //WRITE AN ARROW FUNCTION & DECLARE A CONSTANT VARIABLE, CALL THE find() METHOD ON THE record ARRA,
    return winningYear ? winningYear.year : undefined;  //return the year property of the winningYear,  If no win is found (winningYear is undefined)
}
console.log(superbowlWin(record));