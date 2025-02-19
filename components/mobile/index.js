import { useState } from "react";
import { FaCheck, FaPiggyBank, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
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

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const logos = [fodo, zeemano, bodyspinner, joopa, koton];
const MobileNimation = () => {
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
    initial: { width: "0", x: "80px" },
    animate: { width: ["50px"], x: "-130px" },
  };

  const iconsVariants = {
    initial: { x: ["-30px"] },
    animate: { x: ["-30px", "100px", "165px", "-30px", "-165px", "-30px"] },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, staggerChildren: 0.5 }}
        className="bg-white overflow-y-scroll py-5 flex  w-full justify-center overflow-x-hidden items-center"
      >
        <div className=" h-full  flex flex-col  items-center gap-5 ">
          <div className="flex flex-col  justify-end  items-center gap-2 text-[14px] w-[100px] text-gray-400">
            <motion.div
              variants={divVariants}
              initial="initial"
              animate={circleComplete ? "animate" : "initial"}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setSenderComplete(true)}
              className="w-[60px] h-[60px] border-[4px] relative border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center "
            >
              <FaRegUser size={26} color="6EE499" />
              <svg className="absolute  ">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="30"
                  fill="transparent"
                  strokeWidth="3px"
                  variants={circleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1, duration: 2 }}
                  onAnimationComplete={() => setCircleComplete(true)}
                  stroke="#6EE499"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <h1>فرستنده</h1>
          </div>

          <div className="relative w-[50px] flex items-center justify-center overflow-x-hidden -rotate-90 ">
            <div className="w-[50px] mb-1 text-[25px] text-black ">
              ..........
            </div>
            <motion.div
              variants={sepratorsVariants}
              initial="initial"
              animate={senderComplete ? "animate" : "initial"}
              transition={{ duration: 5 }}
              className=" h-[8px] absolute top-[19px] opacity-80 bg-green-400 rounded-full "
            ></motion.div>
          </div>

          <div
            className=" w-full  overflow-hidden  "
            style={{
              boxShadow:
                "inset 20px 0px 16px 9px rgb(255 255 255), inset -20px 0px 16px rgb(255 255 255)",
            }}
          >
            <motion.div
              variants={iconsVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 3, delay: 3 }}
              onAnimationComplete={() => setIconComplete(true)}
              className="flex  justify-between items-center gap-4 py-1 "
            >
              <svg className="absolute right-[7px]">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25"
                  fill="transparent"
                  strokeWidth="3px"
                  variants={circleVariants}
                  initial="initial"
                  animate={iconComlete ? "animate" : "initial"}
                  transition={{ duration: 2 }}
                  stroke="blue"
                  strokeLinecap="round"
                />
              </svg>
              {icons.map((icon, index) => (
                <motion.div
                  className={`w-[50px] h-[50px] border-[1px] bg-white shadow-md rounded-full flex items-center justify-center `}
                >
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

          <div className="relative w-[50px] flex items-center justify-center overflow-x-hidden -rotate-90 ">
            <div className="w-[50px] mb-1 text-[25px] text-black ">
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

          <div className="flex flex-col justify-start mt-2 relative w-[250px]  ">
            {logoComplete ? (
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setRayanComplete(true)}
                className="w-[140px] h-[140px] border-[4px] border-gray-300  text-center relative mx-auto mb-5 bg-white rounded-full  flex justify-center items-center "
              >
                <Image
                  src={logo}
                  alt="rayan"
                  className="absolute left-0 right-0 mx-auto "
                />
                <svg className="absolute w-[150px] h-[150px] ">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="70"
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
                    strokeWidth="5px"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            ) : (
              <div className="w-[140px] h-[140px] border-[4px] border-gray-300  text-center relative mx-auto mb-5 bg-white rounded-full  flex justify-center items-center ">
                <Image
                  src={logo}
                  alt="rayan"
                  className="absolute left-0 right-0 mx-auto "
                />
                <svg className="absolute w-[150px] h-[150px]  ">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="70"
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
                    strokeWidth="5px"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}

            <div className="flex justify-center items-center gap-5 mt-5 mb-2">
              <div className="flex flex-col justify-center items-center gap-2 text-[10px] w-[100px] text-gray-400">
                <div className="w-[40px] h-[40px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                  <svg className="absolute  ">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="20"
                      fill="transparent"
                      variants={circleVariants}
                      initial="initial"
                      animate="animate"
                      strokeWidth="3px"
                      strokeLinecap="round"
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
                <div className="w-[40px] h-[40px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                  <svg className="absolute  ">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="20"
                      fill="transparent"
                      variants={circleVariants}
                      initial="initial"
                      animate={miniIcons2 ? "animate" : "initial"}
                      strokeWidth="3px"
                      strokeLinecap="round"
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
                <div className="w-[40px] h-[40px] bg-white relative border-[1px] border-gray-200 shadow-md rounded-full flex justify-center items-center ">
                  <svg className="absolute  ">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="20"
                      fill="transparent"
                      variants={circleVariants}
                      initial="initial"
                      animate={miniIcons3 ? "animate" : "initial"}
                      strokeWidth="3px"
                      strokeLinecap="round"
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

          <div className="relative w-[50px] flex items-center justify-center overflow-x-hidden -rotate-90 ">
            <div className="w-[50px] mb-1 text-[25px] text-black ">
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

          {/* <div className=" w-full overflow-hidden">
            <div className="flex  justify-between  items-center gap-4 py-1 ">
            <svg className="absolute left-1 z-[100] right-0 mx-auto ">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="30"
                  fill="transparent"
                  strokeWidth="3px"
                  variants={circleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, delay: 18 }}
                  onAnimationComplete={() => setClientsComplete(true)}
                  stroke="blue"
                  strokeLinecap="round"
                />
              </svg>
              {logos.map((icon, index) => (
                <motion.div
                  initial={{ x: ["2px"] }}
                  animate={{
                    x: ["2px", "100px", "165px", "2px", "-165px", "2px"],
                  }}
                  transition={{ duration: 3, delay: 15 }}
                  className="w-[60px] h-[60px] border-[1px]   bg-white shadow-md rounded-full flex items-center justify-center "
                >
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="w-10 h-w-10"
                  />
                </motion.div>
              ))}
              
            </div>
          </div> */}
          <div
            className=" w-full  overflow-hidden  "
            style={{
              boxShadow:
                "inset 20px 0px 16px 9px rgb(255 255 255), inset -20px 0px 16px rgb(255 255 255)",
            }}
          >
            <motion.div
              initial={{ x: ["2px"] }}
              animate={{
                x: ["2px", "100px", "165px", "2px", "-165px", "2px"],
              }}
              transition={{ duration: 3, delay: 15 }}
              onAnimationComplete={() => setIconComplete(true)}
              className="flex  justify-between items-center gap-4 py-1 "
            >
              <svg className="absolute left-0 right-0 mx-auto">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="30"
                  fill="transparent"
                  strokeWidth="3px"
                  variants={circleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, delay: 18 }}
                  stroke="blue"
                  strokeLinecap="round"
                  onAnimationComplete={() => setClientsComplete(true)}
                />
              </svg>
              {logos.map((icon, index) => (
                <motion.div
                
                  className={`w-[60px] h-[60px] border-[1px] bg-white shadow-md rounded-full flex items-center justify-center `}
                >
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="w-8 h-8"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-[50px] flex items-center justify-center overflow-x-hidden -rotate-90 ">
            <div className="w-[50px] mb-1 text-[25px] text-black ">
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

          <div className="flex flex-col relative justify-start items-center gap-2 text-[14px] w-[100px] text-gray-400">
            <motion.div
              variants={divVariants}
              initial="initial"
              animate={receiverStart ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: 0 }}
              className="w-[60px] h-[60px] border-[4px] relative border-gray-200 bg-white shadow-md rounded-full flex items-center justify-center "
            >
              <FaRegUser size={24} color="6EE499" />
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
              <svg className="absolute w-[70px] h-[70px] ">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="30"
                  fill="transparent"
                  strokeWidth="3px"
                  variants={circleVariants}
                  initial="initial"
                  animate={receiverStart ? "animate" : "initial"}
                  transition={{ duration: 1 }}
                  stroke="#6EE499"
                />
              </svg>
            </motion.div>
            <h1>گیرنده</h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNimation;
