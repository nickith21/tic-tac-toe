const NflTeams = ({ team1Main, team2Main }) => {
  const [teamNum1, setTeam1] = React.useState("");
  const [teamNum1Assigned, setTeam1Assigned] = React.useState(true);
  const [teamNum2, setTeam2] = React.useState("");
  const [teamNum2Assigned, setTeam2Assigned] = React.useState(true);

  const assignTeam = (e) => {
    if (teamNum1Assigned) {
      assignToTeam1(e);
      setTeam1Assigned(false);
    } else if (teamNum2Assigned) {
      assignToTeam2(e);
      setTeam2Assigned(false);
    } else {
      return;
    }
  };

  const assignToTeam1 = (e) => {
    setTeam1(e.target.src);
    e.target.className = "bordered";
  };

  team1Main(teamNum1);

  const assignToTeam2 = (e) => {
    setTeam2(e.target.src);
    e.target.className = "bordered";
  };

  team2Main(teamNum2);

  return (
    <div>
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/los-angeles-rams-2020-logo-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-arizona-cardinals-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-atlanta-falcons-team-logo-2-300x300-2.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-baltimore-ravens-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-buffalo-bills-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-carolina-panthers-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-chicago-bears-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-cincinnati-bengals-team-logo-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-cleveland-browns-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-dallas-cowboys-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-denver-broncos-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-detroit-lions-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-green-bay-packers-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-houston-texans-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-indianapolis-colts-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-jacksonville-jaguars-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-kansas-city-chiefs-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-los-angeles-chargers-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-miami-dolphins-logo-2018-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-minnesota-vikings-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-new-england-patriots-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-new-orleans-saints-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-new-york-giants-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-new-york-jets-team-logo-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-oakland-raiders-team-logo-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-philadelphia-eagles-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-pittsburgh-steelers-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-san-francisco-49ers-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-seattle-seahawks-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/nfl-tennessee-titans-team-logo-2-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/tampa-bay-buccaneers-2020-logo-300x300.png"
      />
      <img
        className="logos"
        onClick={assignTeam}
        src="./img/NFL Logos/washington-commanders-logo-300x300.png"
      />
    </div>
  );
};
