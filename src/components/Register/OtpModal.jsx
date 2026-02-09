// "use client";

// import React, { useState, useEffect, useRef } from "react";

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { Mail, Phone } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// export default function OtpModal({ open, onClose, onContinue, email = "", mobile = "" }) {
//   const CODE_LENGTH = 6;


//   const router = useRouter();

//   // otp arrays
//   const [emailOtp, setEmailOtp] = useState(Array(CODE_LENGTH).fill(""));
//   const [mobileOtp, setMobileOtp] = useState(Array(CODE_LENGTH).fill(""));

//   // verification state: null | true | false
//   const [emailVerified, setEmailVerified] = useState(null);
//   const [mobileVerified, setMobileVerified] = useState(null);

//   // refs for inputs
//   const emailRefs = useRef([]);
//   const mobileRefs = useRef([]);

//   // timers (in seconds)
//   const [emailTimer, setEmailTimer] = useState(60);
//   const [mobileTimer, setMobileTimer] = useState(60);

//   // When modal opens -> reset inputs/messages/timers
//   useEffect(() => {
//     if (open) {
//       setEmailOtp(Array(CODE_LENGTH).fill(""));
//       setMobileOtp(Array(CODE_LENGTH).fill(""));
//       setEmailVerified(null);
//       setMobileVerified(null);
//       setEmailTimer(60);
//       setMobileTimer(60);

//       // focus first email input by default (small delay to ensure dialog rendered)
//       setTimeout(() => {
//         if (emailRefs.current[0]) emailRefs.current[0].focus();
//       }, 60);
//     }
//   }, [open]);





//   useEffect(() => {
//     if (open && mobile) {
//       sendMobileOtp(`+91${mobile}`);
//     }
//   }, [open]);


//   // email timer countdown
//   useEffect(() => {
//     if (!open) return;
//     if (emailTimer === 0) return;
//     const id = setInterval(() => setEmailTimer((t) => Math.max(0, t - 1)), 1000);
//     return () => clearInterval(id);
//   }, [emailTimer, open]);

//   // mobile timer countdown
//   useEffect(() => {
//     if (!open) return;
//     if (mobileTimer === 0) return;
//     const id = setInterval(() => setMobileTimer((t) => Math.max(0, t - 1)), 1000);
//     return () => clearInterval(id);
//   }, [mobileTimer, open]);

//   // handle change for otp inputs (email/mobile)
//   const handleChange = (e, index, type) => {
//     const raw = e.target.value;
//     const val = raw.replace(/\D/g, "").slice(-1); // only last digit, no non-digits
//     if (!/^[0-9]?$/.test(val)) return;

//     if (type === "email") {
//       const next = [...emailOtp];
//       next[index] = val;
//       setEmailOtp(next);
//       // clear previous invalid state when typing
//       if (emailVerified !== null) setEmailVerified(null);
//       if (val && index < CODE_LENGTH - 1) emailRefs.current[index + 1]?.focus();
//     } else {
//       const next = [...mobileOtp];
//       next[index] = val;
//       setMobileOtp(next);
//       if (mobileVerified !== null) setMobileVerified(null);
//       if (val && index < CODE_LENGTH - 1) mobileRefs.current[index + 1]?.focus();
//     }
//   };

//   // handle keydown for backspace navigation
//   const handleKeyDown = (e, index, type) => {
//     if (e.key === "Backspace") {
//       if (type === "email") {
//         // if current has value, clear it (handled by onChange too)
//         if (emailOtp[index]) {
//           const next = [...emailOtp];
//           next[index] = "";
//           setEmailOtp(next);
//           setEmailVerified(null);
//         } else if (index > 0) {
//           emailRefs.current[index - 1]?.focus();
//           const next = [...emailOtp];
//           next[index - 1] = "";
//           setEmailOtp(next);
//         }
//       } else {
//         if (mobileOtp[index]) {
//           const next = [...mobileOtp];
//           next[index] = "";
//           setMobileOtp(next);
//           setMobileVerified(null);
//         } else if (index > 0) {
//           mobileRefs.current[index - 1]?.focus();
//           const next = [...mobileOtp];
//           next[index - 1] = "";
//           setMobileOtp(next);
//         }
//       }
//     }

