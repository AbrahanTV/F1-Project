import { useEffect, useState } from "react";
import { getDrivers } from "../api/openF1Api";
import DriverList from "../components/DriverList";

export default function Drivers() {
  // drivers fetched from the F1 API; we'll store them in state and derive a separate
  // array without the last entry when rendering.
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driversData = await getDrivers();
        console.log("Fetched drivers data:", driversData);

        if (!driversData || driversData.length === 0) {
          setError("No drivers returned from API");
          return;
        }

        setDrivers(driversData);
        setError(null);
      } catch (err) {
        console.error("Error fetching drivers:", err);
        setError(err.message || "Failed to load drivers");
      } finally {
        setLoading(false);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <>
      <div className="drivers-page d-flex flex-column ">
        <h1 className="font-bold">Drivers</h1>
        <p className="font-text">
          Here you can fin information about all the drivers in the current F1
          season. Click on a driver to see more details about them.
        </p>
        {loading ? (
          <p className="font-text">Loading drivers...</p>
        ) : error ? (
          <p className="font-text text-danger">{error}</p>
        ) : (
          <DriverList drivers={drivers} />
        )}
      </div>
    </>
  );
}
