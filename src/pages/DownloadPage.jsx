import React from "react";
import DownloadHero from "../components/DownloadHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottomNav from "../components/FooterBottomNav";

const DownloadPage = () => {
  return (
    <div>
      <Navbar />
      <DownloadHero />
      <Footer />
      <FooterBottomNav />
    </div>
  );
};

export default DownloadPage;
