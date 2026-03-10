const RaceCard = ({ race }) => {
  if (!race) return null;

  return (
    <>
      <div className="race-card d-flex flex-column align-items-center justify-content-center rounded-3">
        <h2 className="">Round {race.round}</h2>
        {race.raceName && <p className="fs-5">{race.raceName}</p>}
        {race.circuit && (
          <p className="font-text fs-5 text-center">
            <strong>Circuit:</strong> {race.circuit.circuitName}. <br />{" "}
            {race.circuit.city},{" "}
            <strong className="text-white">{race.circuit.country}</strong>
          </p>
        )}
        <p className="font-text fs-4">
          <strong className="">Winner: </strong>
          <span>
            {race.winner
              ? `${race.winner.name}  ${race.winner.surname}`
              : "TBD"}
            {/* <br />
            <strong>Country: {race.winner?.country ?? "TBD"}</strong> */}
          </span>
        </p>
        <p className="font-text fs-4">
          <strong>Team Winner: </strong>
          <span>
            {race.teamWinner ? `${race.teamWinner.teamName}` : "TBD"}
            {/* <br />
            <strong>Country: {race.winner?.country ?? "TBD"}</strong> */}
          </span>
        </p>
        {/* {race.teamWinner && (
          <p className="font-text fs-4">
            <strong className="">Team Winner:</strong>{" "}
            <span>{race.teamWinner.teamName ?? "TBD"}</span>
          </p>
        )} */}
      </div>
    </>
  );
};

export default RaceCard;
