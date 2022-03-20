import { render, screen } from "@testing-library/react";
import Landing from "../Landing";

test("Display Seat no. in landing page", async () => {
  render(<Landing />);
  const seatNoElement = await screen.findByText(/^[0-9]{1,2}[A-Z]{1}$/i);
  expect(seatNoElement).toBeInTheDocument();
});