//     // support left/right arrow keys
//     if (e.key === "ArrowLeft") {
//       if (index > 0) {
//         (type === "email" ? emailRefs : mobileRefs).current[index - 1]?.focus();
//       }
//     }
//     if (e.key === "ArrowRight") {
//       if (index < CODE_LENGTH - 1) {
//         (type === "email" ? emailRefs : mobileRefs).current[index + 1]?.focus();
//       }
//     }
//   };

//   // resend handlers
//   const resendEmail = () => {
//     if (emailTimer > 0) return;
//     setEmailOtp(Array(CODE_LENGTH).fill(""));
//     setEmailVerified(null);
//     setEmailTimer(60);
//     setTimeout(() => emailRefs.current[0]?.focus(), 40);
//     // TODO: call your API to send OTP
//   };

//   const resendMobile = () => {
//     if (mobileTimer > 0) return;
//     setMobileOtp(Array(CODE_LENGTH).fill(""));
//     setMobileVerified(null);
//     setMobileTimer(60);
//     setTimeout(() => mobileRefs.current[0]?.focus(), 40);
//     // TODO: call your API to send OTP
//   };

//   // verify handlers (replace with actual API call)
//   const verifyEmail = () => {
//     const code = emailOtp.join("");
//     // TEMP: treat any full 6-digit as valid — replace with server validation
//     setEmailVerified(code.length === CODE_LENGTH);
//   };

//   // const verifyMobile = () => {
//   //   const code = mobileOtp.join("");
//   //   setMobileVerified(code.length === CODE_LENGTH);
//   // };

//   const bothVerified = emailVerified === true && mobileVerified === true;



//   const sendMobileOtp = async (phone) => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       { size: "invisible" },
//       auth
//     );

//     const confirmation = await signInWithPhoneNumber(
//       auth,
//       phone,
//       window.recaptchaVerifier
//     );

//     confirmationResultRef.current = confirmation;
//   };


//   const verifyMobileOtp = async (otp) => {
//     await window.confirmationResult.confirm(otp);
//     setMobileVerified(true);
//   };











//   // small helper to render digits inputs
//   const renderInputs = (type) => {
//     const arr = type === "email" ? emailOtp : mobileOtp;
//     const refs = type === "email" ? emailRefs : mobileRefs;
//     return arr.map((digit, i) => (
//       <input
//         key={i}
//         id={`${type}-${i}`}
//         inputMode="numeric"
//         pattern="[0-9]*"
//         maxLength={1}
//         value={digit}
//         onChange={(e) => handleChange(e, i, type)}
//         onKeyDown={(e) => handleKeyDown(e, i, type)}
//         ref={(el) => (refs.current[i] = el)}
//         className="w-12 h-12 md:w-12 md:h-12 text-center text-lg md:text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 outline-none"
//         aria-label={`${type} otp digit ${i + 1}`}
//       />
//     ));
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-2xl md:max-w-3xl rounded-2xl p-6">
//         <DialogHeader>
//           <DialogTitle className="text-center text-2xl font-semibold">
//             OTP Verification
//           </DialogTitle>
//         </DialogHeader>





//          {/* REQUIRED FOR FIREBASE */}
//         <div id="recaptcha-container"></div>

//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          // {/* EMAIL BLOCK */}
          // <div className="p-4 rounded-lg border bg-white shadow-sm">
          //   <div className="flex items-center gap-2 mb-3">
          //     <Mail className="w-5 h-5 text-indigo-600" />
          //     <div>
          //       <div className="font-medium">Email</div>
          //       <div className="text-xs text-muted-foreground truncate max-w-xs">{email || "—"}</div>
          //     </div>
          //   </div>

          //   <div className="flex gap-2 justify-center mb-3">{renderInputs("email")}</div>

          //   <div className="flex items-center justify-between text-xs mb-3 px-2">
          //     <div className="min-h-[1rem]">
          //       {emailVerified === true && <span className="text-green-600">✅ Verified</span>}
          //       {emailVerified === false && <span className="text-red-600">❌ Invalid</span>}
          //       {emailVerified === null && <span className="text-transparent">placeholder</span>}
          //     </div>

          //     <div>
          //       {emailTimer > 0 ? (
          //         <span className="text-xs text-gray-400">Resend in {emailTimer}s</span>
          //       ) : (
          //         <button
          //           type="button"
          //           onClick={resendEmail}
          //           className="text-xs text-indigo-600 underline"
          //         >
          //           Resend OTP
          //         </button>
          //       )}
          //     </div>
          //   </div>

          //   <div>
          //     <Button className="w-full" onClick={verifyEmail}>
          //       Verify Email OTP
          //     </Button>
          //   </div>
          // </div>

