import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} width={62} height={62} alt="Sample" className="rounded-xl" />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base ">{title}</h6>
        <div className=" flex items-center justify-between">
          <ul className="flex gap-5 -m-0.5">
            {notificationImages.map((img, index) => (
              <li
                key={index}
                className="flex  h-6 w-6 rounded-full overflow-hidden "
              >
                <img
                  src={img}
                  className="w-full"
                  width={10}
                  height={10}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
