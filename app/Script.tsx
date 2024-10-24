"use client";

import { useEffect } from "react";

export default function Script() {
  useEffect(() => {
    const loadBootstrap = async () => {
      try {
        await import("bootstrap");
        console.log("Bootstrap JS loaded successfully");
      } catch (error) {
        console.error("Error loading Bootstrap JS:", error);
      }
    };

    loadBootstrap();
  }, []); // Chỉ load một lần khi component mount
  return <></>;
}
