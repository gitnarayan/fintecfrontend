"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

export default function PanPage( {onNext} ) {
    const [pan, setPan] = useState("");
    const [verified, setVerified] = useState(null);
    const [investorType, setInvestorType] = useState(null);
    const [isEditable, setIsEditable] = useState(true);

    // PAN verification
    const handleVerify = () => {
        const cleanedPan = pan.replace(/\s+/g, "").toUpperCase();
        const validPan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (validPan.test(cleanedPan)) {
            setVerified(true);
            setIsEditable(false);
        } else {
            setVerified(false);
        }
    };

    // Enable editing PAN again
    const handleEdit = () => {
        setIsEditable(true);
        setVerified(null);
    };


    

    return (
        <div className="min-h-screen bg-white pt-5 px-4 md:px-10 lg:px-24 flex flex-col items-center transition-all">
            {/* ====== NAVBAR ====== */}
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

            {/* ====== PROGRESS BAR ====== */}
            <div className="w-full max-w-5xl flex justify-center mt-10 mb-12">
                <div className="flex items-center justify-between w-md gap-4 ">
                    <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
                </div>
            </div>

            {/* ====== MAIN CONTENT ====== */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-1">PAN Details</h2>
                <p className="text-gray-500 text-sm mb-8">
                    We need your PAN as per SEBI regulations
                </p>

                {/* PAN INPUT FIELD */}
                <div className="space-y-2">
                    <label
                        htmlFor="pan"
                        className="block text-sm font-medium text-gray-700"
                    >
                        PAN Number
                    </label>
                    <div className="relative flex items-center">
                        <Input
                            id="pan"
                            value={pan}
                            disabled={!isEditable}
                            onChange={(e) => {
                                setPan(e.target.value.toUpperCase());
                                setVerified(null);
                            }}
                            placeholder="Enter PAN Number"
                            maxLength={10}
                            className={`h-12 text-lg rounded-xl border pr-10 ${verified === true
                                ? "border-green-500"
                                : verified === false
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                        />
                        {/* Edit icon after verification */}
                        {verified === true && (
                            <button
                                onClick={handleEdit}
                                className="absolute right-3 text-gray-500 hover:text-gray-700"
                            >
                                <Pencil className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Locate PAN link (hidden when verified) */}
                    {!verified && (
                        <div className="text-blue-600 text-sm mt-1 cursor-pointer hover:underline w-fit">
                            Locate Your PAN Number
                        </div>
                    )}
                </div>

                {/* Feedback Messages */}
                {verified === true && (
                    <p className="text-green-600 text-sm mt-3 font-medium">
                        ✅ Congrats! Your PAN is verified
                    </p>
                )}
                {verified === false && (
                    <p className="text-red-500 text-sm mt-3 font-medium">
                        ⚠️ Invalid PAN format. Please check again.
                    </p>
                )}

                {/* Investor Type */}
                {verified === true && (
                    <div className="mt-8">
                        <p className="font-semibold mb-3">Investor Type</p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="outline"
                                className={`rounded-full px-8 py-2 border text-sm md:text-base ${investorType === "resident"
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-800 hover:bg-blue-50"
                                    }`}
                                onClick={() => setInvestorType("resident")}
                            >
                                Resident
                            </Button>

                            <Button
                                variant="outline"
                                className={`rounded-full px-8 py-2 border text-sm md:text-base ${investorType === "nri"
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-800 hover:bg-blue-50"
                                    }`}
                                onClick={() => setInvestorType("nri")}
                            >
                                NRI
                            </Button>
                        </div>
                    </div>
                )}

                {/* Safe & Secure Section */}
                <div className="mt-14 border-t border-gray-200 pt-8 text-gray-500 text-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="font-semibold text-gray-800 text-lg">₹15,400 Cr+</p>
                        <p>Investments</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 text-lg">15+ Years</p>
                        <p>Track Record</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 text-lg">25 Lakh+</p>
                        <p>Trusted Clients</p>
                    </div>
                </div>

                {/* Bottom Button */}
                <div className="mt-10 flex justify-center">
                    {verified !== true ? (
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white w-48 text-lg h-12 rounded-full"
                            onClick={handleVerify}
                        >
                            Verify
                        </Button>
                    ) : (
                        <Button
                            disabled={!investorType}
                            onClick={onNext}
                            className={`w-48 h-12 text-lg rounded-full ${investorType
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Continue
                        </Button>
                    )}
                </div>
            </div>

            {/* Footer note */}
            <p className="text-xs text-gray-500 mt-8 mb-5 text-center px-4 max-w-3xl">
                © I consent to fetch my KYC from KRA for opening Mutual Fund & Equity
                Account. 100% Safe & Secure.
            </p>
        </div>
    );
}
