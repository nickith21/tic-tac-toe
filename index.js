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
  const [state, setState] = React.useState([]);
  let status = checkForWinner(state, team1Team, team2Team);

  // take in the data from the child and return the nextPlayer
  const newState = (id) => {
    let thePlayer = player;
    // changes the state based on the player state variable
    setPlayer(state[id]);
    // set the state variable to be evaluated for a win or loss
    setState([...state, { id: id, player: player }]);
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
          {renderSquare(0)}
          {renderSquare(1)}
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
