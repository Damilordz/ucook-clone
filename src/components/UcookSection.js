import React from "react";
import Feature from "./Feature";
import whyCook from "../whyCook";

function UcookSection() {
  return (
    <section className="ucook-section">
      <h3>Why UCOOK</h3>
      <div className="ucook-feature">
        {whyCook.map((cook, index) => {
          return (
            <Feature
              key={index}
              title={cook.title}
              content={cook.content}
              img="whycook-img"
              imagePath={cook.img}
              alt={cook.alt}
            />
          );
        })}
      </div>
      <div className="getstarted">
        <a href="https://www.ucook.co.za/meal-kit/plans">Get Started Now</a>
      </div>
    </section>
  );
}

export default UcookSection;
