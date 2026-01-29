"use client"

import React, { useState , useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { useDispatch } from "react-redux"
import { login } from "@/store/features/auth-slice"
import Cookies from "js-cookie";

export default function Login() {
	const router = useRouter()
	const dispatch = useDispatch()

	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")


	const { user } = useSelector(state => state.auth)

	// 🔥 LOGIN SUCCESS REDIRECT
	useEffect(() => {
		if (user && user.email) {
			router.push("/dashboard")
		}
	}, [user, router])



	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const formData = {
			email,
			password,
		}

		try {
			console.log(formData);
			const response = await dispatch(login(formData)).unwrap();
			console.log(response);
			if (response?.tokens) {
				setIsLoading(false)
				Cookies.set("token", response?.tokens?.access?.token)
				Cookies.set("refresh", response?.tokens?.refresh?.token)
				router.push("/dashboard")
			}
		} catch (error) {
			setIsLoading(false)
			setError(error?.message)
			console.error("Login error:", error)
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 p-4">
			<Card className="w-full max-w-md shadow-lg">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
					<CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
				</CardHeader>

				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="pl-10"
									required
									value={email}
									onChange={(e) => { setEmail(e.target.value); setError(''); }}
								/>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>
								<Link href="/forgot-password" className="text-xs text-purple-600 hover:underline">
									Forgot password?
								</Link>
							</div>
							<div className="relative">
								<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
								<Input
									id="password"
									type={showPassword ? "text" : "password"}
									className="pl-10"
									placeholder="password"
									required
									value={password}
									onChange={(e) => { setPassword(e.target.value); setError(''); }}
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
							<p className="errorMessage">{error}</p>
						</div>
					</CardContent>

					<CardFooter className="flex flex-col space-y-4 mt-6">
						<Button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
							disabled={isLoading}
						>
							{isLoading ? "Signing in..." : "Sign in"}
						</Button>
						<div className="text-center text-sm">
							Don&apos;t have an account?{" "}
							<Link href="/register" className="text-purple-600 hover:underline">
								Sign up
							</Link>
						</div>
					</CardFooter>
				</form>
			</Card>
		</div>
	)
}
