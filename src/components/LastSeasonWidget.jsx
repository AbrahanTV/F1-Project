import { useState, useEffect } from "react";
import axios from "axios";

export default function LastSeasonWidget() {
  const [lastSeason, setLastSeason] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLastSeason = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;

        // Fetch last season standings
        const response = await axios.get(
          `https://f1api.dev/api/${lastYear}/driverStandings`,
        );

        if (response.data && response.data.length > 0) {
          const champion = response.data[0];
          setLastSeason({
            year: lastYear,
            champion: champion.Driver?.surname || "TBA",
            championTeam: champion.Constructors?.[0]?.name || "TBA",
            points: champion.points,
          });
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching last season data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLastSeason();
  }, []);

  if (loading) {
    return (
      <section className="last-season-widget">
        <p>Loading last season...</p>
      </section>
    );
  }

  if (error || !lastSeason) {
    return (
      <section className="last-season-widget">
        <p>Unable to load last season data.</p>
      </section>
    );
  }

  return (
    <section className="last-season-widget">
      <div className="last-season-content">
        <h2 className="last-season-title">🏆 {lastSeason.year} Champion</h2>
        <div className="champion-info">
          <div className="champion-name">{lastSeason.champion}</div>
          <div className="champion-team">{lastSeason.championTeam}</div>
          <div className="champion-points">{lastSeason.points} Points</div>
        </div>
      </div>
      <div className="last-season-badge">
        <span className="badge-year">{lastSeason.year}</span>
      </div>
    </section>
  );
}
