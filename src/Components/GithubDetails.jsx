import React, { useEffect, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const GithubDetails = () => {
  const slideDivLeft = useRef(null);
  const slideDivRight = useRef(null);

  useEffect(() => {
    const el1 = slideDivLeft.current;
    const el2 = slideDivRight.current;
    gsap.fromTo(
      el1,
      { transform: `translateX(200%)`, opacity: `0` },
      {
        transform: `translateX(0)`,
        opacity: 1,
        duration: 2,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: el1,
        },
      }
    );
    gsap.fromTo(
      el2,
      { transform: `translateX(-200%)`, opacity: `0` },
      {
        transform: `translateX(0)`,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el2,
        },
      }
    );
  }, []);

  return (
    <Section id={"works"}>
      <div className="container relative z-2 ">
        <Heading
          className=" text-center max-w-md lg:max-w-2xl "
          title="Work Experiences"
        />
        <div className="flex flex-wrap gap-10 mb-10 justify-center ">
          {benefits.map((item, index) => (
            <Link to={"https://www.linkedin.com/in/parth-tiwari-9020721a7/"}>
              <div
                ref={index % 2 === 0 ? slideDivLeft : slideDivRight}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem] "
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt="project link"
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                      ....
                    </p>
                    <Arrow />
                  </div>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8 "
                  style={{ clipPath: `url(#benefits)` }}
                >
                  <div className=" absolute inset-0 opacity-0 transition-opacity hover:opacity-10 ">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GithubDetails;
