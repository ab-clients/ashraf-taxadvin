"use client";

import React, { useState } from "react";

export const Seal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block fixed bottom-12 right-8 z-100 cursor-grab hover:scale-105 transition-transform duration-100 "
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      aria-label="Close certification seal"
    >
      <div className="relative transform -rotate-12">
        <div className="bg-yellow-300/15 dark:bg-yellow-600/20 backdrop-blur-sm border-3 border-yellow-400/50 dark:border-yellow-500/60 rounded-lg px-4 py-3 sm:px-6 sm:py-4 shadow-xl">
          <div className="border-2 border-dashed border-yellow-400/40 dark:border-yellow-500/50 rounded p-2 sm:p-3">
            <div className="text-center">
              <div className="text-xs sm:text-md font-bold text-yellow-800 dark:text-yellow-100 tracking-wider mb-4">
                GUARANTEED TAX SAVINGS
              </div>

              <div className="text-xs sm:text-sm font-semibold text-yellow-900 dark:text-yellow-50 leading-tight mb-1">
                <div>LED BY</div>
                <div className="text-sm sm:text-base font-bold">
                  ASHRAF ABDELTAWAB
                </div>
              </div>

              <div className="text-lg sm:text-xl font-black text-yellow-700 dark:text-yellow-200 tracking-widest bold italic">
                CPA
              </div>

              <div className="w-12 sm:w-16 h-0.5 bg-yellow-600 dark:bg-yellow-300 mx-auto mt-1"></div>
            </div>
          </div>

          {/* Stamp texture overlay */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-200/5 dark:from-yellow-400/10 via-transparent to-yellow-400/10 dark:to-yellow-600/15 pointer-events-none"></div>

          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-yellow-500/60 dark:bg-yellow-400/70 rounded-full"></div>
          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-500/60 dark:bg-yellow-400/70 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-yellow-500/60 dark:bg-yellow-400/70 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-yellow-500/60 dark:bg-yellow-400/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
