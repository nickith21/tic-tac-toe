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

const Board = () => {
  // initiate the player state to 1

  const [team1Team, setTeam1Team] = React.useState("");
  const [team2Team, setTeam2Team] = React.useState("");

  const team1Main = (team) => {
    setTeam1Team(team);
  };

  const team2Main = (team) => {
    setTeam2Team(team);
  };

  const [player, setPlayer] = React.useState(0);
  // initiate the state to [] to capture data returned from the child
  const [state, setState] = React.useState(Array(9).fill(null));
  let status = `Team ${player + 1}`;
  // const winner = checkWinner(state);
  // if (winner != null) `Player ${player} wins!`;
  // take in the data from the child and return the nextPlayer
  const newState = (idOfSquare) => {
    let thePlayer = player;
    // changes the state based on the player state variable
    state[idOfSquare] = player;
    // set the state variable to 0 or 1 or null
    setState(state);
    // calculate the next player based on a modulus
    let nextPlayer = (player + 1) % 2;
    // set the player state variable to the next player that was just calculated
    setPlayer(nextPlayer);
    // return the nextPlayer variable which was created here and then passed to the child via the return statement
    return thePlayer;
  };
  const renderSquare = (i) => {
    return (
      <Square
        id={i}
        newState={newState}
        team1T={team1Team}
        team2T={team2Team}
      ></Square>
    );
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <NflTeams team1Main={team1Main} team2Main={team2Main} />
      <div id="info">
        <h1>{status}</h1>
      </div>
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(1)}
          {renderSquare(0)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <h1 onClick={refreshPage}>Restart</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
