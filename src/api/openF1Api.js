import axios from "axios";

const BASE_URL = "https://api.openf1.org/v1/drivers";

export const getDrivers = async () => {
  const response = await axios.get(`${BASE_URL}?session_key=latest`);
  return response.data;
};

export const getTeams = async () => {
  const response = await axios.get(`${BASE_URL}/teams?session_key=latest`);
  // console.log("Teams OpenF1: ", response.data);
  return response.data;
};

// Static 2026 team colors sourced from OpenF1, keyed by f1api.dev teamId
export const TEAM_COLORS = {
  mercedes: "00D7B6",
  ferrari: "ED1131",
  mclaren: "F47600",
  haas: "9C9FA2",
  red_bull: "4781D7",
  rb: "6C98FF",
  alpine: "00A1E8",
  audi: "F50537",
  williams: "1868DB",
  cadillac: "909090",
  aston_martin: "229971",
};
