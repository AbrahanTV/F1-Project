const RaceCard = ({ race }) => {
  if (!race) return null;

  const raceDate = race.schedule?.race?.date
    ? new Date(race.schedule.race.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <div className="race-card">
      <div className="race-card-header">
        <p className="race-card-round text-white">Round {race.round}</p>
        {raceDate && <p className="race-card-date text-white">{raceDate}</p>}
      </div>

      {race.raceName && <p className="race-card-name">{race.raceName}</p>}

      {race.circuit && (
        <div className="race-card-circuit">
          <p className="race-card-circuit-name ">{race.circuit.circuitName}</p>
          <p className="race-card-circuit-location text-white">
            {race.circuit.city}, {race.circuit.country}
          </p>
        </div>
      )}

      <div className="race-card-divider" />

      <div className="race-card-results">
        <div className="result-row">
          <span className="result-label">Winner</span>
          <span className="race-card-winner-name">
            {race.winner ? `${race.winner.name} ${race.winner.surname}` : "TBD"}
          </span>
        </div>
        <div className="result-row">
          <span className="result-label">Constructor</span>
          <span className="result-value">
            {race.teamWinner ? race.teamWinner.teamName : "TBD"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RaceCard;
