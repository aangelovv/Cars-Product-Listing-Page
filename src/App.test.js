import { render, screen } from "@testing-library/react";
import App from "./App";
import Cars from "../src/components/Cars/Cars";
import Vans from "../src/components/Vans/Vans";
import Motorcycles from "../src/components/Motorcycles/Motorcycles";
import OtherVehicles from "../src/components/OtherVehicles/OtherVehicles";

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

test("renders Vans link", () => {
  render(<Vans />);
  const linkElement = screen.getByText(/vans/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Motorcycles link", () => {
  render(<Motorcycles />);
  const linkElement = screen.getByText(/motorcycles/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Other vehicles link", () => {
  render(<OtherVehicles />);
  const linkElement = screen.getByText(/Other Vehicle/i);
  expect(linkElement).toBeInTheDocument();
});
