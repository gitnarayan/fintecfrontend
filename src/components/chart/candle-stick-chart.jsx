"use client"

import { useEffect, useState } from "react"
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line, Legend } from "recharts"

// Generate random candle stick data
const generateCandleStickData = (days, trend) => {
	const data = []
	let baseValue = 100000
	const isPositive = trend > 0
	const volatility = Math.abs(trend) / 2

	for (let i = 0; i < days; i++) {
		// Random daily change with bias based on trend
		const change = (Math.random() - (isPositive ? 0.4 : 0.6)) * volatility
		baseValue = baseValue * (1 + change / 100)

		const date = new Date()
		date.setDate(date.getDate() - (days - i))
		const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

		// Generate open, high, low, close values
		const open = baseValue * (1 + (Math.random() - 0.5) * 0.01)
		const close = baseValue * (1 + (Math.random() - 0.5) * 0.01)
		const high = Math.max(open, close) * (1 + Math.random() * 0.005)
		const low = Math.min(open, close) * (1 - Math.random() * 0.005)
		const volume = Math.floor(Math.random() * 1000000) + 500000

		data.push({
			date: formattedDate,
			open: Math.round(open),
			high: Math.round(high),
			low: Math.round(low),
			close: Math.round(close),
			volume,
			ma5: Math.round(baseValue * (1 + (Math.random() - 0.5) * 0.005)),
			ma20: Math.round(baseValue * (1 + (Math.random() - 0.5) * 0.002)),
		})
	}

	return data
}


export function CandleStickChart({ timeRange, trend }) {
	const [data, setData] = useState([])

	useEffect(() => {
		// Set days based on time range
		const days = timeRange === "1D" ? 1 : timeRange === "1W" ? 7 : timeRange === "1M" ? 30 : timeRange === "3M" ? 90 : timeRange === "1Y" ? 365 : 180

		setData(generateCandleStickData(Math.min(days, 30), trend))
	}, [timeRange, trend])

	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value)
	}

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-white p-3 border rounded-md shadow-md">
					<p className="font-medium">{label}</p>
					<p className="text-sm">
						<span className="font-medium">Open:</span> {formatCurrency(payload[0].payload.open)}
					</p>
					<p className="text-sm">
						<span className="font-medium">High:</span> {formatCurrency(payload[0].payload.high)}
					</p>
					<p className="text-sm">
						<span className="font-medium">Low:</span> {formatCurrency(payload[0].payload.low)}
					</p>
					<p className="text-sm">
						<span className="font-medium">Close:</span> {formatCurrency(payload[0].payload.close)}
					</p>
					<p className="text-sm">
						<span className="font-medium">Volume:</span>{" "}
						{new Intl.NumberFormat("en-IN").format(payload[0].payload.volume)}
					</p>
				</div>
			)
		}

		return null
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<ComposedChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 30,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
				<XAxis
					dataKey="date"
					scale="band"
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "#6b7280" }}
					tickMargin={10}
				/>
				<YAxis
					yAxisId="left"
					orientation="left"
					tickFormatter={formatCurrency}
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "#6b7280" }}
					tickMargin={10}
					domain={["auto", "auto"]}
				/>
				<YAxis
					yAxisId="right"
					orientation="right"
					tickFormatter={(value) => `${value / 1000}K`}
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "#6b7280" }}
					tickMargin={10}
					domain={["auto", "auto"]}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Bar yAxisId="right" dataKey="volume" fill="#e5e7eb" opacity={0.5} barSize={20} name="Volume" />
				{/* <Bar
					yAxisId="left"
					name="Price"
					dataKey="open"
					fill={(entry) => (entry.open > entry.close ? "#ef4444" : "#10b981")}
					stroke={(entry) => (entry.open > entry.close ? "#ef4444" : "#10b981")}
					strokeWidth={1}
					barSize={6}
				/> */}

				<Bar
					yAxisId="left"
					name="Price"
					dataKey="open"
					fill="#10b981"
					stroke="#10b981"
					strokeWidth={1}
					barSize={6}
				>
					{data.map((entry, index) => {
						const color = entry.open > entry.close ? "#ef4444" : "#10b981"
						return <Cell key={`price-cell-${index}`} fill={color} stroke={color} />
					})}
				</Bar>



				<Line yAxisId="left" type="monotone" dataKey="ma5" stroke="#8b5cf6" dot={false} name="MA5" strokeWidth={2} />
				<Line yAxisId="left" type="monotone" dataKey="ma20" stroke="#3b82f6" dot={false} name="MA20" strokeWidth={2} />
			</ComposedChart>
		</ResponsiveContainer>
	)
}
