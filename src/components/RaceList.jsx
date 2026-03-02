import RaceCard from "./RaceCard";

export default function RaceList({ races }) {
  if (!races || races.length === 0) return <p>Loading season races...</p>;

  return (
    <div className="race-grid">
      {races.map((race) => (
        <RaceCard key={race.round} race={race} />
      ))}
    </div>
  );
}
