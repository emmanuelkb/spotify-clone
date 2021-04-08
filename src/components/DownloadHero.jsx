import React from "react";
import "./DownloadHero.css";

const DownloadHero = () => {
  return (
    <div>
      <div className="DownloadHeroSectOne">
        <div className="DownloadHeroSectOneImg">
          <img
            lassName="img1"
            src="https://www-growth.scdn.co/static/download/laptop.svg"
            alt="Laptop "
          />
          <img
            className="img2"
            src="https://www-growth.scdn.co/static/download/green-circle.svg"
            alt="circle"
          />
          <img
            className="img3"
            src="https://www-growth.scdn.co/static/download/green-success-check.svg"
            alt="succes"
          />
        </div>

        <h1>Download Spotify</h1>
        <p>Play millions of songs on your device</p>
        <button>Download</button>
      </div>
      <div className="DownloadHeroSectTwo">
        <h1>Bring your music to mobile and tablet,too.</h1>
        <p>Listening on your phone or tablet is free, easy, adnd fun.</p>
        <div className="DownloadHeroSectTwoImg">
          <a href="">
            <img
              src="https://www-growth.scdn.co/static/badges/apple/en.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www-growth.scdn.co/static/badges/google/en.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="DownloadHeroSectThree">
        <img
          src="https://www-growth.scdn.co/static/download/all-devices.svg"
          alt="Devices image"
        />
        <p>One account, listen everywhere.</p>
        <div className="DownloadHeroSectThreeList">
          <ul>
            <li>MOBILE</li>
            <li>COMPUTER</li>
            <li>TABLET</li>
            <li>CAR</li>
            <li>PLAYSTATION</li>
            <li>XBOX</li>
            <li>TV</li>
            <li>SPEAKER</li>
            <li>WEB PLAYER</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadHero;
