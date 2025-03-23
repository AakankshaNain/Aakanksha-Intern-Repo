/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DisplayMessage from "../components/DisplayMessage";

test("Message rendered correctly", () => {
  render(<DisplayMessage />);
  const messageElement = screen.getByTestId("message");
  expect(messageElement).toBeInTheDocument();
  expect(messageElement).toHaveTextContent("Hello Focus Bear!");
});

test("Button clicked", () => {
  render(<DisplayMessage />);
  const buttonElement = screen.getByText("Click");
  fireEvent.click(buttonElement);
  const messageElement = screen.getByTestId("message");
  expect(messageElement).toHaveTextContent("Button Clicked");
});
