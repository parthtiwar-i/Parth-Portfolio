import React, { Fragment, useState } from "react";
import logo from "../assets/MyLogo.jpeg";
import { navigation } from "../constants";
import { useLocation } from "react-router";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNavigation = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };

  const handelClick = () => {
    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <Fragment>
      <div
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
          <a className="block w-[5rem] xl:mr-8" href="#me">
            <img
              className="drop-shadow-md rounded-full"
              src={logo}
              width={50}
              alt="Chilli-Potato"
            />
          </a>
          <nav
            className={`${
              openNav ? "flex" : "hidden"
            }  fixed top-[6.5rem] right-0 left-0 bottom-0 bg-n-8 lg:flex lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col justify-center items-center mx-auto lg:flex-row ">
              {navigation.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  onClick={handelClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1 "
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:hover:scale-105 lg:transition-all lg:duration-300 `}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          <a
            href="signUp"
            className="button hidden mr-8 text-n-1/50 transition-colors lg:text-n-1 lg:block lg:text-base "
          >
            Hire ME
          </a>
          <Button className={"hidden lg:flex lg:text-base"} href={"#login"}>
            Buy Me a Coffee
          </Button>
          <Button
            onClick={toggleNavigation}
            px={"px-3"}
            className={`ml-auto lg:hidden`}
          >
            <MenuSvg openNavigation={openNav} />
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
