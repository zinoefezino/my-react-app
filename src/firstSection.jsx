import GreeceImage from "./assets/greece.avif";
import BaliImage from "./assets/bali.avif";
import MaldivesImage from "./assets/maldives.avif";
import ParisImage from "./assets/paris.avif";
function FirstSection() {
  return (
    <section className="firstsection">
      <h2>Best Travel Destinations</h2>

      <div className="firstsectionBlock">
        <div className="imageBlock">
          <img src={GreeceImage} alt="Greece"></img>
          <span className="popular">popular</span>
          <p>Santorini</p>
          <p className="smallname">Greece</p>
          <p>
            {" "}
            <span className="money">$2000/</span>month
          </p>
        </div>

        <div className="imageBlock">
          <img src={ParisImage} alt="Paris"></img>
          <span className="popular">popular</span>
          <p>Paris</p>
          <p className="smallname">France</p>
          <p>
            {" "}
            <span className="money">$2000/</span>month
          </p>
        </div>

        <div className="imageBlock">
          <img src={BaliImage} alt="Bali"></img>
          <span className="popular">popular</span>
          <p>Bali</p>
          <p className="smallname">Indonesia</p>
          <p>
            {" "}
            <span className="money">$2000/</span>month
          </p>
        </div>

        <div className="imageBlock">
          <img src={MaldivesImage} alt="Maldives"></img>
          <span className="popular">popular</span>
          <p>Maldives</p>
          <p className="smallname">Make</p>
          <p>
            <span className="money">$2000/</span>month
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
