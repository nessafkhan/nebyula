import axios from "axios";

// Need to change after deployment
const BASE_URL = "http://localhost:8000/api/v1";

export const fetchJobs = async () => {
  const response = await axios.get(`${BASE_URL}/jobs`);
  return response.data;
};


export const createJob = async (job) => {
  const response = await axios.post(`${BASE_URL}/jobs`, job);
  return response.data;
};