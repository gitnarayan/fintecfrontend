"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ArrowLeft, Filter, SlidersHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch, useSelector } from "react-redux"
import { getSIP, storeFilterData } from "@/store/features/mutualFund-slice"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"

export default function Sip() {
	const dispatch = useDispatch()
	// const [selectedFundType, setSelectedFundType] = useState(null)
	const [searchQuery, setSearchQuery] = useState("")

	const fundTypes = [
		{ id: "equity", label: "Equity" },
		{ id: "debt", label: "Debt" },
		{ id: "hybrid", label: "Hybrid" },
		{ id: "gold", label: "Gold" },
		{ id: "fofs", label: "Fund of Funds" },
	]

	const mutualFunds = [
		{
			id: 1,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(DD-IDCW)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.07%",
				"3year": "6.72%",
				"5year": "5.22%",
			},
			nav: "1000.5",
			rating: 5,
		},
		{
			id: 2,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(G)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.72%",
				"5year": "5.23%",
			},
			nav: "1994.2",
			rating: 5,
		},
		{
			id: 3,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(W-IDCW Reinv)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.69%",
				"5year": "5.18%",
			},
			nav: "1005",
			rating: 5,
		},
		{
			id: 4,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(W-IDCW)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.69%",
				"5year": "5.18%",
			},
			nav: "1005",
			rating: 5,
		},
	]

	const [filter, setFilter] = useState({
		mutualFundType: '',
		page: 1,
		limit: 10,
	})
	console.log(filter);

	useEffect(() => {
		dispatch(getSIP(filter))
		dispatch(storeFilterData(filter))
	}, [dispatch, filter.mutualFundType, filter.page, filter.limit])

	const sipList = useSelector((state) => state.mutualFund.sip);

	const totalCount = sipList?.data?.totalCount || 0
	const page = sipList?.data?.page || filter.page
	const limit = sipList?.data?.limit || filter.limit

	const totalPages = Math.ceil(totalCount / limit)
	const data = sipList?.data?.data;

	const getVisiblePages = () => {
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

		if (filter.page <= 4) {
			return [1, 2, 3, 4, 5, "...", totalPages]
		}

		if (filter.page >= totalPages - 3) {
			return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
		}

		return [1, "...", filter.page - 1, filter.page, filter.page + 1, "...", totalPages]
	}

	// useEffect(() => {
	// 	setFilter((pre) => ({ ...pre, page: filterData.page || data?.page, limit: filterData.imit || data?.limit }))
	// }, [ filter ])

	// console.log(sipData?.data);

	// const filteredFunds = mutualFunds.filter((fund) => {
	// 	// Filter by fund type if selected
	// 	// if (selectedFundType && !fund.type.toLowerCase().includes(selectedFundType.toLowerCase())) {
	// 	// 	return false
	// 	// }

	// 	// Filter by search query
	// 	if (searchQuery && !fund.name.toLowerCase().includes(searchQuery.toLowerCase())) {
	// 		return false
	// 	}

	// 	return true
	// })

	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center gap-4">
					<Link href="/dashboard/mutual-fund">
						<Button variant="ghost" size="icon">
							<ArrowLeft className="h-5 w-5" />
							<span className="sr-only">Back</span>
						</Button>
					</Link>
					<h1 className="text-2xl font-bold">SIP</h1>
				</div>

				{/* Search Bar */}
				<div className="relative">
					<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
					<Input
						placeholder="Search funds"
						className="pl-10 py-6 text-lg rounded-full bg-gray-50 border-gray-200"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				{/* Fund Type Filters */}


				{/* Fund Type Filters */}
				<RadioGroup
					value={filter.mutualFundType}
					onValueChange={(value) =>
						setFilter(prev => ({
							...prev,
							mutualFundType: value,
							page: 1,
						}))
					}
					className="flex justify-center flex-wrap gap-4"
				>
					{fundTypes.map((type) => (
						<label
							key={type.id}
							htmlFor={type.id}
							className={`flex items-center gap-2 px-5 py-2 rounded-full border cursor-pointer transition
        ${filter.mutualFundType === type.id
									? "bg-blue-50 border-blue-400 text-blue-700"
									: "bg-white border-gray-300"
								}`}
						>
							<RadioGroupItem value={type.id} id={type.id} />
							<span>{type.label}</span>
						</label>
					))}
				</RadioGroup>



				{/* Sort and Filter */}
				<div className="flex justify-end gap-2">
					<Button variant="ghost" size="sm" className="text-gray-500">
						<SlidersHorizontal className="h-4 w-4 mr-1" /> Sort
					</Button>
					<Button variant="ghost" size="sm" className="text-gray-500">
						<Filter className="h-4 w-4 mr-1" /> Filter
					</Button>
				</div>

				{/* Fund List */}
				<div className="space-y-4">
					{data?.length > 0 && data.map((fund) => (
						<Card key={fund?.schemecode} className="overflow-hidden hover:shadow-md transition-shadow py-4">
							<CardContent className="flex justify-between">
								<div className="flex items-center">
									<div className="p-4 flex-shrink-0 w-20 flex items-center justify-center">
										<div className="font-bold text-lg"> {fund?.schemecode}</div>
									</div>
									<div className="p-4 flex-grow">
										<h3 className="font-medium">{fund?.s_name1}</h3>
										<p className="text-sm text-gray-500">{fund?.fund_house}</p>
									</div>
								</div>
								<div className="grid grid-cols-4 divide-x divide-gray-100 items-center">
									<div className="px-5 py-3  text-center border-l">
										<div className="text-sm text-gray-500">1 year</div>
										<div className="font-medium">{fund?.returns_1year || '-'}</div>
									</div>
									<div className="px-5 py-3 text-center">
										<div className="text-sm text-gray-500">3 year</div>
										<div className="font-medium">{fund?.returns_3year || '-'}</div>
									</div>
									<div className="px-5 py-3 text-center">
										<div className="text-sm text-gray-500">5 year</div>
										<div className="font-medium">{fund?.returns_5year || '-'}</div>
									</div>
									{/* <div className="p-3 text-center">
										<div className="text-sm text-gray-500">NAV</div>
										<div className="font-medium">{fund?.nav}</div>
									</div> */}
									{/* <div className="p-3 text-center">
										<div className="text-sm text-gray-500">Rating</div>
										<div className="font-medium text-green-600">{fund?.rating}★</div>
									</div> */}
									<div className="flex justify-end items-center">
										<div className="h-6 w-6 flex justify-center items-center rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
											<Plus className="h-4 w-4 text-white" />
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div >
			{/* <div className="mt-6">
				<Pagination>
					<PaginationContent>
						<PaginationItem><PaginationPrevious
							onClick={() => {
								if (filter.page > 1) {
									setFilter(prev => ({ ...prev, page: prev.page - 1 }))
								}
							}}
						/>
						</PaginationItem>
						<PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
						<PaginationItem><PaginationEllipsis /></PaginationItem>
						<PaginationItem><PaginationNext
							onClick={() => {
								if (filter.page < totalPages) {
									setFilter(prev => ({ ...prev, page: prev.page + 1 }))
								}
							}}
						/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div> */}


			<div className="mt-6">
				<Pagination>
					<PaginationContent>

						{/* Previous */}
						<PaginationItem>
							<PaginationPrevious
								href="#"
								onClick={(e) => {
									e.preventDefault()
									if (filter.page > 1) setFilter(prev => ({ ...prev, page: prev.page - 1 }))
								}}
							/>
						</PaginationItem>

						{/* Page Numbers */}
						{getVisiblePages().map((pageNum, i) => (
							pageNum === "..." ? (
								<PaginationItem key={`ellipsis-${i}`}>
									<PaginationEllipsis />
								</PaginationItem>
							) : (
								<PaginationItem key={pageNum}>
									<PaginationLink
										href="#"
										isActive={filter.page === pageNum}
										onClick={(e) => {
											e.preventDefault()
											setFilter(prev => ({ ...prev, page: pageNum }))
										}}
									>
										{pageNum}
									</PaginationLink>
								</PaginationItem>
							)
						))}

						{/* Next */}
						<PaginationItem>
							<PaginationNext
								href="#"
								onClick={(e) => {
									e.preventDefault()
									if (filter.page < totalPages) setFilter(prev => ({ ...prev, page: prev.page + 1 }))
								}}
							/>
						</PaginationItem>

					</PaginationContent>
				</Pagination>
			</div>


		</>
	)
}
