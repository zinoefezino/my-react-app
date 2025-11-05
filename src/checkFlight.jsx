import { useState } from "react";

function CheckFlight({ onClose }) {
  const [flightCode, setFlightCode] = useState("AF1234");

  const flightData = {
    AF1234: {
      destination: "Paris, France",
      time: "10:30 AM - 2:45 PM",
      number: "AF 1234",
    },
    BA5678: {
      destination: "London, UK",
      time: "2:00 PM - 6:15 PM",
      number: "BA 5678",
    },
    LH9101: {
      destination: "Berlin, Germany",
      time: "8:00 AM - 11:30 AM",
      number: "LH 9101",
    },
  };

  const currentFlight = flightData[flightCode] || {
    destination: "Not Found",
    time: "Not Found",
    number: flightCode,
  };

  return (
    <div className="check-flight">
      <div className="check-flight-container">
        <h2>Check Flight Details</h2>
        <div className="form-group">
          <label htmlFor="flightCode">Enter Flight Code:</label>
          <input
            type="text"
            id="flightCode"
            value={flightCode}
            onChange={(e) => setFlightCode(e.target.value.toUpperCase())}
            placeholder="e.g., AF1234"
          />
        </div>
        <div className="flight-info">
          <p>
            <strong>Destination:</strong> {currentFlight.destination}
          </p>
          <p>
            <strong>Time of Flight:</strong> {currentFlight.time}
          </p>
          <p>
            <strong>Flight Number:</strong> {currentFlight.number}
          </p>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CheckFlight;
