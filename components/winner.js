// this shows all of the winning combinations
const win = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const checkForWinner = (gameState, team1Team, team2Team) => {
  if (gameState.length < 5)
    return (
      <>
        <img className="winner" src={team1Team} />
      </>
    );

  let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
  });

  p0 = p0.map((item) => item.id);

  let px = gameState.filter((item) => {
    if (item.player == 1) return item;
  });

  px = px.map((item) => item.id);

  if (p0 != null && px != null) {
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });

    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }

  // what should this return instead of 'player o'
  if (win0.length > 0)
    return (
      <>
        <img className="winner" src={team1Team} />
      </>
    );
  // what should this return instead of 'player x'
  else if (winX.length > 0)
    return (
      <>
        <img className="winner" src={team2Team} />
      </>
    );

  // where is this return value going
  return "";
};

// where is isSuperset being called and what does set and subset refer to
function isSuperset(set, subset) {
  for (let elem of subset) {
    // what does .has mean
    if (!set.has(elem)) {
      // where is this returning to?
      return false;
    }
  }

  // where is this returning to?
  return true;
}
