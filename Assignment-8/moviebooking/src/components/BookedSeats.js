import React, { useEffect, useState } from "react";
import "./BookedSeats.css";

const BookedSeats = () => {
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    const uniqueBookings = Array.from(
      new Map(savedBookings.map((item) => [item.bookingId, item]))
    ).map(([key, value]) => value);
    setBookedSeats(uniqueBookings); // Ensure no duplicates are shown
  }, []);

  return (
    <div className="booked-seats-container">
      <h1>Booked Seats</h1>
      <div className="booked-seats-list">
        {bookedSeats.map((booking, index) => (
          <div className="booked-seat-card" key={index}>
            <p>
              <strong>Booking ID:</strong> {booking.bookingId}
            </p>
            <p>
              <strong>Seat:</strong> {booking.seatNumber}
            </p>
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Date:</strong> {booking.date}
            </p>
            <p>
              <strong>Time:</strong> {booking.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedSeats;
