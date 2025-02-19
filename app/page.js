"use client";

import DesktopAnimation from "@/components/desktop";
import MobileAnimation from "@/components/mobile";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // تعیین سایز موبایل و تبلت بر اساس عرض صفحه
    };

    handleResize(); // فراخوانی تابع برای تنظیم مقدار اولیه
    window.addEventListener("resize", handleResize); // اضافه کردن رویداد resize به ویندو
    return () => window.removeEventListener("resize", handleResize); // حذف رویداد resize در هنگام عدم استفاده
  }, []);
  return (
    <>
      <div>
        {isMobile ? <MobileAnimation /> : <DesktopAnimation />}
        
      </div>
    </>
  );
}
