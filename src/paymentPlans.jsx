import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCalendarAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

function PaymentPlans({ onClose }) {
  return (
    <div className="payment-plans">
      <div className="payment-plans-container">
        <h2>Flexible Payment Options for Every Trip</h2>
        <p>
          The freedom to explore without financial stress. Choose a payment plan
          that fits your budget and travel timeline.
        </p>

        <div className="plansboxes">
          <div className="planbox">
            <FontAwesomeIcon icon={faCreditCard} size="3x" />
            <h3>One-Time Payment</h3>
            <p>Pay in full and get instant confirmation.</p>
            <ul>
              <li>Immediate booking confirmation</li>
              <li>No additional fees</li>
              <li>Best for last-minute travelers</li>
            </ul>
          </div>

          <div className="planbox">
            <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
            <h3>Installments</h3>
            <p>Spread payments over time with low interest.</p>
            <ul>
              <li>Flexible payment schedules</li>
              <li>Low interest rates</li>
              <li>Ideal for planned trips</li>
            </ul>
          </div>

          <div className="planbox">
            <FontAwesomeIcon icon={faWallet} size="3x" />
            <h3>Pay Later</h3>
            <p>Book now and pay after your trip.</p>
            <ul>
              <li>Book without upfront payment</li>
              <li>Pay after enjoying your trip</li>
              <li>Perfect for budget-conscious travelers</li>
            </ul>
          </div>
        </div>

        <Button text="Choose a Plan" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PaymentPlans;
