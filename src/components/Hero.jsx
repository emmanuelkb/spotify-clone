import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero_component">
      <h1>Listening is Everything </h1>
      <p>Millions of songs and podcasts. No credit card needed.</p>
      <Link to="/signup">
        <button className="spotifyBtn">GET SPOTIFY FREE</button>
      </Link>
    </div>
  );
};

export default Hero;
