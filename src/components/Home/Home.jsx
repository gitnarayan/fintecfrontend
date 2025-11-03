import { ArrowRight, CheckCircle2, Download, BarChart3, Shield, CreditCard, Wallet, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Home() {

	const cardData = [
		{
			icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
			bgIcon: "bg-purple-100",
			gradient: "from-purple-50 to-white border-purple-100",
			title: "Investments",
			description: "Grow your wealth with smart investment options",
			features: [ "Mutual Funds", "Stocks & ETFs", "Fixed Deposits" ],
			buttonText: "Explore Investments",
		},
		{
			icon: <Shield className="h-6 w-6 text-blue-600" />,
			bgIcon: "bg-blue-100",
			gradient: "from-blue-50 to-white border-blue-100",
			title: "Insurance",
			description: "Protect what matters most to you",
			features: [ "Life Insurance", "Health Insurance", "Vehicle Insurance" ],
			buttonText: "Explore Insurance",
		},
		{
			icon: <Wallet className="h-6 w-6 text-green-600" />,
			bgIcon: "bg-green-100",
			gradient: "from-green-50 to-white border-green-100",
			title: "Loans",
			description: "Get quick and hassle-free loans",
			features: [ "Personal Loans", "Home Loans", "Business Loans" ],
			buttonText: "Explore Loans",
		},
		{
			icon: <CreditCard className="h-6 w-6 text-orange-600" />,
			bgIcon: "bg-orange-100",
			gradient: "from-orange-50 to-white border-orange-100",
			title: "Credit Cards",
			description: "Exclusive cards with premium benefits",
			features: [ "Rewards Cards", "Travel Cards", "Cashback Cards" ],
			buttonText: "Explore Credit Cards",
		},
	];

	const toolsData = [
		{
			title: "SIP Calculator",
			description: "Calculate your potential returns from systematic investments",
			previewText: "SIP Calculator Preview",
			buttonText: "Try Now",
		},
		{
			title: "Loan EMI Calculator",
			description: "Estimate your monthly loan payments",
			previewText: "EMI Calculator Preview",
			buttonText: "Try Now",
		},
		{
			title: "Insurance Estimator",
			description: "Find the right coverage amount for your needs",
			previewText: "Insurance Estimator Preview",
			buttonText: "Try Now",
		},
	];


	return (
		<div className="flex flex-col">

			{/* Hero Section */}
			{/* <section className="min-h-[90vh] pt-8 pb-12 sm:pb-20 md:pb-20 w-full flex items-center bg-gradient-to-r from-purple-50 to-blue-50">
				<div className="container px-4 md:px-6">
					<div className="grid gap-14 md:gap-20 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="">
							<h1 className="text-4xl font-bold sm:text-5xl md:text-6xl space-y-1 leading-tight">
								<span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text  text-transparent">
									One Platform
								</span>
								<span className="block bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent">
									for All Your
								</span>
								<span className="block bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
									Financial Needs
								</span>
							</h1>

							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-2 mb-6">
								Invest, insure, and grow your wealth — smarter, faster, and safer.
							</p>

							<div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap">
								<Button
									size="lg"
									className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
								>
									Start Investing <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
								<Button size="lg" variant="outline">
									Get Insured
								</Button>
								<Button size="lg" variant="outline">
									Apply for Loan
								</Button>
							</div>
						</div>

						<div className="mx-auto lg:mx-0 relative">
							<div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
							<div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
							<div className="absolute -bottom-8 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
							<div className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
								<img
									src="/placeholder.svg"
									alt="Dashboard Preview"
									className="w-full h-[400px] object-cover rounded-2xl bg-transparent opacity-30"
								/>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<section className="relative lg:min-h-[100vh] flex items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white overflow-hidden">
				{/* Background grid pattern */}
				<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

				{/* Floating gradient rings */}
				<div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

				<div className="relative z-10 container mx-auto px-6 pt-28 pb-16 lg:py-16 grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">
					{/* LEFT CONTENT */}
					<div className="space-y-8 text-center lg:text-left">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-400">
								Redefining Finance
							</span>
							<span className="block text-white/90">
								with Intelligence & Simplicity
							</span>
						</h1>

						<p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg">
							Manage investments, loans, and insurance effortlessly.
							Your money — powered by innovation.
						</p>

						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
							<Button
								size="lg"
								className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-xl shadow-blue-500/30"
							>
								Get Started
							</Button>
							<Button
								size="lg"
								variant="outline"
							>
								Explore Platform
							</Button>
						</div>

						{/* Floating stats cards */}
						<div className="flex gap-4 pt-6 justify-center lg:justify-start">
							<div className="backdrop-blur-xl bg-white/10 p-4 rounded-2xl border border-white/20 shadow-lg">
								<p className="text-2xl font-bold text-cyan-300">$2.5B+</p>
								<p className="text-sm text-gray-400">Assets Managed</p>
							</div>
							<div className="backdrop-blur-xl bg-white/10 p-4 rounded-2xl border border-white/20 shadow-lg">
								<p className="text-2xl font-bold text-cyan-300">150K+</p>
								<p className="text-sm text-gray-400">Active Users</p>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE - VISUAL MOCKUP */}
					<div className="relative flex justify-center lg:justify-end">
						{/* Dummy 3D Illustration */}
						<div className="relative w-[90%] max-w-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-tr from-slate-800 to-slate-700">
							<img
								src="https://placehold.co/500x400/1e1e2f/ffffff?text=Dashboard+Preview"
								alt="Fintech dashboard"
								className="w-full h-full object-cover opacity-90"
							/>
							{/* Overlay Glass Card */}
							<div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
								<p className="text-sm text-gray-300">Live Portfolio</p>
								<p className="text-lg font-bold text-cyan-300">+12.4% Today</p>
							</div>
						</div>

						{/* Floating circular glow */}
						<div className="absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/30 rounded-full blur-2xl"></div>
					</div>
				</div>
			</section>

			{/* Key Services Overview */}
			<section className="w-full py-12 md:py-24 bg-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold md:text-4xl/tight">
								Financial Services Tailored for You
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Explore our comprehensive suite of financial products and services.
							</p>
						</div>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{cardData.map((card, index) => (
							<Card
								key={index}
								className={`bg-gradient-to-br ${card.gradient} hover:shadow-lg transition-all gap-4 justify-between`}
							>
								<CardHeader className="pb-2">
									<div className={`w-12 h-12 rounded-full ${card.bgIcon} flex items-center justify-center mb-2`}>
										{card.icon}
									</div>
									<CardTitle className="text-xl">{card.title}</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardHeader>
								<div className="space-y-4">
									<CardContent className="pb-2">
										<ul className="space-y-2 text-sm">
											{card.features.map((feature, i) => (
												<li key={i} className="flex items-center">
													<CheckCircle2 className={`mr-2 h-4 w-4 ${card.icon.props.className?.split(' ').find(c => c.startsWith('text-'))}`} />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>
									<CardFooter className="justify-between ">
										<Button variant="ghost" className="w-full justify-between group">
											{card.buttonText}
											<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</Button>
									</CardFooter>
								</div>
							</Card>
						))}
					</div>

				</div>
			</section>

			{/* Trust Section */}
			<section className="w-full py-12 md:py-24 bg-gray-50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold md:text-4xl/tight">Why MetroFintech</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Trusted by millions for their financial journey
							</p>
						</div>
					</div>

					{/* Partner Logos */}
					<div className="flex flex-wrap justify-center gap-8 mb-12">
						<div className="bg-white p-2 rounded-lg shadow-sm">
							<img src="/placeholder.svg?height=40&width=120" alt="Partner 1" className="h-10" />
						</div>
						<div className="bg-white p-2 rounded-lg shadow-sm">
							<img src="/placeholder.svg?height=40&width=120" alt="Partner 2" className="h-10" />
						</div>
						<div className="bg-white p-2 rounded-lg shadow-sm">
							<img src="/placeholder.svg?height=40&width=120" alt="Partner 3" className="h-10" />
						</div>
						<div className="bg-white p-2 rounded-lg shadow-sm">
							<img src="/placeholder.svg?height=40&width=120" alt="Partner 4" className="h-10" />
						</div>
						<div className="bg-white p-2 rounded-lg shadow-sm">
							<img src="/placeholder.svg?height=40&width=120" alt="Partner 5" className="h-10" />
						</div>
					</div>

					{/* Stats */}
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
						<div className="bg-white p-6 rounded-xl shadow-sm text-center">
							<div className="text-4xl font-bold text-cyan-600 mb-2">₹100 Cr+</div>
							<div className="text-gray-500">Assets Under Management</div>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">2.5 Million+</div>
							<div className="text-gray-500">Happy Customers</div>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
							<div className="text-gray-500">Customer Support</div>
						</div>
					</div>

					{/* Testimonials */}
					<div className="flex justify-center gap-6 animate-scroll flex-wrap">
						<div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[350px]">
							<div className="flex items-center mb-4">
								<div className="w-10 h-10 rounded-full bg-purple-100 mr-3"></div>
								<div>
									<div className="font-medium">Rahul Sharma</div>
									<div className="text-sm text-gray-500">Investor since 2020</div>
								</div>
							</div>
							<p className="text-gray-600 text-sm">
								"MetroFintech has transformed how I manage my investments. The platform is intuitive and the advisory
								services are top-notch."
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[350px]">
							<div className="flex items-center mb-4">
								<div className="w-10 h-10 rounded-full bg-blue-100 mr-3"></div>
								<div>
									<div className="font-medium">Priya Patel</div>
									<div className="text-sm text-gray-500">Home Loan Customer</div>
								</div>
							</div>
							<p className="text-gray-600 text-sm">
								"Getting a home loan through MetroFintech was surprisingly easy. The rates were competitive and the
								process was smooth."
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[350px]">
							<div className="flex items-center mb-4">
								<div className="w-10 h-10 rounded-full bg-green-100 mr-3"></div>
								<div>
									<div className="font-medium">Amit Verma</div>
									<div className="text-sm text-gray-500">Insurance Customer</div>
								</div>
							</div>
							<p className="text-gray-600 text-sm">
								"The insurance options at MetroFintech are comprehensive and affordable. Their team helped me find the
								perfect plan for my family."
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Financial Tools */}
			<section className="w-full py-12 md:py-24 bg-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold md:text-4xl/tight">
								Financial Tools at Your Fingertips
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Plan your financial journey with our interactive calculators
							</p>
						</div>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{toolsData.map((tool, index) => (
							<Card key={index} className="hover:shadow-md transition-all gap-4 justify-between">
								<CardHeader>
									<CardTitle>{tool.title}</CardTitle>
									<CardDescription>{tool.description}</CardDescription>
								</CardHeader>
								<div className="space-y-4">
									<CardContent>
										<div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
											<span className="text-gray-500">{tool.previewText}</span>
										</div>
									</CardContent>
									<CardFooter>
										<Button className="w-full">{tool.buttonText}</Button>
									</CardFooter>
								</div>
							</Card>
						))}
					</div>

				</div>
			</section>

			{/* App Promotion */}
			{/* <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
				<div className="container px-4 md:px-6">
					<div className="grid lg:grid-cols-2 gap-12 items-center lg:justify-items-end">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold md:text-4xl/tight">Get MetroFintech on the go!</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Manage your finances anytime, anywhere with our mobile app. Track investments, pay EMIs, and more.
							</p>
							<div className="flex gap-4 mt-6">
								<button className="flex items-center gap-3 bg-gray-900 text-white px-3 py-2 rounded-md shadow transition hover:bg-gray-800 cursor-pointer">
									<img
										src="/img/icon/play-store.png"
										alt="google"
										className="object-cover h-[28px]"
									/>
									<div className="text-left">
										<div className="text-xs leading-none font-light">Get it on</div>
										<div className="font-semibold text-sm">Google Play</div>
									</div>
								</button>
								<button className="flex items-center gap-3 bg-gray-900 text-white px-3 py-2 rounded-md shadow transition hover:bg-gray-800 cursor-pointer">
									<img
										src="/img/icon/apple.png"
										alt="apple"
										className="object-cover h-[28px]"
									/>
									<div className="text-left">
										<div className="text-xs leading-none font-light">Download on the</div>
										<div className="font-semibold text-sm">App Store</div>
									</div>
								</button>
							</div>
						</div>
						<div className="mx-auto float-end lg:mx-0 relative">
							<div className="w-full sm:w-[360px] h-[500px] relative shadow-2xl rounded-2xl overflow-hidden border border-white/20">
								<img
									src="/placeholder.svg?height=600&width=300"
									alt="Mobile App Preview"
									className=" object-cover h-[500px] rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
				{/* Soft glowing background lights */}
				<div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

				<div className="container relative z-10 px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
					{/* LEFT CONTENT */}
					<div className="space-y-6 text-center lg:text-left">
						<h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
							<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
								Get MetroFintech
							</span>
							<br />
							<span className="text-white/90">on the Go!</span>
						</h2>

						<p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg md:text-xl">
							Manage your money with our mobile app.
							Track investments, pay EMIs, and grow smarter — anytime, anywhere.
						</p>

						{/* Download Buttons */}
						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
							<button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 transition-all duration-300">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
									alt="Google Play"
									className="h-10"
								/>
							</button>
							<button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 transition-all duration-300">
								<img
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
									alt="App Store"
									className="h-10"
								/>
							</button>
						</div>
					</div>

					{/* RIGHT SIDE - APP PREVIEW */}
					<div className="relative flex justify-center lg:justify-end">
						{/* Glowing backdrop */}
						<div className="absolute top-1/2 -translate-y-1/2 right-10 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl"></div>

						{/* Mockup Frame */}
						<div className="relative w-[320px] sm:w-[360px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_0_60px_-15px_rgba(0,200,255,0.4)] backdrop-blur-md">
							<img
								src="https://placehold.co/360x520/101828/ffffff?text=App+Preview"
								alt="Mobile App Preview"
								className="w-full h-full object-cover"
							/>
							{/* Glass reflection overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5"></div>
						</div>
					</div>
				</div>
			</section>


			{/* Latest Insights */}
			<section className="w-full py-12 md:py-24 bg-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold md:text-4xl/tight">Latest Financial Insights</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Stay updated with the latest trends and expert advice
							</p>
						</div>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card className="hover:shadow-md transition-all pt-0">
							<img
								src="/placeholder.svg?height=200&width=400"
								alt="Blog Image"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle>How to Start SIP in 2025</CardTitle>
								<CardDescription>A beginner's guide to systematic investment plans</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 line-clamp-3">
									Systematic Investment Plans (SIPs) are a great way to build wealth over time. This guide covers
									everything you need to know to get started...
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" className="w-full justify-between group">
									Read More
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="hover:shadow-md transition-all pt-0">
							<img
								src="/placeholder.svg?height=200&width=400"
								alt="Blog Image"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle>Best Loan Plans for Salaried Individuals</CardTitle>
								<CardDescription>Compare top loan options available in the market</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 line-clamp-3">
									Finding the right loan can be challenging. We've compared the top loan options for salaried
									professionals to help you make an informed decision...
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" className="w-full justify-between group">
									Read More
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="hover:shadow-md transition-all pt-0">
							<img
								src="/placeholder.svg?height=200&width=400"
								alt="Blog Image"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle>Understanding Health Insurance Coverage</CardTitle>
								<CardDescription>Key factors to consider when choosing a health plan</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 line-clamp-3">
									Health insurance is essential for financial security. Learn about the key factors to consider when
									selecting a health insurance plan for you and your family...
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" className="w-full justify-between group">
									Read More
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-50 to-blue-50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold md:text-4xl/tight">
								Ready to build your financial future?
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join thousands of users who are already managing their finances with MetroFintech.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								size="lg"
								variant="gradient"
							>
								Start Now
							</Button>
							<Button size="lg" variant="outline">
								Talk to an Advisor
							</Button>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
