"use client";

import { AWAY_TITLE } from "@/lib/data";
import { useEffect } from "react";

const TitleOnBlur = () => {
  useEffect(() => {
    const original = document.title;
    const onChange = () => {
      document.title = document.hidden ? AWAY_TITLE : original;
    };
    document.addEventListener("visibilitychange", onChange);
    return () => {
      document.removeEventListener("visibilitychange", onChange);
      document.title = original;
    };
  }, []);

  return null;
};

export default TitleOnBlur;
