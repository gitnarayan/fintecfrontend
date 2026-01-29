"use client"

import React from "react"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { logout } from "@/store/features/auth-slice"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, CreditCard, HelpCircle, LayoutDashboard, LogOut, Menu, PieChart, Settings, Shield, User, Wallet, X, ChartCandlestick } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
	{ name: "Mutual Fund", href: "/dashboard/mutual-fund", icon: ChartCandlestick },
	{ name: "Investments", href: "/dashboard/investments", icon: PieChart },
	{ name: "Loans", href: "/dashboard/loans", icon: Wallet },
	{ name: "Insurance", href: "/dashboard/insurance", icon: Shield },
	{ name: "Credit Cards", href: "/dashboard/credit-cards", icon: CreditCard },
	{ name: "Settings", href: "/dashboard/settings", icon: Settings },
	// { name: "Help", href: "/dashboard/help", icon: HelpCircle },
]

export default function DashboardLayout({ children }) {
	const pathname = usePathname()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [activePage, setActivePage] = useState("Dashboard")

	// Set active page based on pathname
	useEffect(() => {
		const currentPage = navigation.find((item) => pathname === item.href)
		if (currentPage) {
			setActivePage(currentPage.name)
		}
	}, [pathname])




	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = async () => {
		await dispatch(logout());
		router.push("/");
	};









	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Left Side Navigation Panel (desktop only) */}
			<TooltipProvider>
				<nav className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-cyan-600 to-blue-600 z-10">
					<div className="flex items-center justify-center h-16 border-b border-cyan-700">
						<Link href="/" className="text-white font-bold text-xl">
							HF
						</Link>
					</div>
					<div className="flex-1 py-4">
						{navigation.map((item) => (
							<Tooltip key={item.name}>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										className={`flex flex-col items-center justify-center h-16 w-full transition-all relative ${pathname === item.href
											? "text-white bg-white/10"
											: "text-white/70 hover:text-white hover:bg-white/5"
											}`}
									>
										<item.icon className="h-6 w-6" />
										{pathname === item.href && (
											<span className="absolute left-0 top-1/2 -translate-y-1/4 w-1 h-8 bg-white rounded-r-full" />
										)}
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right" sideOffset={2} className="bg-gray-800 text-white border-gray-700 text-md">
									{item.name}
								</TooltipContent>
							</Tooltip>
						))}
					</div>
					<div className="mb-4 flex justify-center">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon" className="rounded-full bg-white/10 text-white hover:bg-white/20">
									<Avatar className="h-8 w-8">
										<AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
										<AvatarFallback className="bg-purple-500 text-white">JD</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56" alignOffset={-40} sideOffset={10}>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<User className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								{/* <Link href="/">
									<DropdownMenuItem>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</Link> */}

								<DropdownMenuItem
									onClick={handleLogout}
									className="text-red-600 cursor-pointer"
								>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>

							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</nav>
			</TooltipProvider>

			<div className="flex flex-col flex-1 md:ml-16">
				{/* Mobile Header */}
				<header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6 md:px-8">
					<Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>

						{/* <SheetContent side="left" className="w-72 p-0 bg-gradient-to-b from-cyan-700 to-blue-600">


							


							<div className="grid gap-4 py-4">
								<div className="px-6 flex items-center justify-between border-b border-white/20 pb-4">
									<Link href="/" className="flex items-center gap-2 text-white">
										<div className="font-bold text-xl">Helios Fintec</div>
									</Link>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => setIsSidebarOpen(false)}
										className="text-white hover:bg-white/10"
									>
										<X className="h-5 w-5" />
									</Button>


								</div>
								<div className="grid gap-1 px-2">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={() => setIsSidebarOpen(false)}
											className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${pathname === item.href
												? "bg-white/10 text-white"
												: "text-white/70 hover:text-white hover:bg-white/5"
												}`}
										>
											<item.icon className="h-5 w-5" />
											{item.name}
										</Link>
									))}
								</div>
							</div>
							<div className="absolute bottom-4 left-0 right-0 px-6">
								<div className="flex items-center gap-3 text-white">
									<Avatar className="h-10 w-10 border-2 border-white">
										<AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
										<AvatarFallback className="bg-purple-500">JD</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium">John Doe</p>
										<p className="text-xs text-white/70">john.doe@example.com</p>
									</div>
								</div>
							</div>
						</SheetContent> */}

						<SheetContent
							side="left"
							className="w-72 p-0 bg-gradient-to-b from-cyan-700 to-blue-600"
						>
							<VisuallyHidden>
								<SheetTitle>Dashboard Navigation</SheetTitle>
							</VisuallyHidden>

							<div className="grid gap-4 py-4">
								<div className="px-6 flex items-center justify-between border-b border-white/20 pb-4">
									<Link href="/" className="flex items-center gap-2 text-white">
										<div className="font-bold text-xl">Helios Fintec</div>
									</Link>
								</div>

								<div className="grid gap-1 px-2">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={() => setIsSidebarOpen(false)}
											className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${pathname === item.href
												? "bg-white/10 text-white"
												: "text-white/70 hover:text-white hover:bg-white/5"
												}`}
										>
											<item.icon className="h-5 w-5" />
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</SheetContent>




					</Sheet>
					<Link href="/" className="flex items-center gap-2 md:hidden">
						<div className="text-gradient">
							Helios Fintec
						</div>
					</Link>
					<div className="ml-auto flex items-center gap-4">
						<span className="text-sm font-medium text-gray-700 md:hidden">{activePage}</span>
						<Button variant="secondary" size="icon" className="relative rounded-full">
							<Bell className="h-5 w-5" />
							<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
							<span className="sr-only">Notifications</span>
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild className="md:hidden">
								<Button variant="ghost" size="icon" className="rounded-full">
									<Avatar className="h-8 w-8">
										<AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="md:hidden">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<User className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								{/* <Link href="/">
									<DropdownMenuItem>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</Link> */}

								<DropdownMenuItem
									onClick={handleLogout}
									className="text-red-600 cursor-pointer"
								>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>




							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>

				{/* Main Content */}
				<main className="flex-1 overflow-auto">
					{/* Page Content */}
					<div className="p-4 md:px-8 md:py-8 lg:px-12 lg:py-8 xl:px-16 xl:py-8">{children}</div>
				</main>
			</div>

		</div>
	)
}
