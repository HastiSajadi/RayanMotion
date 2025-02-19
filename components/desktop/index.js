'use client'
import { animate, motion } from "framer-motion";
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
import sheild from "@/public/Icons/sheild.svg";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import { useState } from "react";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const logos = [fodo, zeemano, bodyspinner, joopa, koton];

const DesktopAnimation=()=>{
    const [circleComplete, setCircleComplete] = useState(false);
    const [senderComplete, setSenderComplete] = useState(false);
    const [iconComlete, setIconComplete] = useState(false);
    const [logoComplete, setLogoComlete] = useState(false);
    const [rayanComplete, setRayanComplete] = useState(false);
    const [miniIcons, setMiniIcons] = useState(false);
    const [miniIcons2, setMiniIcons2] = useState(false);
    const [miniIcons3, setMiniIcons3] = useState(false);
    const [clientsComplete, setClientsComplete] = useState(false);
    const [receiverStart, setReceiverStart] = useState(false);
  
    const circleVariants = {
      initial: { strokeDasharray: "471", strokeDashoffset: 471 },
      animate: { strokeDashoffset: 0 },
    };
  
    const divVariants = {
      initial: { scale: 1 },
      animate: { scale: [1.1, 1] },
    };
  
    const sepratorsVariants = {
      initial: { width: "0", x: "100px" },
      animate: { width: ["50px"], x: "-150px" },
    };
  
    const iconsVariants = {
      initial: { y: [0] },
      animate: { y: [0, "100px", "165px", 0, "-165px", 0] },
    };
  
    return (
      <>
        <div className="bg-white h-[100vh] flex  w-full justify-center items-center">
          <div className=" h-[100vh] lg:h-[30vh]  flex flex-col lg:flex-row items-center gap-8 ">
            <div className="flex flex-col  justify-end h-[150px] items-center gap-2 text-[16px] w-[100px] text-gray-400">
              <motion.div
                variants={divVariants}
                initial="initial"
                animate={circleComplete ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0 }}
                onAnimationComplete={() => setSenderComplete(true)}
                className="w-[80px] h-[80px] border-[4px] relative border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center "
              >
                <FaRegUser size={30} color="green" />
                <svg className="absolute ">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="transparent"
                    strokeWidth="5px"
                    variants={circleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 2 }}
                    onAnimationComplete={() => setCircleComplete(true)}
                    stroke="#6EE499"
                  />
                </svg>
              </motion.div>
              <h1>فرستنده</h1>
            </div>
  
            <div className="relative w-[100px] overflow-x-hidden">
              <div className="w-[100px]  text-[25px] text-black ">
                ...............
              </div>
              <motion.div
                variants={sepratorsVariants}
                initial="initial"
                animate={senderComplete ? "animate" : "initial"}
                transition={{ duration: 5 }}
                className=" h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "
              ></motion.div>
            </div>
  
            <div className=" h-[50vh] overflow-hidden">
              <motion.div
                variants={iconsVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 3, delay: 3 }}
                onAnimationComplete={() => setIconComplete(true)}
                className="flex flex-col justify-between mt-11 items-center h-full py-1 "
              >
                <svg className="absolute top-1 bottom-0 my-auto ">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="30"
                    fill="transparent"
                    strokeWidth="3px"
                    variants={circleVariants}
                    initial="initial"
                    animate={iconComlete ? "animate" : "initial"}
                    transition={{ duration: 2 }}
                    stroke="blue"
                  />
                </svg>
                {icons.map((icon, index) => (
                  <motion.div className="w-[60px] h-[60px] border-[1px]  bg-white shadow-md rounded-full flex items-center justify-center ">
                    <Image
                      key={index}
                      src={icon}
                      alt={`icon-${index}`}
                      className="w-6 h-6"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
  
            <div className="relative w-[100px] overflow-x-hidden">
              <div className="w-[100px]  text-[25px] text-black ">
                ...............
              </div>
              <motion.div
                variants={sepratorsVariants}
                initial="initial"
                animate={iconComlete ? "animate" : "initial"}
                transition={{ duration: 5 }}
                className=" h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "
              ></motion.div>
            </div>
  
            <div className="flex flex-col justify-end relative w-[250px]  h-[50vh]">
              {logoComplete ? (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2 }}
                  onAnimationComplete={() => setRayanComplete(true)}
                  className="w-[200px] h-[200px] border-[4px] border-gray-300  text-center relative mx-auto mb-5 bg-white rounded-full  flex justify-center items-center "
                >
                  <Image
                    src={logo}
                    alt="rayan"
                    className="absolute left-0 right-0 mx-auto "
                  />
                  <svg className="absolute w-[210px] h-[210px] ">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="100"
                      fill="transparent"
                      initial={{
                        strokeDasharray: "2000",
                        strokeDashoffset: 0,
                        stroke: "#6EE499", // Initial stroke color
                      }}
                      animate={{
                        strokeDashoffset: 0,
                        stroke: "blue",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      strokeWidth="8px"
                    />
                  </svg>
                </motion.div>
              ) : (
                <div className="w-[200px] h-[200px] border-[4px] border-gray-300  text-center relative mx-auto mb-5 bg-white rounded-full  flex justify-center items-center ">
                  <Image
                    src={logo}
                    alt="rayan"
                    className="absolute left-0 right-0 mx-auto "
                  />
                  <svg className="absolute w-[210px] h-[210px] ">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="100"
                      fill="transparent"
                      initial={{
                        strokeDasharray: "2000",
                        strokeDashoffset: 2000,
                        stroke: "#6EE499", // Initial stroke color
                        opacity: 1,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                        stroke: ["#6EE499"],
                      }}
                      transition={{
                        delay: 8,
                        duration: 16,
                      }}
                      strokeWidth="8px"
                    />
                  </svg>
                </div>
              )}
  
              <div className="flex justify-center items-center gap-5 mt-5 mb-10">
                <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                  <div className="w-[50px] h-[50px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                    <svg className="absolute  ">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="25"
                        fill="transparent"
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                        strokeWidth="4px"
                        transition={{ delay: 8, duration: 1 }}
                        onAnimationComplete={() => setMiniIcons(true)}
                        stroke="#6EE499"
                      />
                    </svg>
                    <div className="absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center">
                      <IoIosFlash color="#B6BFCD" size={24} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: miniIcons ? 1 : 0,
                      }}
                      onAnimationComplete={() => setMiniIcons2(true)}
                      className="absolute left-0 bg-white  rounded-full right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center"
                    >
                      <FaCheck color="#6EE499" size={24} />
                    </motion.div>
                  </div>
                  <h1>سریع</h1>
                </div>
  
                <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                  <div className="w-[50px] h-[50px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                    <svg className="absolute  ">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="25"
                        fill="transparent"
                        variants={circleVariants}
                        initial="initial"
                        animate={miniIcons2 ? "animate" : "initial"}
                        strokeWidth="4px"
                        transition={{ delay: 9, duration: 2 }}
                        onAnimationComplete={() => setMiniIcons3(true)}
                        stroke="#6EE499"
                      />
                    </svg>
                    <div className="absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center">
                      <Image src={sheild} alt="icon" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: miniIcons ? 1 : 0,
                      }}
                      transition={{ delay: 1 }}
                      onAnimationComplete={() => setMiniIcons3(true)}
                      className="absolute left-0 bg-white  rounded-full right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center"
                    >
                      <FaCheck color="#6EE499" size={24} />
                    </motion.div>
                  </div>
                  <h1>قابل اعتماد</h1>
                </div>
  
                <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                  <div className="w-[50px] h-[50px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                    <svg className="absolute  ">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="25"
                        fill="transparent"
                        variants={circleVariants}
                        initial="initial"
                        animate={miniIcons3 ? "animate" : "initial"}
                        strokeWidth="4px"
                        transition={{ delay: 9, duration: 2 }}
                        onAnimationComplete={() => {
                          setTimeout(() => {
                            setLogoComlete(true);
                          }, 2000);
                          // پس از اتمام انیمیشن می‌خواهیم رنگ stroke تغییر کند
                        }}
                        stroke="#6EE499"
                      />
                    </svg>
                    <div className="absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center">
                      <FaPiggyBank color="#B6BFCD" size={24} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: miniIcons ? 1 : 0,
                      }}
                      transition={{ delay: 2 }}
                      className="absolute left-0 bg-white  rounded-full right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center"
                    >
                      <FaCheck color="#6EE499" size={24} />
                    </motion.div>
                  </div>
                  <h1>مقرون به صرفه</h1>
                </div>
              </div>
            </div>
  
            <div className="relative w-[100px] overflow-x-hidden">
              <div className="w-[100px]  text-[25px] text-black ">
                ...............
              </div>
              <motion.div
                variants={sepratorsVariants}
                initial="initial"
                animate={rayanComplete ? "animate" : "initial"}
                transition={{ duration: 5 }}
                className=" h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "
              ></motion.div>
            </div>
  
            <div className=" h-[50vh] overflow-hidden">
              <div className="flex flex-col justify-between  items-center h-full py-1 ">
                {logos.map((icon, index) => (
                  <motion.div
                    variants={iconsVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 3, delay: 15 }}
                    className="w-[80px] h-[80px] border-[1px]   bg-white shadow-md rounded-full flex items-center justify-center "
                  >
                    <svg className="absolute top-1 bottom-0 my-auto ">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        fill="transparent"
                        strokeWidth="3px"
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 2, delay: 18 }}
                        onAnimationComplete={() => setClientsComplete(true)}
                        stroke="blue"
                      />
                    </svg>
                    <Image
                      key={index}
                      src={icon}
                      alt={`icon-${index}`}
                      className="w-14 h-w-14"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
  
            <div className="relative w-[100px] overflow-x-hidden">
              <div className="w-[100px]  text-[25px] text-black ">
                ...............
              </div>
              <motion.div
                variants={sepratorsVariants}
                initial="initial"
                animate={clientsComplete ? "animate" : "initial"}
                transition={{ duration: 5 }}
                onAnimationComplete={() => setReceiverStart(true)}
                className=" h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "
              ></motion.div>
            </div>
  
            <div className="flex flex-col relative justify-end h-[150px] items-center gap-2 text-[16px] w-[100px] text-gray-400">
              <motion.div
                variants={divVariants}
                initial="initial"
                animate={receiverStart ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0 }}
                className="w-[80px] h-[80px] border-[4px] relative border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center "
              >
                <FaRegUser size={30} color="green" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: receiverStart ? 1 : 0,
                  }}
                  transition={{ delay: 2 }}
                  className="absolute left-0 bg-white  rounded-full right-0 top-0 bottom-0 my-auto mx-auto w-full h-full flex justify-center items-center"
                >
                  <FaCheck color="#6EE499" size={24} />
                </motion.div>
                <svg className="absolute ">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="transparent"
                    strokeWidth="5px"
                    variants={circleVariants}
                    initial="initial"
                    animate={receiverStart ? "animate" : "initial"}
                    transition={{ duration: 2 }}
                    stroke="#6EE499"
                  />
                </svg>
              </motion.div>
              <h1>گیرنده</h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default DesktopAnimation;