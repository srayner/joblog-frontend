import axios from "axios";
import { getJobs, postJob, getProperties, postProperty } from "./api";

jest.mock("axios");

test("should fetch jobs", () => {
  const jobs = [{ id: 1 }, { id: 2 }];
  const res = { data: jobs };
  axios.get.mockImplementation(() => Promise.resolve(res));

  getJobs().then((res) => expect(res.data).toEqual(jobs));
});

test("should post job", () => {
  const job = { id: 1 };
  const res = { data: job };
  axios.post.mockImplementation(() => Promise.resolve(res));

  postJob(job);
  expect(axios.post).toHaveBeenCalledWith(expect.anything(), job);
});

test("should fetch properties", () => {
  const properties = [{ id: 1 }, { id: 2 }];
  const res = { data: properties };
  axios.get.mockImplementation(() => Promise.resolve(res));

  getProperties().then((res) => expect(res.data).toEqual(properties));
});

test("should post property", () => {
  const property = { id: 1 };
  const res = { data: property };
  axios.post.mockImplementation(() => Promise.resolve(res));

  postProperty(property);
  expect(axios.post).toHaveBeenCalledWith(expect.anything(), property);
});
