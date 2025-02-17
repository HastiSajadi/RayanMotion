"use client";
import { motion } from "framer-motion";
import { FaCheck, FaPiggyBank, FaRegUser } from "react-icons/fa";
import icon1 from "@/public/Icons/1.svg";
import icon2 from "@/public/Icons/2.svg";
import icon3 from "@/public/Icons/3.svg";
import icon4 from "@/public/Icons/4.svg";
import icon5 from "@/public/Icons/5.svg";
import icon6 from "@/public/Icons/6.svg";
import logo from "@/public/Icons/logo.svg";
import zeemano from "@/public/Icons/zeemano.svg";
import bodyspinner from "@/public/Icons/bodyspinner.svg";

import joopa from "@/public/Icons/joopa.svg";
import koton from "@/public/Icons/koton.svg";

import fodo from "@/public/Icons/fodo.svg";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import { FaShield } from "react-icons/fa6";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const logos = [fodo, zeemano, bodyspinner, joopa, koton];

export default function Home() {
  return (
    <>
      <div
        className="bg-white h-[100vh] flex  w-full justify-center items-center"
        dir="rtl"
      >
        <div className=" h-[100vh] lg:h-[30vh]  flex flex-col lg:flex-row items-center gap-8 ">
          <div className="flex flex-col relative justify-end h-[150px] items-center gap-2 text-[16px] w-[100px] text-gray-400">
            <div className="w-[80px] h-[80px] border-[4px]  absolute top-0 bottom-0 my-auto border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center ">
              <FaRegUser size={30} color="green" />
            </div>
            <h1>گیرنده</h1>
          </div>

          <div className="relative">
            <div className="w-[100px]  text-[25px] text-black ">
              ...............
            </div>
            <div className="w-[100px] h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "></div>
          </div>

          <div className=" h-[50vh] overflow-hidden">
            <div className="flex flex-col justify-between mt-11 items-center h-full py-1 ">
              {icons.map((icon, index) => (
                <div className="w-[60px] h-[60px] border-[1px]  bg-white shadow-md rounded-full flex items-center justify-center ">
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="w-6 h-6"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-[100px]  text-[25px] text-black ">
              ...............
            </div>
            <div className="w-[100px] h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "></div>
          </div>

          <div className="flex flex-col justify-end relative w-[250px]  h-[50vh]">
            <div className="w-[200px] h-[200px] absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto  bg-white rounded-full border-[4px] border-gray-200 flex justify-center items-center ">
              <Image src={logo} alt="rayan" />
            </div>
            <div className="flex justify-center items-center gap-5 mt-5 mb-10">
              <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                <div className="w-[40px] h-[40px] bg-white border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                  <IoIosFlash color="#B6BFCD" size={24} />
                </div>
                <h1>سریع</h1>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                <div className="w-[40px] h-[40px] relative bg-white border-[1px] border-gray-200 shadow-md rounded-full ">
                  <FaShield
                    color="#B6BFCD"
                    size={20}
                    className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"
                  />
                  <FaCheck
                    color="white"
                    size={14}
                    className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"
                  />
                </div>
                <h1>قابل اعتماد</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                <div className="w-[40px] h-[40px] bg-white border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                  <FaPiggyBank color="#B6BFCD" size={20} />
                </div>
                <h1>مقرون به‌صرفه</h1>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-[100px]  text-[25px] text-black ">
              ...............
            </div>
            <div className="w-[100px] h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "></div>
          </div>

          <div className=" h-[50vh] overflow-hidden">
            <div className="flex flex-col justify-between items-center h-full py-1 ">
              {logos.map((icon, index) => (
                <div className="w-[80px] h-[80px] border-[1px]  bg-white shadow-md rounded-full flex items-center justify-center ">
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="w-14 h-w-14"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-[100px]  text-[25px] text-black ">
              ...............
            </div>
            <div className="w-[100px] h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "></div>
          </div>

          <div className="flex flex-col relative justify-end h-[150px] items-center gap-2 text-[16px] w-[100px] text-gray-400">
            <div className="w-[80px] h-[80px] border-[4px] absolute top-0 bottom-0 my-auto border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center ">
              <FaRegUser size={30} color="green" />
            </div>
            <h1>فرستنده</h1>
          </div>
        </div>
      </div>
    </>
  );
}
