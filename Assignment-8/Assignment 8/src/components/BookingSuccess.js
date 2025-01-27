import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingSuccess.css";


const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, mobile } = location.state;

  const randomBookingId = `BOOK${Math.floor(1000 + Math.random() * 9000)}`;
  const randomSeat = `Seat ${Math.floor(1 + Math.random() * 50)}`;
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  // Save booked seat details to localStorage
  useEffect(() => {
    const bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    const newBooking = {
      bookingId: randomBookingId,
      seat: randomSeat,
      name,
      email,
      mobile,
      date: currentDate,
      time: currentTime,
    };
    localStorage.setItem("bookedSeats", JSON.stringify([...bookedSeats, newBooking]));
  }, [randomBookingId, randomSeat, name, email, mobile, currentDate, currentTime]);

  const handleBackToMovies = () => {
    navigate("/");
  };

  return (
    <div className="booking-success-container">
      <h1>🎉 Booking Confirmed!</h1>
      <p>
        <strong>Booking ID:</strong> {randomBookingId}
      </p>
      <p>
        <strong>Seat:</strong> {randomSeat}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mobile:</strong> {mobile}
      </p>
      <p>
        <strong>Date:</strong> {currentDate}
      </p>
      <p>
        <strong>Time:</strong> {currentTime}
      </p>
      <button onClick={handleBackToMovies}>Back to Movies</button>
      
    </div>
  );
};

export default BookingSuccess;
