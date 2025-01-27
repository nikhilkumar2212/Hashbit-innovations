import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ShowSeat.css";

const ShowSeat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, seat } = location.state || {};

  if (!bookingId || !seat) {
    return (
      <div className="show-seat-container">
        <h1>No Seat Found</h1>
        <button onClick={() => navigate("/")}>Back to Movies</button>
      </div>
    );
  }

  return (
    <div className="show-seat-container">
      <h1>Your Booking Details</h1>
      <p>
        <strong>Booking ID:</strong> {bookingId}
      </p>
      <p>
        <strong>Seat:</strong> {seat}
      </p>
      <button onClick={() => navigate("/")}>Back to Movies</button>
    </div>
  );
};

export default ShowSeat;
