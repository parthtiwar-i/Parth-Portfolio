import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1 } from "../assets";
import { brainwaveServices } from "../constants";
import Creating from "./Creating";

const Contact = () => {
  return (
    <Section id={"Contact"}>
      <div className="container ">
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
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 "
                  >
                    <img src={check} alt="" width={24} height={24} />
                    <p className="ml-4  ">{item}</p>
                  </li>
                ))}
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
