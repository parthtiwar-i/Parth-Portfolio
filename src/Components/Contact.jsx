import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, smallSphere, stars } from "../assets";
import { brainwaveServices } from "../constants";
import Creating from "./Creating";

const Contact = () => {
  return (
    <Section id={"Contact"}>
      <div className="container ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading title={"Wanna discuss something Great!  Let's Connect"} />
        <div className="relative">
          <div className="relative z-1 flex justify-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]  ">
            <div className="absolute w-full h-full top-0 left-0 pointer-events-none md:w-3/5 xl:w-auto ">
              <img
                className="w-full h-full object-cover md:object-right "
                width={800}
                height={730}
                src={service1}
                alt="Buy It"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto my-auto ">
              <h4 className="h4 mb-4 ">Contact Me</h4>
              <p className="body-2 mb-[3rem] text-n-3 ">
                Got an idea! lets connect and work on it together and make the
                imagination alive
              </p>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6 ">
                  <img src={check} alt="" width={24} height={24} />
                  <p className="ml-4  ">
                    Mail Me at <a href={`mailto:tiwariparth02@gmail.com`} className="text-n-2" >tiwariparth02@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
            <Creating
              title={"Let's Create Together"}
              className={`absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2  lg:right-auto lg:bottom-8 lg:-translate-x-1/2 `}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
