import React from "react";
import Section from "./Section";
import { collabContent } from "../constants";
import { check } from "../assets";
import Button from "./Button";

const Skills = () => {
  return (
    <Section crosses>
      <div className="container lg:flex ">
        <div className="max-w-[25rem] ">
          <h1 className=" h2 mb-4 md:mb-6 ">
            My Skill Sets and Technologies I know{" "}
          </h1>
          <ul className=" max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item, index) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center ">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="h6 body-2 ml-5 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Rate My Skills</Button>
        </div>
        <div className=" lg:ml-auto xl:w-[38rem] ">
            
        </div>
      </div>
    </Section>
  );
};

export default Skills;
