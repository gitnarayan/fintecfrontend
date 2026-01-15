"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from "lucide-react";

export default function KycDetailsPage({ onNext, onBack }) {
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");

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
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* ===== KYC FORM CARD ===== */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">KYC Details</h2>
        <p className="text-gray-500 text-sm mb-8">
          Please provide your KYC information to continue
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DOB */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="date"
                className="pl-10 h-12 text-gray-700"
              />
            </div>
          </div>

          {/* Father's Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Father's Name
            </label>
            <Input placeholder="Enter Father's Name" className="h-12" />
          </div>

          {/* Mother's Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Mother's Name
            </label>
            <Input placeholder="Enter Mother's Name" className="h-12" />
          </div>

          {/* Marital Status */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Marital Status
            </label>
            <div className="flex gap-3 flex-wrap">
              {["Single", "Married"].map((status) => (
                <Button
                  key={status}
                  type="button"
                  variant="outline"
                  onClick={() => setMaritalStatus(status)}
                  className={`rounded-full px-6 py-2 transition-all ${maritalStatus === status
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 hover:bg-blue-50"
                    }`}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex gap-3 flex-wrap">
              {["Male", "Female", "Transgender"].map((g) => (
                <Button
                  key={g}
                  type="button"
                  variant="outline"
                  onClick={() => setGender(g)}
                  className={`rounded-full px-6 py-2 transition-all ${gender === g
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 hover:bg-blue-50"
                    }`}
                >
                  {g}
                </Button>
              ))}
            </div>
          </div>

          {/* Country of Birth */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Country of Birth
            </label>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter Country of Birth"
              className="h-12"
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Nationality
            </label>
            <Input
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="Enter Nationality"
              className="h-12"
            />
          </div>

          {/* Occupation */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Occupation
            </label>
            <Select onValueChange={setOccupation}>
              <SelectTrigger className="h-12 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-400">
                <SelectValue placeholder="Select Occupation" />
              </SelectTrigger>
              <SelectContent side="bottom">
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Farmer">Farmer</SelectItem>
                <SelectItem value="Gov Service">Government Service</SelectItem>
                <SelectItem value="Private Sector">Private Sector</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Public Sector">Public Sector</SelectItem>
                <SelectItem value="Retired">Retired</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Annual Income */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Annual Income
            </label>
            <Select onValueChange={setIncome}>
              <SelectTrigger className="h-12 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-400">
                <SelectValue placeholder="Select Annual Income" />
              </SelectTrigger>
              <SelectContent side="bottom">
                <SelectItem value="<1 Lakh">Less than ₹1 Lakh</SelectItem>
                <SelectItem value="1-5 Lakh">₹1 - ₹5 Lakh</SelectItem>
                <SelectItem value="5-10 Lakh">₹5 - ₹10 Lakh</SelectItem>
                <SelectItem value="10-25 Lakh">₹10 - ₹25 Lakh</SelectItem>
                <SelectItem value=">25 Lakh">Above ₹25 Lakh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>

        {/* ===== BUTTONS ===== */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={onBack}
            className="rounded-full px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Back
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-full"
            onClick={onNext}
          >
            Continue
          </Button>
        </div>
      </div>

      {/* ===== FOOTER NOTE ===== */}
      <p className="text-xs text-gray-500 mt-8 mb-5 text-center px-4 max-w-3xl">
        © MetroFintech. Your KYC information is 100% safe and secure.
      </p>
    </div>
  );
}
