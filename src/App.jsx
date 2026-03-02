import { useEffect, useState } from "react";
import { getNextRace, getCurrentSeason } from "./api/api";
import Countdown from "./components/Countdown";
import RaceList from "./components/RaceList";
import "./styles/styles.css";

function App() {
  const [nextRaceDate, setNextRaceDate] = useState(null);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nextRaceData = await getNextRace();
        console.log("NEXT RACE:", nextRaceData);

        const seasonRaces = await getCurrentSeason();
        console.log("SEASON RACES:", seasonRaces);

        const raceDateTime = new Date(
          `${nextRaceData.race.date}T${nextRaceData.race.time}`,
        );

        setNextRaceDate(raceDateTime);
        setRaces(seasonRaces);
      } catch (error) {
        console.error("Error fetching F1 data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>🏎️ F1 Season Calendar</h1>

      {nextRaceDate && <Countdown nextRaceDate={nextRaceDate} />}

      <RaceList races={races} />
    </div>
  );
}

export default App;
