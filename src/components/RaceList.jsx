import RaceCard from "./RaceCard";

export default function RaceList({ races }) {
  if (!races || races.length === 0) return <p>Loading season races...</p>;

  return (
    <div className="race-grid d-flex justify-content-center flex-wrap gap-4">
      {races.map((race) => (
        <RaceCard key={race.round} race={race} />
      ))}
    </div>
  );
}
