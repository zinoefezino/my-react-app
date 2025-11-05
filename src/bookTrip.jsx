import { useState } from "react";
import Button from "./button";

function BookTrip({ onClose }) {
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    class: "economy",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., API call)
    alert("Trip booked successfully!");
    onClose();
  };

  return (
    <div className="book-trip">
      <div className="book-trip-container">
        <h2>Book Your Trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passengers">Number of Passengers</label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              min="1"
              value={formData.passengers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          <Button text="Book Trip" />
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookTrip;
