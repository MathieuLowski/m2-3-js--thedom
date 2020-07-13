// Preset values
const FROGS = 3;

const track = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
//We create 3 list element (1 for each racer) and appending them fo rendering in server
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  let lane = document.createElement("li"); //create the lane
  track.appendChild(lane);
  let number = document.createElement("span"); //create lane number
  number.innerText = laneCount; //adds li number at begining. If FROGS++ === li++
  lane.appendChild(number);
  lane.id = `lane-${laneCount}`;
}

let racers = [];
for (let i = 0; i < FROGS; i++) {
  const newFrog = frogStable[i]; //accessing frogStable file linked is .html
  racers.push(newFrog); //adds frog at the end of racers array
}
console.log(racers);

racers.forEach(function (racer, id) {
  let newFrog = document.createElement("span");
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add("frog");
  newFrog.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);
  recers[id].progress = 0;
  racers[is].lane = `frog-${id + 1}`;
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(frogProgress);
});
racers.forEach(function (racer) {
  // call this function once for each racer.
  racingFrog(racer);
});
