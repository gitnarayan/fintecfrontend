"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function OtpModal({ open, onClose, onContinue, email = "", mobile = "" }) {
  const CODE_LENGTH = 6;


  const router = useRouter();

  // otp arrays
  const [emailOtp, setEmailOtp] = useState(Array(CODE_LENGTH).fill(""));
  const [mobileOtp, setMobileOtp] = useState(Array(CODE_LENGTH).fill(""));

  // verification state: null | true | false
  const [emailVerified, setEmailVerified] = useState(null);
  const [mobileVerified, setMobileVerified] = useState(null);

  // refs for inputs
  const emailRefs = useRef([]);
  const mobileRefs = useRef([]);

  // timers (in seconds)
  const [emailTimer, setEmailTimer] = useState(60);
  const [mobileTimer, setMobileTimer] = useState(60);

  // When modal opens -> reset inputs/messages/timers
  useEffect(() => {
    if (open) {
      setEmailOtp(Array(CODE_LENGTH).fill(""));
      setMobileOtp(Array(CODE_LENGTH).fill(""));
      setEmailVerified(null);
      setMobileVerified(null);
      setEmailTimer(60);
      setMobileTimer(60);

      // focus first email input by default (small delay to ensure dialog rendered)
      setTimeout(() => {
        if (emailRefs.current[0]) emailRefs.current[0].focus();
      }, 60);
    }
  }, [open]);

  // email timer countdown
  useEffect(() => {
    if (!open) return;
    if (emailTimer === 0) return;
    const id = setInterval(() => setEmailTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [emailTimer, open]);

  // mobile timer countdown
  useEffect(() => {
    if (!open) return;
    if (mobileTimer === 0) return;
    const id = setInterval(() => setMobileTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [mobileTimer, open]);

  // handle change for otp inputs (email/mobile)
  const handleChange = (e, index, type) => {
    const raw = e.target.value;
    const val = raw.replace(/\D/g, "").slice(-1); // only last digit, no non-digits
    if (!/^[0-9]?$/.test(val)) return;

    if (type === "email") {
      const next = [...emailOtp];
      next[index] = val;
      setEmailOtp(next);
      // clear previous invalid state when typing
      if (emailVerified !== null) setEmailVerified(null);
      if (val && index < CODE_LENGTH - 1) emailRefs.current[index + 1]?.focus();
    } else {
      const next = [...mobileOtp];
      next[index] = val;
      setMobileOtp(next);
      if (mobileVerified !== null) setMobileVerified(null);
      if (val && index < CODE_LENGTH - 1) mobileRefs.current[index + 1]?.focus();
    }
  };

  // handle keydown for backspace navigation
  const handleKeyDown = (e, index, type) => {
    if (e.key === "Backspace") {
      if (type === "email") {
        // if current has value, clear it (handled by onChange too)
        if (emailOtp[index]) {
          const next = [...emailOtp];
          next[index] = "";
          setEmailOtp(next);
          setEmailVerified(null);
        } else if (index > 0) {
          emailRefs.current[index - 1]?.focus();
          const next = [...emailOtp];
          next[index - 1] = "";
          setEmailOtp(next);
        }
      } else {
        if (mobileOtp[index]) {
          const next = [...mobileOtp];
          next[index] = "";
          setMobileOtp(next);
          setMobileVerified(null);
        } else if (index > 0) {
          mobileRefs.current[index - 1]?.focus();
          const next = [...mobileOtp];
          next[index - 1] = "";
          setMobileOtp(next);
        }
      }
    }

    // support left/right arrow keys
    if (e.key === "ArrowLeft") {
      if (index > 0) {
        (type === "email" ? emailRefs : mobileRefs).current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowRight") {
      if (index < CODE_LENGTH - 1) {
        (type === "email" ? emailRefs : mobileRefs).current[index + 1]?.focus();
      }
    }
  };

  // resend handlers
  const resendEmail = () => {
    if (emailTimer > 0) return;
    setEmailOtp(Array(CODE_LENGTH).fill(""));
    setEmailVerified(null);
    setEmailTimer(60);
    setTimeout(() => emailRefs.current[0]?.focus(), 40);
    // TODO: call your API to send OTP
  };

  const resendMobile = () => {
    if (mobileTimer > 0) return;
    setMobileOtp(Array(CODE_LENGTH).fill(""));
    setMobileVerified(null);
    setMobileTimer(60);
    setTimeout(() => mobileRefs.current[0]?.focus(), 40);
    // TODO: call your API to send OTP
  };

  // verify handlers (replace with actual API call)
  const verifyEmail = () => {
    const code = emailOtp.join("");
    // TEMP: treat any full 6-digit as valid — replace with server validation
    setEmailVerified(code.length === CODE_LENGTH);
  };

  const verifyMobile = () => {
    const code = mobileOtp.join("");
    setMobileVerified(code.length === CODE_LENGTH);
  };

  const bothVerified = emailVerified === true && mobileVerified === true;

  // small helper to render digits inputs
  const renderInputs = (type) => {
    const arr = type === "email" ? emailOtp : mobileOtp;
    const refs = type === "email" ? emailRefs : mobileRefs;
    return arr.map((digit, i) => (
      <input
        key={i}
        id={`${type}-${i}`}
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={1}
        value={digit}
        onChange={(e) => handleChange(e, i, type)}
        onKeyDown={(e) => handleKeyDown(e, i, type)}
        ref={(el) => (refs.current[i] = el)}
        className="w-12 h-12 md:w-12 md:h-12 text-center text-lg md:text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 outline-none"
        aria-label={`${type} otp digit ${i + 1}`}
      />
    ));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl md:max-w-3xl rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            OTP Verification
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* EMAIL BLOCK */}
          <div className="p-4 rounded-lg border bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-xs text-muted-foreground truncate max-w-xs">{email || "—"}</div>
              </div>
            </div>

            <div className="flex gap-2 justify-center mb-3">{renderInputs("email")}</div>

            <div className="flex items-center justify-between text-xs mb-3 px-2">
              <div className="min-h-[1rem]">
                {emailVerified === true && <span className="text-green-600">✅ Verified</span>}
                {emailVerified === false && <span className="text-red-600">❌ Invalid</span>}
                {emailVerified === null && <span className="text-transparent">placeholder</span>}
              </div>

              <div>
                {emailTimer > 0 ? (
                  <span className="text-xs text-gray-400">Resend in {emailTimer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={resendEmail}
                    className="text-xs text-indigo-600 underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>

            <div>
              <Button className="w-full" onClick={verifyEmail}>
                Verify Email OTP
              </Button>
            </div>
          </div>

          {/* MOBILE BLOCK */}
          <div className="p-4 rounded-lg border bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-rose-600" />
              <div>
                <div className="font-medium">Mobile</div>
                <div className="text-xs text-muted-foreground truncate max-w-xs">{mobile || "—"}</div>
              </div>
            </div>

            <div className="flex gap-2 justify-center mb-3">{renderInputs("mobile")}</div>

            <div className="flex items-center justify-between text-xs mb-3 px-2">
              <div className="min-h-[1rem]">
                {mobileVerified === true && <span className="text-green-600">✅ Verified</span>}
                {mobileVerified === false && <span className="text-red-600">❌ Invalid</span>}
                {mobileVerified === null && <span className="text-transparent">placeholder</span>}
              </div>

              <div>
                {mobileTimer > 0 ? (
                  <span className="text-xs text-gray-400">Resend in {mobileTimer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={resendMobile}
                    className="text-xs text-indigo-600 underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>

            <div>
              <Button className="w-full" onClick={verifyMobile}>
                Verify Mobile OTP
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            disabled={!bothVerified}
            className={`w-full py-3 text-lg ${!bothVerified ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={() => {
              onClose();
              if (typeof window !== "undefined" && typeof onContinue === "function") {
                onContinue();
              }
            }}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
