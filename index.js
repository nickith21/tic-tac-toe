const Square = ({ id, newState }) => {
  const [status, setStatus] = React.useState(null);
  const [empty, setEmpty] = React.useState(true);
  const teamImg = [
    <img src="./img/NFL Logos/los-angeles-rams-2020-logo.png"></img>,
    <img src="./img/NFL Logos/nfl-atlanta-falcons-team-logo-2-300x300-2.png"></img>,
  ];

  let palet = ["red", "blue", "green"];

  const getRandomColor = () => {
    return palet[Math.floor(Math.random() * 3)];
  };

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
  const [player, setPlayer] = React.useState(0);
  // initiate the state to [] to capture data returned from the child
  const [state, setState] = React.useState(Array(9).fill(null));
  let status = `Player ${player + 1}`;
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
    return <Square id={i} newState={newState}></Square>;
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
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
      <img src="./img/NFL Logos/los-angeles-rams-2020-logo-300x300.png" />
      <img src="./img/NFL Logos/nfl-arizona-cardinals-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-atlanta-falcons-team-logo-2-300x300-2.png" />
      <img src="./img/NFL Logos/nfl-baltimore-ravens-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-buffalo-bills-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-carolina-panthers-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-chicago-bears-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-cincinnati-bengals-team-logo-300x300.png" />
      <img src="./img/NFL Logos/nfl-cleveland-browns-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-dallas-cowboys-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-denver-broncos-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-detroit-lions-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-green-bay-packers-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-houston-texans-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-indianapolis-colts-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-jacksonville-jaguars-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-kansas-city-chiefs-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-los-angeles-chargers-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-miami-dolphins-logo-2018-300x300.png" />
      <img src="./img/NFL Logos/nfl-minnesota-vikings-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-new-england-patriots-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-new-orleans-saints-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-new-york-giants-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-new-york-jets-team-logo-300x300.png" />
      <img src="./img/NFL Logos/nfl-oakland-raiders-team-logo-300x300.png" />
      <img src="./img/NFL Logos/nfl-philadelphia-eagles-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-pittsburgh-steelers-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-san-francisco-49ers-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-seattle-seahawks-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/nfl-tennessee-titans-team-logo-2-300x300.png" />
      <img src="./img/NFL Logos/tampa-bay-buccaneers-2020-logo-300x300.png" />
      <img src="./img/NFL Logos/washington-commanders-logo-300x300.png" />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
