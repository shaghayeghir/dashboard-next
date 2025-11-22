"use client";

import { memo } from "react";
import Lottie from "lottie-react";

import idlMonkey from "public/animations/Hear-no.json";
import sleepMonkey from "public/animations/See-no.json";

type PandaAnimationProps = {
  state?: "none" | "email" | "password";
  size?: number | string;
};

function MonkeyAnimation({ state = "none", size = 80 }: PandaAnimationProps) {
  const getAnimation = () => {
    switch (state) {
      case "password":
        return sleepMonkey; // پاندا چشم‌هاشو می‌گیره
      case "email":
        return idlMonkey; // پاندا فعال / آماده کار
      default:
        return idlMonkey; // حالت عادی
    }
  };

  return (
    <div style={{ width: size, margin: "0 auto" }}>
      <Lottie animationData={getAnimation()} loop={true} />
    </div>
  );
}

export default memo(MonkeyAnimation);
