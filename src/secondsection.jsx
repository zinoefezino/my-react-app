import Airportimage from "./assets/airport.avif";
function Secondsection() {
  return (
    <section className="secondsection">
      <div className="secondsectioncontainer">
        <div>
          <img src={Airportimage} alt="Airport"></img>
        </div>
        <div className="secondsectioncontent">
          <h2>Plan Smarter Trips With Aeroflot</h2>
          <p>Experience Seamless Travel Planning And Booking With Aeroflot</p>

          <ul>
            <li>Secure Bookings</li>
            <li>Convenience Travels</li>
            <li>Discounts</li>
            <li>24/7 Support</li>
            <li>Price Match Guarantee</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Secondsection;
