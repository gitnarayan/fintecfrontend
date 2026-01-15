"use client";

import React, { useState } from "react";
import Pan from "@/components/Onboarding/Pan";
import Kyc from "@/components/Onboarding/Kyc";
import FewMoreDetails from "@/components/Onboarding/FewMoreDetails";


export default function OnboardingPage() {
  const [step, setStep] = useState("pan");

  return (
    <>
      {step === "pan" && <Pan onNext={() => setStep("kyc")} />}
      {step === "kyc" && <Kyc onNext={() => setStep("few")} onBack={() => setStep("pan")} />}
      {step === "few" && <FewMoreDetails onNext={()=> setStep("#")} onBack={() => setStep("kyc")} />}
    </>
  );
}
