import { useState } from "react";

function Subscribe({ onClose }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="subscribe">
      <div className="subscribe-container">
        {!submitted ? (
          <>
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Enter your email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <button type="submit" className="button">
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>You have successfully subscribed to our newsletter.</p>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        )}
        {!submitted && (
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}

export default Subscribe;
