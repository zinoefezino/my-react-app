import Selfie from "./assets/selfie.avif";

function About() {
  return (
    <section className="aboutsection">
      <br />
      <h2>HOW AEROFLOT WORKS</h2>
      <div className="aboutcontainer">
        <img src={Selfie} alt="Selfie"></img>

        <div className="aboutcontent">
          <div className="aboutblock">
            <h3>Search Your Destination</h3>
            <p>Find Beautiful Places To Visit With Just A Few Clicks</p>
          </div>

          <p>Browse Travel Option Tailored To Your Budget And Vibe</p>

          <hr />

          <p>Quick Checkput And Secure Payment - No Hassle</p>

          <hr />

          <p>Relax And Aeroflot Handles The Details</p>
        </div>
      </div>
    </section>
  );
}

export default About;
