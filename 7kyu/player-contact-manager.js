// You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

// The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

// The method should return an empty array if the argument passed is an empty string or nil/None/null.

//Solution
function playerManager(players) {
  let output = [];
  if (typeof players === "string" && players.trim().length !== 0) {
    const trimmedArray = players.split(',').map(item => item.trim());
    for (let i = 0; i < trimmedArray.length - 1; i += 2) {
      output.push({
        player: trimmedArray[i],
        contact: Number(trimmedArray[i + 1])
      });
    }
  }

  return output;
}