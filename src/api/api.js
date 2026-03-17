import axios from "axios";

const BASE_URL = "https://f1api.dev/api";

export const getNextRace = async () => {
  const response = await axios.get(`${BASE_URL}/current/next`);
  return response.data;
};

export const getCurrentSeason = async () => {
  const response = await axios.get(`${BASE_URL}/current`);
  // console.log("FULL CURRENT RESPONSE:", response.data);
  return response.data.races;
};

export const getDriverInfo = async () => {
  const response = await axios.get(`${BASE_URL}/current/drivers`);
  return response.data.drivers || [];
};

export const getTeams = async () => {
  const response = await axios.get(`${BASE_URL}/current/teams`);
  // console.log("Teams: ", response.data);
  return response.data.teams || [];
};
