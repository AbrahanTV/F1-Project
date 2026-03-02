/* export default function RaceCard({ race }) {
  if (!race) return null;

  console.log("RACE OBJECT:", race);

  const raceDate =
    race.date && race.time ? new Date(`${race.date}T${race.time}`) : null;

  return (
    <div className="race-card">
      <h2>
        Round {race.round} - {race.raceName}
      </h2>

      <p>
        <strong>Circuit:</strong> {race.circuit?.circuitName}
      </p>

      <p>
        <strong>Location:</strong> {race.circuit?.location?.locality},{" "}
        {race.circuit?.location?.country}
      </p>

      <p>
        <strong>Date:</strong> {raceDate ? raceDate.toLocaleString() : "TBA"}
      </p>
    </div>
  );
}
 */

const RaceCard = ({ race }) => {
  if (!race) return null;

  const raceDate = race.date;

  return (
    <>
      <div className="race-card">
        <h1>Round {race.round}</h1>
      </div>
    </>
  );
};

export default RaceCard;
