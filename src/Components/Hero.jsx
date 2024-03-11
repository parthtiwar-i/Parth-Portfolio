import React, { useRef } from "react";
import Section from "./Section";
import { background, curve, heroBackground, working } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import Creating from "./Creating";
import Notification from "./Notification";
import ClientsLogos from "./ClientsLogos";

const Hero = () => {
  const ParallaxRef = useRef(null);
  return (
    <Section
      className={`pt-[12rem]  -mt-[5rem] `}
      crosses
      crossesOffset="lg:translate-y-[5.25rem] "
      customPadding
      id={"hero"}
    >
      <div className=" container relative " ref={ParallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[4rem]   ">
          <h1 className="h1 mb-6">
            Welcome to My Dev World! I'm
            <span className=" inline-block relative bg-gradient-to-r from-blue-900 via-purple-700 to-cyan-400 bg-clip-text text-transparent">
              PARTH TIWARI
              <img
                src={curve}
                className="absolutet top-full left-0  xl:-mt-2 "
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8  ">
            Elevate your online presence and redefine user experiences with
            cutting-edge solutions with me. Hey! I'm a full-stack web developer
            specializing in MERN technology.
          </p>
          <Button href={"#Contact"} color={"white"}>
            Grab Your Design
          </Button>
        </div>
        <div className="relative max-w-[100rem] mx-auto lg:max-w-6xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                <img
                  src={working}
                  alt="Me"
                  className=" w-full  h-[100%] object-cover scale-[1.2] mx-auto "
                  width={1024}
                  height={490}
                />

                <Creating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-3 md:w-[31rem] md:-translate-x-1/2 "
                  }
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className=" hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt="" width={24} height={25} />
                      </li>
                    ))}{" "}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[20rem] w-[18rem] xl:flex"
                    title="Web Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[40%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[80%] -z-1 ">
            <img
              src={heroBackground}
              alt="Hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />

          <ClientsLogos className="hidden relative z-10 mt-20 lg:block " />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
