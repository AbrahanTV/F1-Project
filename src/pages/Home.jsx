import { useState, useEffect } from "react";
import { getNextRace, getCurrentSeason } from "../api/api";
import { Link } from "react-router";
import Countdown from "../components/Countdown";

import "../styles/home.css";

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
        setLoading(true);

        const nextRaceData = await getNextRace();
        const seasonRaces = await getCurrentSeason();

        console.log("Next race data:", nextRaceData);
        console.log("Season races:", seasonRaces);

        if (nextRaceData?.race?.length > 0) {
          const race = nextRaceData.race[0];

          setNextRace(race);
          setRaceName(race.raceName);
          setChampionship(nextRaceData.championship?.championshipName);

          const raceDateTime = new Date(
            `${race.schedule.race.date}T${race.schedule.race.time}`,
          );

          setNextRaceDate(raceDateTime);
        }

        setRacesCount(seasonRaces?.length || 0);

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
          <div className="f1-logo d-flex justify-content-center align-items-center">
            <p className="m-0">🏎️</p>
            {/* <img src="/imgs/F1-logo.png" alt="formula 1 logo" width={100} /> */}
          </div>
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
          <p className="text-white">Loading next race...</p>
        </section>
      ) : error ? (
        <section className="next-race-section">
          <p className="text-white">
            Unable to load race data. Please try again later.
          </p>
        </section>
      ) : nextRace ? (
        <section className="next-race-section">
          <div className="next-race-container">
            <div className="next-race-info">
              <h2 className="font-text">NEXT RACE</h2>
              <h3 className="race-name">{raceName}</h3>
              <p className="race-circuit">
                {nextRace.circuit.circuitName || "Circuit TBA"}
              </p>
              <div className="race-location">
                <i className="bi bi-geo-alt-fill"></i>{" "}
                {nextRace.circuit.city || "TBA"},{" "}
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
          <Link to="/races" className="stat-link text-decoration-none">
            <div className="stat-number  text-danger">{racesCount || 0}</div>
            <div className="stat-label font-text">Total Races</div>
          </Link>
        </div>
        <div className="stat-card">
          <Link to="/drivers" className="stat-link text-decoration-none">
            <div className="stat-number text-warning">22</div>
            <div className="stat-label font-text">Drivers</div>
          </Link>
        </div>
        <div className="stat-card">
          <div className="stat-number text-success">10</div>
          <div className="stat-label font-text">Constructors</div>
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
        <a href="/races" className="cta-button">
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
