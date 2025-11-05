import Button from "./button";
function Hero2({ onBookTripClick }) {
  return (
    <section className="hero2">
      <div className="hero-content">
        <h1>Your Next Adventure is a Trip Away</h1>
        <Button text="Book a Trip" onClick={onBookTripClick} />
      </div>
    </section>
  );
}

export default Hero2;