//           {/* MOBILE BLOCK */}
//           <div className="p-4 rounded-lg border bg-white shadow-sm">
//             <div className="flex items-center gap-2 mb-3">
//               <Phone className="w-5 h-5 text-rose-600" />
//               <div>
//                 <div className="font-medium">Mobile</div>
//                 <div className="text-xs text-muted-foreground truncate max-w-xs">{mobile || "—"}</div>
//               </div>
//             </div>

//             <div className="flex gap-2 justify-center mb-3">{renderInputs("mobile")}</div>

//             <div className="flex items-center justify-between text-xs mb-3 px-2">
//               <div className="min-h-[1rem]">
//                 {mobileVerified === true && <span className="text-green-600">✅ Verified</span>}
//                 {mobileVerified === false && <span className="text-red-600">❌ Invalid</span>}
//                 {mobileVerified === null && <span className="text-transparent">placeholder</span>}
//               </div>

//               <div>
//                 {mobileTimer > 0 ? (
//                   <span className="text-xs text-gray-400">Resend in {mobileTimer}s</span>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={resendMobile}
//                     className="text-xs text-indigo-600 underline"
//                   >
//                     Resend OTP
//                   </button>
//                 )}
//               </div>
//             </div>

//             <div>
//               {/* <Button className="w-full" onClick={verifyMobile}>
//                 Verify Mobile OTP
//               </Button> */}


//               <Button
//                 className="w-full"
//                 onClick={async () => {
//                   try {
//                     const otp = mobileOtp.join("");
//                     await verifyMobileOtp(otp);
//                   } catch (err) {
//                     setMobileVerified(false);
//                     console.error("Invalid OTP", err);
//                   }
//                 }}
//               >
//                 Verify Mobile OTP
//               </Button>



//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <Button
//             disabled={!bothVerified}
//             className={`w-full py-3 text-lg ${!bothVerified ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             onClick={() => {
//               onClose();
//               if (typeof window !== "undefined" && typeof onContinue === "function") {
//                 onContinue();
//               }
//             }}
//           >
//             Continue
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }







// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { Mail, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// export default function OtpModal({ open, onClose, onContinue, email = "", mobile = "" }) {
//   const CODE_LENGTH = 6;

//   const [mobileOtp, setMobileOtp] = useState(Array(CODE_LENGTH).fill(""));
//   const [emailVerified, setEmailVerified] = useState(true); // temp true
//   const [mobileVerified, setMobileVerified] = useState(null);

//   const mobileRefs = useRef([]);
//   const recaptchaRef = useRef(null);
//   const otpSentRef = useRef(false);

//   /* ---------------- SEND OTP ---------------- */
//   // useEffect(() => {
//   //   if (!open || !mobile || otpSentRef.current) return;

//   //   otpSentRef.current = true;

//   //   if (!recaptchaRef.current) {
//   //     recaptchaRef.current = new RecaptchaVerifier(
//   //       "recaptcha-container",
//   //       { size: "invisible" },
//   //       auth
//   //     );

//   //   }

//   //   signInWithPhoneNumber(
//   //     auth,
//   //     `+91${mobile}`,
//   //     recaptchaRef.current
//   //   )
//   //     .then((confirmation) => {
//   //       confirmationResultRef.current = confirmation;
//   //     })
//   //     .catch((err) => {
//   //       console.error("OTP send error:", err);
//   //     });
//   // }, [open, mobile]);


