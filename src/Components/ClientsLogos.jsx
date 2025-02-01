import React from "react";
import { companyLogos } from "../constants";

const ClientsLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline text-center  text-n-1/50 ">
        Helping Peoples to Make their Designes Come ALIVE!
      </h5>
      {/* <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ClientsLogos;
