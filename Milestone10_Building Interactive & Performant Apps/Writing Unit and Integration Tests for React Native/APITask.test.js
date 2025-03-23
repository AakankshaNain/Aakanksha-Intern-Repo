import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import axios from "axios";
import APITask from "../components/APITask";

jest.mock("axios");

describe("APITask Component", () => {
  it("Fetches and displays tasks correctly", async () => {
    const mockTasks = [
      { id: 1, text: "Doctors Appointment" },
      { id: 2, text: "Meeting at School" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockTasks });

    const { getByText, getByTestId } = render(<APITask />);

    await waitFor(() => expect(getByText("Doctors Appointment")).toBeTruthy());
    await waitFor(() => expect(getByText("Meeting at School")).toBeTruthy());
  });

});
