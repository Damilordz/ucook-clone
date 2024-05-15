import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import MenuSection from "./components/MenuSection";
import HeroCarousel from "./components/HeroCarousel";
import UcookSection from "./components/UcookSection";
import CravingsSection from "./components/CravingsSection";
import TextCard from "./components/TextCard";
import Footer from "./components/Footer";
import "./css/mobile.css"
import "./css/tablet.css"

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <MenuSection />
        <HeroCarousel />
        <UcookSection />
        <CravingsSection />
        <TextCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
