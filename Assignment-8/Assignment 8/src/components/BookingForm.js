import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: { ...formData, bookingId: id } });
  };

  return (
    <div className="booking-form-container">
      <h1>Book Your Seat</h1>
      <p className="form-description">
        Fill in your details below to confirm your booking.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
