import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative mb-[6.5rem] z-2">
        <div className="hidden relative justify-center lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
        </div>

        <img src={stars} alt="Stars" 
        className="w-full"
        width={950}
        height={400}
        />
      </div>
    </Section>
  );
};

export default Pricing;
