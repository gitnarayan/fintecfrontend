"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getMe } from "@/store/features/auth-slice" 


export default function AuthInitializer() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
//     dispatch(verifyEmailOtp()).then(() => {
//   dispatch(getMe()); // ✅ NOW this will work
// });

  }, [dispatch])

  return null
}
