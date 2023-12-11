import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import authService from "../components/auth-service";

jest.mock("../components/auth-service");

test('Submits the form and navigates to "/" on successful login', async (done) => {
  const mockNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  }));

  authService.login.mockResolvedValueOnce();

  render(
    <Router>
      <LoginPage />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "testpassword" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  await waitFor(() => {
    expect(authService.login).toHaveBeenCalledWith("testuser", "testpassword");
  });

  expect(mockNavigate).toHaveBeenCalledWith("/");
  done();
});

test('Displays an error message on failed login', async (done) => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));

  authService.login.mockRejectedValueOnce({ message: "Invalid credentials" });

  render(
    <Router>
      <LoginPage />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "testpassword" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  await waitFor(() => {
    expect(authService.login).toHaveBeenCalledWith("testuser", "testpassword");
  });

  expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  done();
});