//   // const recaptchaRef = useRef(null);

// useEffect(() => {
//   if (!open || !mobile) return;

//   if (!recaptchaRef.current) {
//     recaptchaRef.current = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       { size: "invisible" },
//     );
//   }

//   signInWithPhoneNumber(
//     auth,
//     `+91${mobile}`,
//     recaptchaRef.current
//   )
//     .then((confirmation) => {
//       confirmationResultRef.current = confirmation;
//       console.log("OTP sent");
//     })
//     .catch((err) => {
//       console.error("OTP send error", err);
//     });
// }, [open]);


//   /* ---------------- VERIFY OTP ---------------- */
//   const verifyMobileOtp = async () => {
//     const otp = mobileOtp.join("");
//     if (otp.length !== CODE_LENGTH) return;

//     try {
//       await window.confirmationResult.confirm(otp);
//       setMobileVerified(true);
//     } catch (err) {
//       console.error("Invalid OTP", err);
//       setMobileVerified(false);
//     }
//   };




//   //   const result = await window.confirmationResult.confirm(otp);
//   // const firebaseToken = await result.user.getIdToken();

//   // await dispatch(verifyMobile(firebaseToken));


//   /* ---------------- INPUT HANDLER ---------------- */
//   const handleChange = (e, index) => {
//     const val = e.target.value.replace(/\D/g, "").slice(-1);
//     const next = [...mobileOtp];
//     next[index] = val;
//     setMobileOtp(next);
//     if (val && index < CODE_LENGTH - 1) {
//       mobileRefs.current[index + 1]?.focus();
//     }
//   };

//   const bothVerified = emailVerified && mobileVerified;

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-xl rounded-xl p-6">
//         <DialogHeader>
//           <DialogTitle className="text-center text-xl">
//             OTP Verification
//           </DialogTitle>
//         </DialogHeader>

//         {/* REQUIRED FOR FIREBASE */}
//         <div id="recaptcha-container"></div>

//         <div className="mt-4">
//           <div className="flex items-center gap-2 mb-2">
//             <Phone className="w-5 h-5 text-rose-600" />
//             <span className="text-sm">+91 {mobile}</span>
//           </div>

//           <div className="flex gap-2 justify-center mb-4">
//             {mobileOtp.map((digit, i) => (
//               <input
//                 key={i}
//                 ref={(el) => (mobileRefs.current[i] = el)}
//                 value={digit}
//                 onChange={(e) => handleChange(e, i)}
//                 maxLength={1}
//                 className="w-12 h-12 text-center text-lg border rounded-md"
//               />
//             ))}
//           </div>

//           {mobileVerified === false && (
//             <p className="text-red-500 text-sm text-center">Invalid OTP</p>
//           )}

//           <Button className="w-full" onClick={verifyMobileOtp}>
//             Verify Mobile OTP
//           </Button>
//         </div>

//         <Button
//           disabled={!bothVerified}
//           className="w-full mt-4"
//           onClick={() => {
//             onClose();
//             onContinue?.();
//           }}
//         >
//           Continue
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// }







"use client";

import React, { useState, useEffect, useRef } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { verifyEmailOtp, resendEmailOtp } from "@/store/features/auth-slice";
import { verifyMobile } from "@/store/features/auth-slice";

