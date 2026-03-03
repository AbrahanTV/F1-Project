import React from "react";
import DriverCard from "./DriverCard";

export default function DriverList({ drivers }) {
  if (!drivers || drivers.length === 0)
    return <p>Loading drivers or no drivers available...</p>;

  return (
    <div className="driver-grid d-flex justify-content-center flex-wrap gap-4">
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
    </div>
  );
}
