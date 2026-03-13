import { useEffect, useState } from "react";
import { getDrivers } from "../api/openF1Api";
import { getDriverInfo } from "../api/api";
import DriverList from "../components/DriverList";
import BackBtn from "../components/BackBtn";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [driverInfo, setDriverInfo] = useState([]);
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

        const driverInfoData = await getDriverInfo();
        console.log("F1API drivers:", driverInfoData);

        setDrivers(driversData);
        setDriverInfo(driverInfoData);

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
        <BackBtn />
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
          <DriverList drivers={drivers} driversInfo={driverInfo} />
        )}
      </div>
    </>
  );
}
