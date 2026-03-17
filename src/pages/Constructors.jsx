import { useEffect, useState } from "react";
import { getTeams } from "../api/api";
import { TEAM_COLORS } from "../api/openF1Api";
import ConstructorCard from "../components/ConstructorCard";
import BackBtn from "../components/BackBtn";

export default function Constructors() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData = await getTeams();
        setTeams(teamsData);
        setError(null);
      } catch (err) {
        console.error("Error fetching constructors:", err);
        setError(err.message || "Failed to load constructors");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="constructors-page">
      <BackBtn />
      <h1>Constructors</h1>
      <p>All teams competing in the current Formula 1 season.</p>

      {loading ? (
        <p className="font-text">Loading constructors...</p>
      ) : error ? (
        <p className="font-text text-danger">{error}</p>
      ) : (
        <div className="constructor-grid">
          {teams.map((team) => (
            <ConstructorCard
              key={team.teamId}
              team={team}
              teamColor={TEAM_COLORS[team.teamId] ?? null}
            />
          ))}
        </div>
      )}
    </div>
  );
}
