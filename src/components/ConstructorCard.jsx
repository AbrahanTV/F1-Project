const ConstructorCard = ({ team, teamColor }) => {
  if (!team) return null;

  const color = teamColor ? `#${teamColor}` : "#e8002d";

  return (
    <div className="constructor-card" style={{ "--team-color": color }}>
      <p className="constructor-nationality">{team.teamNationality}</p>
      <h2 className="constructor-name">{team.teamName}</h2>

      <div className="constructor-divider" />

      <div className="constructor-stats">
        <div className="constructor-stat">
          <span className="constructor-stat-value">
            {team.firstAppeareance ?? "—"}
          </span>
          <span className="constructor-stat-label">First Entry</span>
        </div>
        <div className="constructor-stat">
          <span className="constructor-stat-value">
            {team.constructorsChampionships ?? "0"}
          </span>
          <span className="constructor-stat-label">Constructors Titles</span>
        </div>
        <div className="constructor-stat">
          <span className="constructor-stat-value">
            {team.driversChampionships ?? "0"}
          </span>
          <span className="constructor-stat-label">Drivers Titles</span>
        </div>
      </div>
    </div>
  );
};

export default ConstructorCard;
