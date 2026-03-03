import React from "react";

const DriverCard = ({ driver }) => {
  if (!driver) return null;

  return (
    <div className="driver-card d-flex flex-column align-items-center">
      <h2 className="font-bold ">
        {driver.full_name} {driver.surname}
      </h2>
      {driver.driver_number && (
        <p className="font-text">
          <strong>Number:</strong> {driver.driver_number}
        </p>
      )}
      {driver.team_name && (
        <p className="font-text">
          <strong>Team:</strong> {driver.team_name}
        </p>
      )}
      {driver.headshot_url && (
        <p className="font-text">
          <img
            src={driver.headshot_url}
            alt="Driver Headshot"
            className="headshot"
          />
        </p>
      )}
    </div>
  );
};

export default DriverCard;
