/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import APIFetch from "../components/APIFetch";

global.fetch = jest.fn(); 

describe("APIFetch Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("Fetches and displays tasks from API", async () => {
    
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { id: 1, text: "Doctors Appointment" },
        { id: 2, text: "Meeting at School" },
      ]),
    });

    render(<APIFetch />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Doctors Appointment")).toBeInTheDocument();
      expect(screen.getByText("Meeting at School")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
