import axios from "axios";

const baseUri = process.env.REACT_APP_API_BASE_URL;

export function getJobs() {
  return axios.get(baseUri + "/jobs");
}

export function postJob($job) {
  return axios.post(baseUri + "/jobs", $job);
}

export function getProperties() {
  return axios.get(baseUri + "/properties");
}
