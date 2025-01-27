import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingSuccess from "./components/BookingSuccess";
import ShowSeat from "./components/ShowSeat";
import BookedSeats from "./components/BookedSeats"; // Adjust path based on your folder structure


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/show-seat" element={<ShowSeat />} /> {/* Show Seat */}
        <Route path="/booked-seats" element={<BookedSeats />} />
      </Routes>
    </Router>
  );
}

export default App;
