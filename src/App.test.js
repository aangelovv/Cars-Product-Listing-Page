import { render, screen } from "@testing-library/react";
import App from "./App";
import Cars from "../src/components/Cars/Cars";
import Vans from "../src/components/Vans/Vans";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders cars link", () => {
  render(<Cars />);
  const linkElement = screen.getByText(/cars/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders user profile link", () => {
  render(<Vans />);
  const linkElement = screen.getByText(/vans/i);
  expect(linkElement).toBeInTheDocument();
});
