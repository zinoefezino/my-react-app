import { useState } from "react";
import Header from "./Header";
import "./index.css";
import Button from "./button";
import Hero from "./hero";
import FirstSection from "./firstSection";
import Secondsection from "./secondsection";
import Stats from "./stats";
import About from "./about";
import Hero2 from "./hero2";
import Plans from "./plans";
import Footer from "./footer";
import CheckFlight from "./checkFlight";
import Subscribe from "./subscribe";
import BookTrip from "./bookTrip";
import PaymentPlans from "./paymentPlans";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showBookTrip, setShowBookTrip] = useState(false);
  const [showPaymentPlans, setShowPaymentPlans] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setShowLogin(true)} />
      {showLogin ? (
        <CheckFlight onClose={() => setShowLogin(false)} />
      ) : showSubscribe ? (
        <Subscribe onClose={() => setShowSubscribe(false)} />
      ) : showBookTrip ? (
        <BookTrip onClose={() => setShowBookTrip(false)} />
      ) : showPaymentPlans ? (
        <PaymentPlans onClose={() => setShowPaymentPlans(false)} />
      ) : (
        <>
          <Hero />
          <FirstSection />
          <Secondsection />
          <Stats />
          <About />
          <Hero2 onBookTripClick={() => setShowBookTrip(true)} />
          <Plans onPaymentPlansClick={() => setShowPaymentPlans(true)} />
          <Footer onSubscribeClick={() => setShowSubscribe(true)} />
        </>
      )}
    </>
  );
}

export default App;
