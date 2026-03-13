import React from "react";

const DriverCard = ({ driver, driverInfo }) => {
  if (!driver) return null;

  const teamColor = driver.team_colour;

  return (
    <div
      className="driver-card d-flex flex-row align-items-center p-4 rounded-3"
      style={{ backgroundColor: `#${teamColor}` }}
    >
      <div className="driver-info">
        <h2 className="m-0">
          {driver.full_name} {driver.surname}
        </h2>
        {driver.team_name && (
          <p className="font-text fs-4 m-0">
            <strong>Team:</strong> {driver.team_name}
          </p>
        )}
        {driver.driver_number && (
          <p className="font-text fs-4">
            <strong>Number:</strong> {driver.driver_number}
          </p>
        )}
        {driverInfo?.nationality && (
          <p className="font-text fs-4 m-0 mt-1">
            <strong>Nationality:</strong> {driverInfo.nationality}
          </p>
        )}
      </div>
      {driver.headshot_url && (
        <div className="">
          <img
            width={120}
            className="headshot"
            src={driver.headshot_url}
            alt="Driver Headshot"
            draggable="false"
          />
        </div>
      )}
    </div>
  );
};

export default DriverCard;
