"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FewMoreDetailsPage({ onNext, onBack }) {

  const [politicallyExposed, setPoliticallyExposed] = useState(null);
  const [taxOutsideIndia, setTaxOutsideIndia] = useState(null);

  

  return (
    <div className="min-h-screen bg-white pt-5 px-4 md:px-10 lg:px-24 flex flex-col items-center">
      {/* ===== NAVBAR ===== */}
      <div className="flex w-full max-w-7xl justify-between items-center px-2 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          Metro<span className="text-gray-900">Fintech</span>
        </h1>
        <Button
          variant="outline"
          className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Logout
        </Button>
      </div>

      {/* ===== PROGRESS BAR ===== */}
      <div className="w-full max-w-5xl flex justify-center mt-10 mb-12">
        <div className="flex items-center justify-between w-md gap-4">
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10 text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Few more details</h2>

        {/* Question 1 */}
        <div className="mb-10">
          <p className="text-gray-800 font-medium mb-3">
            Are you a politically exposed person or a relative of a politically exposed person?
          </p>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <Button
                key={option}
                type="button"
                variant="outline"
                onClick={() => setPoliticallyExposed(option)}
                className={`rounded-full px-8 py-2 text-sm ${
                  politicallyExposed === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 hover:bg-blue-50"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="mb-10">
          <p className="text-gray-800 font-medium mb-3">
            Are you paying TAX outside of India?
          </p>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <Button
                key={option}
                type="button"
                variant="outline"
                onClick={() => setTaxOutsideIndia(option)}
                className={`rounded-full px-8 py-2 text-sm ${
                  taxOutsideIndia === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 hover:bg-blue-50"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* ===== BUTTONS ===== */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={onBack}
          >
            Back
          </Button>

          <Button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-full"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <p className="text-xs text-gray-500 mt-8 mb-5 text-center px-4 max-w-3xl">
        © MetroFintech. Your data is 100% secure and confidential.
      </p>
    </div>
  );
}
