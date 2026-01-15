"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, TrendingUp, TrendingDown, DollarSign, Percent, BarChart3, ChevronDown, ChevronRight   } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandleStickChart } from "@/components/chart/candle-stick-chart"
import Image from "next/image"

export default function Dashboard() {
	const [ timeRange, setTimeRange ] = useState("1M")
	const [ stockTrend, setStockTrend ] = useState(5.67)

	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
					<p className="text-muted-foreground">One Platform for All Your Financial Needs.</p>
				</div>
				<div className="flex items-center gap-2">
					{/* <Button variant="outline" size="sm">
						<Download className="mr-2 h-4 w-4" />
						Download Report
					</Button> */}
					<Button
						size="lg"
						variant="gradient"
					>
						<DollarSign className="mr-2 h-4 w-4" />
						Add Funds
					</Button>
				</div>
			</div>

			{/* Mutual Funds Card */}
			<Card className="overflow-hidden py-0">
				<CardContent className="p-0">
					<div className="flex flex-col md:flex-row">
						<div className="relative bg-blue-100 md:w-1/3">
							<div className="relative h-44 md:h-full">
								<Image
									src="/placeholder.svg"
									alt="Mutual Funds"
									fill
									className="object-cover w-full h-auto opacity-50"
								/>
								<h3 className=" text-gradient-alt z-10 absolute top-2 right-6 text-4xl!"> Mutual Funds</h3>
							</div>
							<div className="hidden md:block">
								<ChevronRight className="h-6 w-6 text-blue-500" />
							</div>
						</div>
						<div className="p-6 md:w-2/3">
							<div className="grid grid-cols-2 gap-4 mb-4">
								<div>
									<p className="text-gray-500">Invested value</p>
									<p className="text-xl font-bold">₹0</p>
								</div>
								<div>
									<p className="text-gray-500">Current value</p>
									<p className="text-xl font-bold">₹0</p>
								</div>
							</div>
							<div className="bg-gray-100 p-3 rounded-md mb-4">
								<div className="flex justify-between">
									<p className="text-gray-500">Gains</p>
									<p className="font-bold">₹0</p>
								</div>
							</div>
							<div className="space-y-2 mb-4">
								<div className="flex justify-between">
									<p className="text-gray-500">Today's change</p>
									<p className="font-bold">₹0(0%)</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-500">Annualized return</p>
									<p className="font-bold">N/A</p>
								</div>
							</div>
							<Link href="/dashboard/mutual-fund/sip">
								<Button className="w-full bg-blue-600 hover:bg-blue-700">INVEST</Button>
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Overview Cards */}

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Assets</CardTitle>
						<DollarSign className="h-4 w-4 text-purple-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹24,56,789</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+12.5% from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
						<DollarSign className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹8,45,000</div>
						<div className="flex items-center text-xs text-red-500">
							<TrendingDown className="mr-1 h-3 w-3" />
							<span>-2.3% from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Net Worth</CardTitle>
						<BarChart3 className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹16,11,789</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+8.2% from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
						<Percent className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹75,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+5.1% from last month</span>
						</div>
					</CardContent>
				</Card>
			</div>




			{/* Candle Stick Chart */}

			<Card className="overflow-hidden">
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-lg">Market Performance</CardTitle>
							<CardDescription>NIFTY 50 Index</CardDescription>
						</div>
						<div className="flex items-center gap-2">
							<div className="flex items-center text-sm font-medium">
								{stockTrend > 0 ? (
									<TrendingUp className="mr-1 h-4 w-4 text-green-500" />
								) : (
									<TrendingDown className="mr-1 h-4 w-4 text-red-500" />
								)}
								<span className={stockTrend > 0 ? "text-green-500" : "text-red-500"}>
									{stockTrend > 0 ? "+" : ""}
									{stockTrend}%
								</span>
							</div>
							<div className="flex items-center gap-1 rounded-lg border p-1">
								{[ "1D", "1W", "1M", "3M", "1Y", "ALL" ].map((range) => (
									<Button
										key={range}
										variant={timeRange === range ? "default" : "ghost"}
										size="sm"
										className={`h-7 px-2 text-xs ${timeRange === range
											? "bg-purple-600 text-white hover:bg-purple-700"
											: "text-gray-500 hover:text-gray-900"
											}`}
										onClick={() => {
											setTimeRange(range)
											// Simulate different trends for different time ranges
											setStockTrend(
												range === "1D" ? -1.23 : range === "1W" ? 5.67 : range === "1M" ? 8.92 : range === "3M" ? 12.45 : range === "1Y" ? 24.78 : 5.32,
											)
										}}
									>
										{range}
									</Button>
								))}
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<div className="h-[350px] w-full">
						<CandleStickChart timeRange={timeRange} trend={stockTrend} />
					</div>
				</CardContent>
			</Card>

			{/* Financial Categories */}
			<Tabs defaultValue="investments" className="space-y-4 mt-12">
				<TabsList className="grid grid-cols-4 md:w-[400px]">
					<TabsTrigger value="investments">Investments</TabsTrigger>
					<TabsTrigger value="loans">Loans</TabsTrigger>
					<TabsTrigger value="insurance">Insurance</TabsTrigger>
					<TabsTrigger value="cards">Credit Cards</TabsTrigger>
				</TabsList>

				{/* Investments Tab */}
				<TabsContent value="investments" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Mutual Funds</CardTitle>
								<CardDescription>Total: ₹12,45,000</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm">Returns</span>
									<span className="text-sm font-medium text-green-600">+15.2%</span>
								</div>
								<Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
							</CardContent>
							<CardFooter className="pt-2">
								<Link href="/dashboard/investments/mutual-funds">
									<Button variant="ghost" size="sm" className="w-full justify-between">
										View Details
										<ArrowUpRight className="h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Stocks</CardTitle>
								<CardDescription>Total: ₹8,75,000</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm">Returns</span>
									<span className="text-sm font-medium text-green-600">+8.7%</span>
								</div>
								<Progress value={65} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
							</CardContent>
							<CardFooter className="pt-2">
								<Link href="/dashboard/investments/stocks">
									<Button variant="ghost" size="sm" className="w-full justify-between">
										View Details
										<ArrowUpRight className="h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Fixed Deposits</CardTitle>
								<CardDescription>Total: ₹3,25,000</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm">Returns</span>
									<span className="text-sm font-medium text-blue-600">+6.5%</span>
								</div>
								<Progress value={45} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />
							</CardContent>
							<CardFooter className="pt-2">
								<Link href="/dashboard/investments/fixed-deposits">
									<Button variant="ghost" size="sm" className="w-full justify-between">
										View Details
										<ArrowUpRight className="h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
					<div className="flex justify-center">
						<Link href="/dashboard/investments">
							<Button variant="outline">
								View All Investments
								<ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</TabsContent>

				{/* Loans Tab */}
				<TabsContent value="loans" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Home Loan</CardTitle>
								<CardDescription>HDFC Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹45,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹60,000 (1st May)</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">75% Paid</span>
									</div>
									<Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Car Loan</CardTitle>
								<CardDescription>SBI Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹8,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹25,000 (5th May)</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">40% Paid</span>
									</div>
									<Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Personal Loan</CardTitle>
								<CardDescription>ICICI Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹2,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹15,000 (10th May)</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">60% Paid</span>
									</div>
									<Progress value={60} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="flex justify-center">
						<Link href="/dashboard/loans">
							<Button variant="outline">
								View All Loans
								<ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</TabsContent>

				{/* Insurance Tab */}
				<TabsContent value="insurance" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Life Insurance</CardTitle>
								<CardDescription>LIC Jeevan Anand</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Sum Assured</span>
										<span className="font-medium">₹1,00,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Premium</span>
										<span className="font-medium">₹60,000 (Annual)</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-2">
									<div className="rounded-lg bg-purple-100 p-2 text-center">
										<span className="text-xs font-medium text-purple-700">Death Benefit</span>
									</div>
									<div className="rounded-lg bg-purple-100 p-2 text-center">
										<span className="text-xs font-medium text-purple-700">Disability</span>
									</div>
									<div className="rounded-lg bg-purple-100 p-2 text-center">
										<span className="text-xs font-medium text-purple-700">Critical Illness</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Policy
								</Button>
								<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
									Pay Premium
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Health Insurance</CardTitle>
								<CardDescription>Star Health Family Plan</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Sum Insured</span>
										<span className="font-medium">₹25,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Premium</span>
										<span className="font-medium">₹35,000 (Annual)</span>
									</div>
								</div>
								<div className="rounded-lg bg-blue-100 p-2 text-center">
									<span className="text-xs font-medium text-blue-700">5000+ Cashless Hospitals</span>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Policy
								</Button>
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
									Renew
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Car Insurance</CardTitle>
								<CardDescription>HDFC ERGO</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">IDV</span>
										<span className="font-medium">₹12,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Premium</span>
										<span className="font-medium">₹25,000 (Annual)</span>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<div className="rounded-lg bg-green-100 p-2 text-center">
										<span className="text-xs font-medium text-green-700">Zero Dep Cover</span>
									</div>
									<div className="rounded-lg bg-green-100 p-2 text-center">
										<span className="text-xs font-medium text-green-700">Roadside Assistance</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Policy
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									Renew
								</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="flex justify-center">
						<Link href="/dashboard/insurance">
							<Button variant="outline">
								View All Insurance
								<ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</TabsContent>

				{/* Credit Cards Tab */}
				<TabsContent value="cards" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">HDFC Regalia</CardTitle>
								<CardDescription>**** **** **** 4567</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-gray-500">Available Balance</p>
										<p className="text-2xl font-bold">₹9,00,000</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">Utilized</p>
										<p className="text-lg font-medium">₹2,00,000</p>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">Credit Limit: ₹11,00,000</span>
									</div>
									<Progress value={18} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
									Pay Bill
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">AMEX Platinum</CardTitle>
								<CardDescription>**** **** **** 7890</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-gray-500">Available Balance</p>
										<p className="text-2xl font-bold">₹7,50,000</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">Utilized</p>
										<p className="text-lg font-medium">₹1,50,000</p>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">Credit Limit: ₹9,00,000</span>
									</div>
									<Progress value={16} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
									Pay Bill
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">SBI Elite</CardTitle>
								<CardDescription>**** **** **** 1234</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-gray-500">Available Balance</p>
										<p className="text-2xl font-bold">₹4,50,000</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">Utilized</p>
										<p className="text-lg font-medium">₹50,000</p>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">Credit Limit: ₹5,00,000</span>
									</div>
									<Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									Pay Bill
								</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="flex justify-center">
						<Link href="/dashboard/credit-cards">
							<Button variant="outline">
								View All Credit Cards
								<ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</TabsContent>
			</Tabs>

			{/* Financial Insights */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-bold">Financial Insights</h3>
					<Button variant="ghost" size="sm" className="gap-1">
						View All <ChevronRight className="h-4 w-4" />
					</Button>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
						<CardHeader>
							<CardTitle className="text-lg">Risk Assessment</CardTitle>
							<CardDescription>Your current investment risk profile</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-sm">Risk Meter</span>
									<span className="text-sm font-medium">Moderate</span>
								</div>
								<div className="h-4 w-full rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">
									<div className="relative h-full">
										<div className="absolute top-0 h-6 w-1 -translate-y-1 translate-x-[60%] bg-black"></div>
									</div>
								</div>
								<p className="text-sm text-gray-500">
									Your portfolio has a moderate risk level. Consider diversifying into more stable assets if you're
									planning for short-term goals.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
						<CardHeader>
							<CardTitle className="text-lg">Robo Advisory</CardTitle>
							<CardDescription>Personalized investment recommendations</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="rounded-lg bg-purple-50 p-3">
									<div className="flex items-center gap-2">
										<TrendingUp className="h-4 w-4 text-purple-600" />
										<p className="text-sm font-medium">Increase SIP in mid-cap funds</p>
									</div>
									<p className="mt-1 text-xs text-gray-500">
										Based on your risk profile and market conditions, we recommend increasing your SIP in mid-cap funds
										by 10%.
									</p>
								</div>
								<div className="rounded-lg bg-blue-50 p-3">
									<div className="flex items-center gap-2">
										<TrendingDown className="h-4 w-4 text-blue-600" />
										<p className="text-sm font-medium">Reduce exposure to IT sector</p>
									</div>
									<p className="mt-1 text-xs text-gray-500">
										The IT sector is facing headwinds. Consider reducing your exposure by 15% and reallocating to
										defensive sectors.
									</p>
								</div>
								<Button variant="outline" size="sm" className="w-full">
									View All Recommendations
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

// function ChevronRight(props) {
// 	return <ChevronDown {...props} className="h-4 w-4 rotate-270" />
// }
