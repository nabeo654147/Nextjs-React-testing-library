/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../src/pages/index";

it("Should render text", () => {
  render(<Home />);
  expect(screen.getByText("Welcome to CorkWorld")).toBeInTheDocument();
});
