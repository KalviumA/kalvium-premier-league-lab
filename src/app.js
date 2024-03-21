//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

console.log(players);

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// createManager(players)

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [];

//write your function here
function createFormation(arr) {
  return {
    defender: arr[0],
    midfield: arr[1],
    forward: arr[2],
  };
}
// console.log(createFormation(formation))
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter((ele) => ele.debut === year);
}

// console.log(filterByDebut(players,2011))

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter((ele) => ele.position === position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  return players.filter((ele) =>
    ele.awards.some((ele) => ele.name === awardName)
  );
}
console.log(filterByAward("The Best FIFA Men's Player"));

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(
    (ele) =>
      ele.awards.filter((ele) => ele.name === awardName).length === noOfTimes
  );
}

// console.log(filterByAwardxTimes(players, "The Best FIFA Men's Player", 2));

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let filtered = filterByAward(awardName);

  return filtered.filter((ele) => ele.country === country);
}

// console.log(filterByAwardxCountry("The Best FIFA Men's Player","Croatian"))

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(
    (ele) =>
      ele.awards.length >= noOfAwards && ele.team === team && ele.age < age
  );
}
// console.log(filterByNoOfAwardsxTeamxAge(3, "Real Madrid", 34))

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  return players.sort((a, b) => b.age - a.age);
}

// console.log(SortByAge())

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  return players.filter(ele => ele.team === team)
    .sort((a, b) => {
      b.awards.length - a.awards.length;
    });
  // return players;
}

console.log(FilterByTeamxSortByNoOfAwards(players, "Real Madrid"));
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  return players.filter((ele) => {
    ele.country === country &&
      ele.awards.filter((ele) => ele.name === awardName).length === noOfTimes;
  }).sort((a,b)=>{
    a.name.localeCompare(b.name)
  })
}
console.log(
  SortByNamexAwardxTimes(players, "The Best FIFA Men's Player", "Croatian")
);


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
return players.filter(ele=>ele.age>age).sort((a,b)=>a.name.localeCompare(b.name))
}
console.log( SortByNamexOlderThan(31))