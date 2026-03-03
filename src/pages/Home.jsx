import { useState, useEffect } from "react";
import { getNextRace, getCurrentSeason } from "../api/api";
import Countdown from "../components/Countdown";
import { Link } from "react-router";
import "../styles/home.css";
import LastSeasonWidget from "../components/LastSeasonWidget";

export default function Home() {
  const [nextRaceDate, setNextRaceDate] = useState(null);
  const [nextRace, setNextRace] = useState(null);

  const [raceName, setRaceName] = useState("");
  const [championship, setChampionship] = useState(null);

  const [racesCount, setRacesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nextRaceData = await getNextRace();
        console.log("Next race data:", nextRaceData);

        const currentSeason = await getCurrentSeason();
        console.log("Current season data:", currentSeason);

        if (nextRaceData && nextRaceData.race) {
          setNextRace(nextRaceData.race[0]);
          const raceDateTime = new Date(
            `${nextRaceData.race.date}T${nextRaceData.race.time}`,
          );
          setNextRaceDate(raceDateTime);
        }

        setRaceName(nextRaceData.race[0].raceName);
        setChampionship(nextRaceData.championship.championshipName);

        const seasonRaces = await getCurrentSeason();
        console.log("Season races:", seasonRaces);
        setRacesCount(seasonRaces.length);
        setError(null);
      } catch (err) {
        console.error("Error fetching F1 data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="f1-logo">🏎️</div>
          <h1 className="hero-title">{championship}</h1>
          <p className="hero-subtitle">Season Calendar & Race Tracker</p>
          <p className="hero-description">
            Never miss a race. Track the complete F1 season with live race times
            and upcoming event countdowns.
          </p>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Next Race Section */}
      {loading ? (
        <section className="next-race-section">
          <p>Loading next race...</p>
        </section>
      ) : error ? (
        <section className="next-race-section">
          <p>Unable to load race data. Please try again later.</p>
        </section>
      ) : nextRace ? (
        <section className="next-race-section">
          <div className="next-race-container">
            <div className="next-race-info">
              <h2>NEXT RACE</h2>
              <h3 className="race-name">{raceName}</h3>
              <p className="race-circuit">
                {nextRace.circuit.circuitName || "Circuit TBA"}
              </p>
              <div className="race-location">
                📍 {nextRace.circuit.city || "TBA"},{" "}
                {nextRace.circuit.country || "TBA"}
              </div>
            </div>
            <div className="countdown-wrapper">
              <Countdown nextRaceDate={nextRace.schedule.race.date || "TBA"} />
            </div>
          </div>
        </section>
      ) : null}

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <Link to="/races" className="stat-link ">
            <div className="stat-number text-decoration-none text-white">
              {racesCount || 0}
            </div>
            <div className="stat-label">Total Races</div>
          </Link>
        </div>
        <div className="stat-card">
          <div className="stat-number text-5xl font-black text-yellow-400 mb-px">
            22
          </div>
          <div className="stat-label">Drivers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-5xl font-black text-yellow-400 mb-px">
            10
          </div>
          <div className="stat-label">Constructors</div>
        </div>
      </section>

      {/* Last Season Widget */}
      {/* <LastSeasonWidget /> */}

      {/* CTA Section */}
      <section className="cta-section">
        <h2>View Full Season Calendar</h2>
        <p>
          Explore all races, dates, and circuit information for this season.
        </p>
        <a href="/calendar" className="cta-button">
          View Calendar →
        </a>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>
          Powered by F1 API | Stay updated with the latest Formula 1 calendar
        </p>
      </footer>
    </div>
  );
}