import { useDispatch } from "react-redux";
import { auth } from "@/lib/firebase";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function OtpModal({ open, onClose, onContinue, email = "", mobile = "" }) {
  const CODE_LENGTH = 6;
  const skipPhoneOtp = process.env.NEXT_PUBLIC_SKIP_PHONE_OTP === "true";
  console.log("SKIP PHONE OTP", process.env.NEXT_PUBLIC_SKIP_PHONE_OTP);

  const [mobileOtp, setMobileOtp] = useState(Array(CODE_LENGTH).fill(""));
  const [mobileVerified, setMobileVerified] = useState(null);

  const [emailOtp, setEmailOtp] = useState(Array(CODE_LENGTH).fill(""));
  const [emailVerified, setEmailVerified] = useState(null);
  const [emailTimer, setEmailTimer] = useState(60);

  const emailRefs = useRef([]);
  const mobileRefs = useRef([]);

  const recaptchaRef = useRef(null);
  const confirmationResultRef = useRef(null);
  const otpSentRef = useRef(false); // 🔥 PREVENT MULTIPLE SENDS
  const [recaptchaContainer, setRecaptchaContainer] = useState(null);

  

  /* ---------------- SEND OTP ---------------- */
  // useEffect(() => {
  //   if (!open || !mobile || otpSentRef.current) return;

  //   otpSentRef.current = true;

  //   if (!recaptchaRef.current) {
  //     recaptchaRef.current = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       { size: "invisible" }
  //     );
  //   }

  //   signInWithPhoneNumber(auth, `+91${mobile}`, recaptchaRef.current)
  //     .then((confirmation) => {
  //       confirmationResultRef.current = confirmation;
  //       console.log("OTP sent successfully");
  //     })
  //     .catch((err) => {
  //       console.error("OTP send error:", err);
  //       otpSentRef.current = false;
  //     });

  //   // cleanup on close
  //   return () => {
  //     otpSentRef.current = false;
  //   };
  // }, [open, mobile]);




  const dispatch = useDispatch();

  const verifyMobileOtp = async () => {
    const otp = mobileOtp.join("");

    if (otp.length !== 6) return;

    try {
      // Confirm OTP with Firebase
      if (!confirmationResultRef.current) {
        console.error("OTP verification failed: confirmation result is missing.");
        setMobileVerified(false);
        return;
      }
      const result = await confirmationResultRef.current.confirm(otp);

      // 2️⃣ Get Firebase ID token
      const firebaseToken = await result.user.getIdToken();

      // 3️⃣ Send token to backend
      await dispatch(verifyMobile(firebaseToken)).unwrap();

      // 4️⃣ Mark UI verified
      setMobileVerified(true);

    } catch (err) {
      console.error("OTP verification failed", err);
      setMobileVerified(false);
    }
  };






  //   const dispatch = useDispatch();

  // const verifyMobileOtp = async () => {
  //   const otp = mobileOtp.join("");
  //   if (otp.length !== CODE_LENGTH) return;

  //   if (!window.confirmationResult) {
  //     console.error("Verification failed: No confirmation result. OTP might not have been sent.");
  //     return;
  //   }

  //   try {
  //     // 1. Verify with Firebase on the client
  //     const result = await window.confirmationResult.confirm(otp);

  //     // 2. Get the ID Token
  //     const firebaseToken = await result.user.getIdToken();

  //     // 3. Dispatch to Backend via Redux
  //     await dispatch(verifyOtp(firebaseToken)).unwrap();

  //     setMobileVerified(true);
  //     // Proceed to next step or close modal
  //     onContinue?.();

  //   } catch (err) {
  //     console.error("Verification failed", err);
  //     setMobileVerified(false);
  //   }
  // };


  useEffect(() => {
    if (skipPhoneOtp) {
      if (open) setMobileVerified(true);
      return;
    }
    if (!open || !mobile || otpSentRef.current || !recaptchaContainer) return;

    otpSentRef.current = true;
    confirmationResultRef.current = null;

    // Always recreate verifier to ensure it attaches to the current DOM element
    if (recaptchaRef.current) {
      try {
        recaptchaRef.current.clear();
      } catch (e) { }
      recaptchaRef.current = null;
    }
    recaptchaRef.current = new RecaptchaVerifier(
      auth,
      recaptchaContainer,
      { size: "invisible" }
    );

    signInWithPhoneNumber(
      auth,
      `+91${mobile}`,
      recaptchaRef.current
    )
      .then((confirmation) => {
        confirmationResultRef.current = confirmation;
        console.log("OTP sent successfully");
      })
      .catch((err) => {
        console.error("OTP send error:", err);
        otpSentRef.current = false;
      });

    return () => {
      otpSentRef.current = false;
    };
  }, [open, mobile, recaptchaContainer]);

  // email timer countdown
  useEffect(() => {
    if (!open) return;
    if (emailTimer === 0) return;
    const id = setInterval(() => setEmailTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [emailTimer, open]);




  /* ---------------- VERIFY OTP ---------------- */
 

  /* ---------------- INPUT HANDLER ---------------- */
  const handleChange = (e, index, type) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);

    if (type === "email") {
      const next = [...emailOtp];
      next[index] = val;
      setEmailOtp(next);
      if (emailVerified !== null) setEmailVerified(null);
      if (val && index < CODE_LENGTH - 1) {
        emailRefs.current[index + 1]?.focus();
      }
    } else {
      if (skipPhoneOtp) return;
      const next = [...mobileOtp];
      next[index] = val;
      setMobileOtp(next);
      if (mobileVerified !== null) setMobileVerified(null);
      if (val && index < CODE_LENGTH - 1) {
        mobileRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index, type) => {
    if (e.key === "Backspace") {
      const otp = type === "email" ? emailOtp : mobileOtp;
      const setOtp = type === "email" ? setEmailOtp : setMobileOtp;
      const refs = type === "email" ? emailRefs : mobileRefs;

      if (type !== "email" && skipPhoneOtp) return;
      if (!otp[index] && index > 0) {
        refs.current[index - 1]?.focus();
        const next = [...otp];
        next[index - 1] = "";
        setOtp(next);
      } else {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
      }
    }
  };




//   const resendEmail = async () => {
//   if (emailTimer > 0) return;

//   try {
//     await dispatch(resendEmailOtp({ email })).unwrap();

//     setEmailOtp(Array(CODE_LENGTH).fill(""));
//     setEmailVerified(null);
//     setEmailTimer(60);

//     setTimeout(() => emailRefs.current[0]?.focus(), 40);
//   } catch (err) {
//     console.error("Resend OTP failed", err);
//   }
// };



const resendEmail = async () => {
  if (emailTimer > 0) return;

  try {
    await dispatch(resendEmailOtp({ email })).unwrap();
    setEmailOtp(Array(6).fill(""));
    setEmailVerified(null);
    setEmailTimer(60);
    setTimeout(() => emailRefs.current[0]?.focus(), 50);
  } catch (err) {
    console.error("Resend OTP failed", err);
  }
};




//   const handleVerifyEmail = async () => {
//   const code = emailOtp.join("");

//   if (code.length !== 6) return;

//   try {
//     await dispatch(
//       verifyEmailOtp({ otp: code, email })
//     ).unwrap();

//     setEmailVerified(true);
//     // router.push("/dashboard");
//   } catch (err) {
//     console.error("Email OTP verification failed", err);
//     setEmailVerified(false);
//   }
// };


const handleVerifyEmail = async () => {
  const code = emailOtp.join("");

  if (code.length !== 6) return;

  try {
    await dispatch(
      verifyEmailOtp({
        email,
        otp: code
      })
    ).unwrap();

    setEmailVerified(true);
  } catch (err) {
    console.error("Email OTP verification failed", err);
    setEmailVerified(false);
  }
};



  


    const handleLogout = async () => {
      await dispatch(logout());
      router.push("/");
    };



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
      <DialogContent className="max-w-xl rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            OTP Verification
          </DialogTitle>
        </DialogHeader>



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
              <Button className="w-full" onClick={handleVerifyEmail}>
                Verify Email OTP
              </Button>
            </div>
          </div>



        {!skipPhoneOtp && (
          <>
            {/* REQUIRED FOR FIREBASE */}
            <div ref={setRecaptchaContainer}></div>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-rose-600" />
                <span className="text-sm">+91 {mobile}</span>
              </div>

              <div className="flex gap-2 justify-center mb-4">
                {renderInputs("mobile")}
              </div>

              {mobileVerified === false && (
                <p className="text-red-500 text-sm text-center">Invalid OTP</p>
              )}

              <Button className="w-full" onClick={verifyMobileOtp}>
                Verify Mobile OTP
              </Button>
            </div>
          </>
        )}

        <Button
          disabled={!mobileVerified}
          className="w-full mt-4"
          onClick={() => {
            onClose();
            onContinue?.();
          }}
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
}



