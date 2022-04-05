import { render, screen } from "@testing-library/react";
import Landing from "../Landing";
import { MemoryRouter } from "react-router-dom";

test("Display Seat no and 'Start to order' Button in landing page", async () => {
  render(<Landing />, { wrapper: MemoryRouter });
  const seatNoElement = await screen.findByText(/^[0-9]{1,2}[A-Z]{1}$/i);
  expect(seatNoElement).toBeInTheDocument();

  const startToOrderBtn = await screen.findByText(/^Start to order$/i);
  expect(startToOrderBtn).toBeInTheDocument();
});
