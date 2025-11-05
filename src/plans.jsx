import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCalendarAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

function Plans({ onPaymentPlansClick }) {
  return (
    <section className="plans">
      <div className="planscontainer">
        <h1>Flexible Payment Options for Every Trip</h1>
        <p>
          The freedom to explore without financial stress. Choose a payment plan
          that fits your budget and travel timeline.
        </p>

        <div className="plansboxes">
          <div className="planbox">
            <FontAwesomeIcon icon={faCreditCard} size="3x" />
            <h3>One-Time Payment</h3>
            <p>Pay in full and get instant confirmation.</p>
          </div>

          <div className="planbox">
            <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
            <h3>Installments</h3>
            <p>Spread payments over time with low interest.</p>
          </div>

          <div className="planbox">
            <FontAwesomeIcon icon={faWallet} size="3x" />
            <h3>Pay Later</h3>
            <p>Book now and pay after your trip.</p>
          </div>
        </div>

        <Button text="See Payment Plans" onClick={onPaymentPlansClick} />
      </div>
    </section>
  );
}

export default Plans;
