import React from "react";
import DriverCard from "./DriverCard";

export default function DriverList({ drivers, driversInfo }) {
  if (!drivers || drivers.length === 0)
    return <p>Loading drivers or no drivers available...</p>;

  return (
    <div className="driver-grid d-flex justify-content-center flex-wrap gap-4">
      {drivers.map((driver) => {
        const driverInfo = driversInfo?.find((info) => {
          const infoSurname = info.surname
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const driverSurname = driver.last_name
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return infoSurname.includes(driverSurname);
        });

        return (
          <DriverCard
            key={driver.driver_number}
            driver={driver}
            driverInfo={driverInfo}
          />
        );
      })}
    </div>
  );
}
