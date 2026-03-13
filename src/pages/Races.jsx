import { useEffect, useState } from "react";
import RaceList from "../components/RaceList";
import { getCurrentSeason } from "../api/api";
import BackBtn from "../components/BackBtn";

const Races = () => {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const racesData = await getCurrentSeason();
        console.log("Fetched races data:", racesData);

        if (!racesData || racesData.length === 0) {
          setError("No races returned from API");
          return;
        }

        setRaces(racesData);
        setError(null);
      } catch (err) {
        console.error("Error fetching races:", err);
        setError(err.message || "Failed to load races");
      } finally {
        setLoading(false);
      }
    };
    fetchRaces();
  }, []);

  return (
    <>
      <div className="races-page">
        <BackBtn />
        <h1>Races</h1>
        <p>Explore the upcoming races in the Formula 1 calendar.</p>
        {loading ? (
          <p className="font-text">Loading drivers...</p>
        ) : error ? (
          <p className="font-text text-danger">{error}</p>
        ) : (
          <RaceList races={races} />
        )}
      </div>
    </>
  );
};

export default Races;
