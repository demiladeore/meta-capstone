import { render, screen } from "@testing-library/react";
// import App from './App';
import BookingForm from "./component/BookingForm";

test("renders learn react link", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
