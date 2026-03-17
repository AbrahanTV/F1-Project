import React from "react";

const DriverCard = ({ driver, driverInfo }) => {
  if (!driver) return null;

  const teamColor = driver.team_colour ? `#${driver.team_colour}` : "#e8002d";

  return (
    <div
      className="driver-card d-flex flex-row align-items-center p-4"
      style={{ "--team-color": teamColor }}
    >
      <div className="driver-info flex-grow-1">
        <h2 className="m-0">{driver.full_name}</h2>
        {driver.team_name && (
          <p className="m-0 mt-2">
            <strong>Team</strong> {driver.team_name}
          </p>
        )}
        {driver.driver_number && (
          <p className="m-0 mt-1">
            <strong>No.</strong> {driver.driver_number}
          </p>
        )}
        {driverInfo?.nationality && (
          <p className="m-0 mt-1">
            <strong>Country</strong> {driverInfo.nationality}
          </p>
        )}
      </div>
      {driver.headshot_url && (
        <div>
          <img
            width={110}
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
