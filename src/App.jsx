import React, { useEffect, useState } from "react";
import logos from "./assets/logo-pr.svg";
import mon from "./assets/react.svg";
import profile from "./assets/dbRaden.png";
import crop from "./assets/crop.png";
import dots from "./assets/dots.png";
import potrait from "./assets/portrait.png";
import Icon1 from "./assets/icon.png";
import { port } from "./data";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const d = new Date();
  let year = d.getFullYear();
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
    {
      id: 6,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icons: Icon1,
    },
  ];

  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-green-200 relative">
        {/* Navbar */}
        <nav className="fixed top-0 bg-white w-full z-10">
          <div className="mx-auto container py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img className="w-8" src={logos} alt="Logo" />
              {/* <span className="font-Nunito text-black font-bold">
                Poenya Raden
              </span> */}
            </div>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10 text-green font-bold text-sm">
              <li className="hover:text-gray-600">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-gray-600">
                <a href="#">About Me</a>
              </li>
              <li className="hover:text-gray-600">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-gray-600">
                <a href="#">Works</a>
              </li>
              <li className="hover:text-gray-600">
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* Desktop Icon */}
            <img
              src={mon}
              className="hidden md:block w-5 cursor-pointer"
              alt="React Icon"
            />
            {/* Hamburger Menu */}
            <div
              className="space-y-1 md:hidden cursor-pointer z-20"
              onClick={toggleMenu}
            >
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul className="bg-indigo-900 absolute left-0 top-16 w-full p-10 rounded-3xl text-white text-center md:hidden">
                <li className="py-2">
                  <a href="#">Home</a>
                </li>
                <li className="py-2">
                  <a href="#">About Me</a>
                </li>
                <li className="py-2">
                  <a href="#">Services</a>
                </li>
                <li className="py-2">
                  <a href="#">Works</a>
                </li>
                <li className="py-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
        {/* Intro Content */}
        {/* Image */}
        <img
          src={crop}
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
        ></img>
        {/* Circle */}
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-green-900 rounded-full -z-10"></div>
        {/* Animated Text */}
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:text-6xl lg:left-5 xl:-left-42 font-bold">
          <span className="text-gray-600">Freelance</span>
          <p id="text" className="text-orange-500">
            Developer
          </p>
        </div>
        {/* Texts */}
        <div className="hidden lg:flex flex-col absolute gap-5 rounded-lg shadow-lg top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-green-900">
            Hello, Im Raden Taufik
          </h1>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <a
            href="#contact"
            className="bg-green-900 hover:bg-green-600 duration-300 text-white text-xl p-3 py-2 w-fit rounded-md font-semibold"
          >
            Contact Me!
          </a>
        </div>
      </div>
      {/* About */}
      <div className="px-10 bg-white z-30">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center  py-40 gap-20">
          {/* Left */}
          <div className="relative">
            <img src={dots} className="absolute h-1/4 top-1 left-0" />
            <div className="h-full rounded-full overflow-hidden">
              <img src={potrait} alt="logo" />
            </div>
          </div>
          {/* Right */}
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-green-800 font-bold">About Me</h1>
            <h1 className="text-3xl font-medium">About Me</h1>
            <h1 className="text-3xl font-medium">About Me</h1>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <h2 className="text-gray-500 font-medium">HTML</h2>
            <div className="w-full bg-gray-400 h-1.5 rounded-md">
              <div className="w-full bg-green-900 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-500 font-medium">Javascript</h2>
            <div className="w-full bg-gray-400 h-1.5 rounded-md">
              <div className="w-4/5 bg-green-900 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-500 font-medium">React</h2>
            <div className="w-full bg-gray-400 h-1.5 rounded-md">
              <div className="w-4/6 bg-green-900 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div>
        <div className="container mx-auto">
          {/* Top */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-green-800 font-bold">Services</h1>
            <h1 className="text-3xl">What do I Offer?</h1>
            <p className="w-1/2 text-center text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          {/* Bottom */}
          <div className=" p-5 sm:p-0 flex flex-wrap">
            {services.map((item, index) => {
              return (
                <div className="w-full md:w-4/12 hover:shadow-lg duration-500 rounded-lg p-5 md:my-10 flex flex-col gap-3">
                  <img className="w-12" src={item.icons} alt="" />
                  <h1 className="font-medium text-lg">{item.title}</h1>
                  <p className="text-gray-400">{item.description}</p>
                  <a className="text-green-900 font-semibold text-sm" href="">
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Work */}
      <div className="py-40">
        <div className="container mx-auto">
          {/* Top */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-green-800 font-bold">Portfolio</h1>
            <h1 className="text-3xl">Work and Project</h1>
            <p className="w-1/2 text-center text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          {/* Bottom */}
          <div className=" p-5 sm:p-0 flex flex-wrap">
            {port.map((item, index) => {
              return (
                <div
                  className="w-full md:w-5/12 lg:w-1/5  duration-500 rounded-lg p-5 my-3 md:my-10 "
                  key={item.id}
                >
                  <picture className="rounded-lg overflow-hidden block">
                    <img
                      className="hover:scale-125 ease-in duration-150"
                      src={item.icons}
                      alt=""
                    />
                  </picture>

                  <h1 className="text-1xl font-semibold text-center py-2">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contact Me */}
      <div>
        <div className="container mx-auto">
          {/* Top */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-green-800 font-bold">Contact Me</h1>
            <h1 className="text-3xl">Have any Question?</h1>
            <p className="w-1/2 text-center text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          {/* Bottom */}
          <div>
            <from className="mt-5 p-8 flex flex-col gap-5 items-center">
              <input
                className="p-2 w-full ring-1 ring-green-900 rounded-sm"
                type="text"
                placeholder="Masukan Nama"
              ></input>
              <input
                className="p-2 w-full ring-1 ring-green-900 rounded-sm"
                type="email"
                placeholder="Masukan Email"
              ></input>
              <textarea
                className="p-2 w-full ring-1 ring-green-900 rounded-sm"
                name=""
                id=""
                col="30"
                rows="10"
                placeholder="Pesan..."
              ></textarea>
              <button className="w-1/2 bg-green-900 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
                Submit
              </button>
            </from>
          </div>
        </div>
      </div>
      {/* Foooter */}
      <div className="w-full bg-gray-800">
        <div className="mx-auto container py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-8" src={logos} alt="Logo" />
            <span className="font-Nunito text-white font-bold">
              Poenya Raden
            </span>
          </div>
          {/* Desktop Menu */}
          <span className="hidden md:block font-medium text-white">
            ©{year} dbRaden. Made by ❤️
          </span>
          {/* Desktop Icon */}
          <img
            src={mon}
            className="hidden md:block w-5 cursor-pointer"
            alt="React Icon"
          />
        </div>
        <div className="flex gap-2"></div>
      </div>
    </>
  );
}

export default App;
