import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "./App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/List of jobs/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/New Job/i), leftClick);

  expect(screen.getByText(/New Job/i)).toBeInTheDocument();
});

test("landing on a bad page redirects to home page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/List of Jobs/i)).toBeInTheDocument();
});
