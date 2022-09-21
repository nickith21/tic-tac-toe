const Square = ({ id, newState, team1T, team2T }) => {
  const [status, setStatus] = React.useState(null);
  const [empty, setEmpty] = React.useState(true);

  const teamImg = [<img src={team1T}></img>, <img src={team2T}></img>];

  return (
    <button
      // do the following every time a square is clicked
      onClick={(e) => {
        if (empty === true) {
          setEmpty(false);
          // assign the return value of newState in the parent to the variable nextPlayer
          let nextPlayer = newState(id);
          // set the status to nextPlayer
          setStatus(nextPlayer);
        }
      }}
    >
      {/* // change the X or O based on the player which is 1 or 0 */}
      {teamImg[status]}
    </button>
  );
};
