import React from "react";
import PremiumPlans from "./PremiumPlans";
import "./PremiumHero.css";

const PremiumHero = () => {
  return (
    <div className="premiumHero">
      <div className="premiumSectOne">
        <h1>Get Premium free for 1 month</h1>
        <h2>Just GHC 17.00/month after. Cancel anytime.</h2>
        <div className="premiumSectOneButt">
          <button className="button1">Get Started</button>
          <button className="button2">View Plans</button>
        </div>
        <div className="premiumSectOneFoot">
          <p>
            Terms and conditions apply. 1 month free not available to users who
            have already tried Premium
          </p>
        </div>
      </div>
      <div className="premiumSectTwo">
        <h1>Why go Premium?</h1>
        <div className="premiumSectTwoImg">
          <div>
            <img
              src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"
              alt="Download"
            />
            <p className="p1">Download music.</p>
            <p className="p2">Listen anywhere</p>
          </div>

          <div>
            <img
              src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"
              alt="No Ads"
            />
            <p className="p1"> No ad interruptions.</p>
            <p className="p2"> Enjoy uninterrupted music.</p>
          </div>
          <div>
            <img
              src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
              alt="Play any song"
            />
            <p className="p1"> Play any song.</p>
            <p className="p2">Even on mobile.</p>
            <p></p>
          </div>
          <div>
            <img
              src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"
              alt="unlimited skips image"
            />
            <p className="p1">Unlimited skips. </p>
            <p className="p2">Just hit next.</p>
          </div>
        </div>
      </div>
      <div className="premiumSectThree">
        <h1>Pick your Premium</h1>
        <p className="topP">
          Listen without limits on your phone, speaker, and other devices.
        </p>
        <div className="plans">
          <PremiumPlans
            header="1 month free with subscription"
            header2="Prepaid plans available"
            type="Individual"
            amount="17"
            accounts="1 account"
            items={[
              "Listen to music ad-free",
              "Play anywhere - even offline",
              "On-demand playback",
            ]}
            terms="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
          />

          <PremiumPlans
            header="1 month free"
            type="Duo"
            amount="22"
            accounts="2 accounts"
            items={[
              "2 Premium accounts for a couple under one roof",
              "Duo Mix: a playlist for two, regularly updated with music you both enjoy",
              "Ad-free music listening, play offline, on-demand playback",
            ]}
            terms="Terms and conditions apply. 1 month
        free not available for users who have already tried Premium."
          />

          <PremiumPlans
            header="1 month free"
            type="Family"
            amount="27"
            accounts="Up to 6 accounts"
            items={[
              "6 Premium accounts for family members living under one roof",
              "Family Mix: a playlist for your family, regularly updated with music you all enjoy",
              "Block explicit music",
              "Ad-free music listening, play offline, on-demand playback",
            ]}
            terms="Terms and conditions apply. 1 month
        free not available for users who have already tried Premium."
          />

          <PremiumPlans
            header="1 month free with subscription"
            header2="Prepaid plans available"
            type="Student"
            amount="8.50"
            accounts="1 account"
            items={[
              "Special discount for eligible students in university",
              "Listen to music ad-free",
              "Play anywhere - even offline",
              "On-demand playback",
            ]}
            terms="Offer available only to students at an accredited higher education institution. 1 month free not available to users who already tried Premium. Spotify Student Discount Offer Terms and conditions apply."
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumHero;
