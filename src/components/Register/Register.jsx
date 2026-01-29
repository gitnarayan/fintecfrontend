"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { CalendarDays, Eye, EyeOff, Lock, Mail, Phone, Transgender, User } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import OtpModal from "@/components/Register/OtpModal";
import { register } from "@/store/features/auth-slice"
import dynamic from "next/dynamic";

const Select = dynamic(
  () => import("@/components/ui/select").then(m => m.Select),
  { ssr: false }
);

const SelectTrigger = dynamic(
  () => import("@/components/ui/select").then(m => m.SelectTrigger),
  { ssr: false }
);

const SelectContent = dynamic(
  () => import("@/components/ui/select").then(m => m.SelectContent),
  { ssr: false }
);

const SelectItem = dynamic(
  () => import("@/components/ui/select").then(m => m.SelectItem),
  { ssr: false }
);

const SelectValue = dynamic(
  () => import("@/components/ui/select").then(m => m.SelectValue),
  { ssr: false }
);


export default function Register() {
	const router = useRouter()
	const dispatch = useDispatch()

	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [openOtpModal, setOpenOtpModal] = useState(false);


	// Form data
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		email: "",
		password: "",
		confirmPassword: "",
		dateOfBirth: "",
		mobile: "",
		countryCode: "+91",
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleGenderChange = (value) => {
		setFormData({ ...formData, gender: value.toLowerCase() })
	}

	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	setIsLoading(true)

	// 	if (formData.password !== formData.confirmPassword) {
	// 		setError("Passwords do not match!")
	// 		setIsLoading(false)
	// 		return
	// 	}


	// 	const finalData = {
	// 		...formData,
	// 		mobile: Number(formData.mobile),
	// 	}

	// 	delete finalData.confirmPassword

	// 	try {
	// 		console.log("Submitted:", finalData)
	// 		const res = await dispatch(register(finalData)).unwrap();

	// 		console.log("res:", res)
	// 		if (res?.tokens) {
	// 			// Cookies.set("token", res?.tokens?.access?.token)
	// 			// Cookies.set("refresh", res?.tokens?.refresh?.token)
	// 			setIsLoading(false)
	// 			router.push("/dashboard")
	// 		}
	// 	} catch (err) {
	// 		setIsLoading(false)
	// 		console.error("Registration error", err)
	// 	}
	// }



	

// 	const handleSubmit = async (e) => {
//   e.preventDefault()
//   setIsLoading(true)

//   if (formData.password !== formData.confirmPassword) {
//     setError("Passwords do not match")
//     setIsLoading(false)
//     return
//   }

//   const finalData = {
//     ...formData,
//     mobile: Number(formData.mobile),
//   }

//   delete finalData.confirmPassword

//   try {
//     const res = await dispatch(register(finalData)).unwrap()
//     setIsLoading(false)

//     if (res?.tokens) {
//       setOpenOtpModal(true) // OTP AFTER SUCCESS
//     }
//   } catch (err) {
//     setIsLoading(false)
//     setError(err?.message || "Registration failed")
//   }
// }




const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  setError("")

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match")
    setIsLoading(false)
    return
  }

  const finalData = {
    ...formData,
    mobile: Number(formData.mobile),
  }

  delete finalData.confirmPassword

  try {
    const res = await dispatch(register(finalData)).unwrap()
    setIsLoading(false)

    // ✅ Signup success
    // if (res?.user) {
    //   setOpenOtpModal(true)   // go to OTP step
    //   // OR: router.push("/onboarding")
    // }

	// signup success = OTP step
     setOpenOtpModal(true)

  } catch (err) {
    setIsLoading(false)
    setError(err?.message || "Signup failed")
  }
}


	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 p-4">
			<Card className="w-full max-w-2xl shadow-lg">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
					<CardDescription className="text-center">Enter your information to create your account</CardDescription>
				</CardHeader>

				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							{/* First name */}
							<div className="space-y-2">
								<Label htmlFor="firstName">First name</Label>
								<div className="relative">
									<User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="firstName"
										placeholder="Enter name"
										required
										className="pl-10"
										value={formData.firstName}
										onChange={handleChange}
									/>
								</div>
							</div>

							{/* Last name */}
							<div className="space-y-2">
								<Label htmlFor="lastName">Last name</Label>
								<Input
									id="lastName"
									placeholder="Enter last name"
									required
									value={formData.lastName}
									onChange={handleChange}
								/>
							</div>

							{/* Gender */}
							<div className="space-y-2 w-full">
								<Label htmlFor="gender">Gender</Label>
								<Select onValueChange={handleGenderChange}>
									<SelectTrigger className="relative w-full pl-10">
										<Transgender className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
										<SelectValue placeholder="Gender" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="male">Male</SelectItem>
										<SelectItem value="female">Female</SelectItem>
										<SelectItem value="transgender">Transgender</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* DOB */}
							<div className="space-y-2 w-full">
								<Label htmlFor="dateOfBirth">DOB</Label>
								<div className="relative w-full">
									<CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="dateOfBirth"
										type="date"
										required
										className="pl-10"
										value={formData.dateOfBirth}
										onChange={handleChange}
									/>
								</div>
							</div>

							{/* Email */}
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<div className="relative">
									<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="email"
										type="email"
										placeholder="example@gmail.com"
										required
										className="pl-10"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
							</div>

							{/* Mobile */}
							<div className="space-y-2">
								<Label htmlFor="mobile">Mobile</Label>
								<div className="relative">
									<Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="mobile"
										type="number"
										placeholder="Mobile number"
										required
										className="pl-10"
										value={formData.mobile}
										onChange={handleChange}
									/>
								</div>
							</div>

							{/* Password */}
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										required
										className="pl-10"
										value={formData.password}
										onChange={handleChange}
									/>
									<Button
										type="button"
										variant="bgr"
										size="icon"
										className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
										<span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
									</Button>
								</div>
							</div>

							{/* Confirm password */}
							<div className="space-y-2">
								<Label htmlFor="confirmPassword">Confirm Password</Label>
								<div className="relative">
									<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
										id="confirmPassword"
										type="password"
										placeholder="Confirm password"
										required
										className="pl-10"
										value={formData.confirmPassword}
										onChange={handleChange}
									/>
								</div>
								<p className="text-sm text-red-500">{error}</p>
							</div>
						</div>

						{/* Terms checkbox */}
						<div className="flex items-center space-x-2 mt-2">
							<Checkbox id="terms" required />
							<label
								htmlFor="terms"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I agree to the{" "}
								<Link href="/terms" className="text-primary hover:underline">
									terms of service
								</Link>{" "}
								and{" "}
								<Link href="/privacy" className="text-primary hover:underline">
									privacy policy
								</Link>
							</label>
						</div>
					</CardContent>

					<CardFooter className="flex flex-col space-y-4 mt-6">
						<Button
							type="submit"
							// onClick={() => setOpenOtpModal(true)}
							className="w-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 transition-all"
							disabled={isLoading}
						>
							Create account
						</Button>

						<div className="text-center text-sm">
							Already have an account?{" "}
							<Link href="/auth/login" className="text-primary hover:underline">
								Sign in
							</Link>
						</div>
					</CardFooter>
				</form>
			</Card>
			<OtpModal
				open={openOtpModal}
				onClose={() => setOpenOtpModal(false)}
				onContinue={() => {
					setOpenOtpModal(false);
					router.push("/onboarding");
				}}
				email={formData.email}
				mobile={formData.mobile}
			/>


		</div>
	)
}
