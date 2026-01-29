// "use client"


// import React from 'react'
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// function HomeNav() {


// 	const isloggedIn = typeof window !== 'undefined' && localStorage.getItem('token') ? true : false;




// 	return (
// 		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10 transition-all">
// 			<div className="container flex h-16 items-center justify-between px-4 md:px-6">

// 				{/* LOGO */}
// 				<Link href={isloggedIn ? "/dashboard" : "/"} className="flex items-center gap-2">
// 					<div className="text-gradient">
// 						MetroFintech
// 					</div>
// 				</Link>

// 				{/* NAV LINKS */}
// 				<nav className="hidden md:flex items-center gap-8">
// 					{["Investments", "Insurance", "Loans", "Credit Cards", "Resources", "Profile"].map((item) => (
// 						<Link
// 							key={item}
// 							href="#"
// 							className="relative text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors group"
// 						>
// 							{item}
// 							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
// 						</Link>
// 					))}
// 				</nav>

// 				{/* CTA BUTTONS */}
// 				<div className="flex items-center gap-3">
// 					{isloggedIn ? (
// 						<Link href="/dashboard">
// 							<Button variant="gradient">
// 								Dashboard
// 							</Button>
// 						</Link>
// 					) : (
// 						<>

// 							<Link href="/auth/login">
// 								<Button
// 									variant="outline"
// 								>
// 									Login
// 								</Button>
// 							</Link>
// 							<Link href="/register" className="hidden md:block">
// 								<Button variant="gradient">
// 									Register
// 								</Button>
// 							</Link>

// 						</>
// 					)}

// 				</div>
// 			</div>
// 		</header>

// 	)
// }

// export default HomeNav








"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"

function HomeNav() {

	const { user, isLoading } = useSelector((state) => state.auth)

	const isLoggedIn =
		user && typeof user === "object" && Object.keys(user).length > 0
		console.log("NAV USER:", user)


	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">

				{/* LOGO */}
				<Link
					href={isLoggedIn ? "/dashboard" : "/"}
					className="flex items-center gap-2"
				>
					<div className="text-gradient">
						MetroFintech
					</div>
				</Link>




					{/* NAV LINKS */}
				<nav className="hidden md:flex items-center gap-8">
				{["Investments", "Insurance", "Loans", "Credit Cards", "Resources"].map((item) => (
						<Link
							key={item}
							href="#"
							className="relative text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors group"
						>
							{item}
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}
				</nav>


				

				{/* CTA BUTTONS */}
				<div className="flex items-center gap-3">
					{isLoading ? null : isLoggedIn ? (
						<>
							<Link href="/dashboard">
								<Button variant="gradient">Dashboard</Button>
							</Link>
						
						</>
					) : (
						<>
							<Link href="/auth/login">
								<Button variant="outline">Login</Button>
							</Link>
							<Link href="/register" className="hidden md:block">
								<Button variant="gradient">Register</Button>
							</Link>
						</>
					)}
				</div>

			</div>
		</header>
	)
}

export default HomeNav
