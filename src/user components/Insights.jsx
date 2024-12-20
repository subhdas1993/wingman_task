import { TrendingUp } from "lucide-react"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
import React from 'react'
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// const chartConfig = {
//   commission: {
//     label: "Commission",
//     color: "hsl(var(--chart-1))",
//   },
//   revenue: {
//     label: "Revenue",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

const dataSales = [
    {"month":"Jan","commission":"$7.74","revenue":"€1000,00"},
    {"month":"Feb","commission":"$6.96","revenue":"€1000,00"},
    {"month":"Mar","commission":"$6.78","revenue":"€1200,00"},
    {"month":"Apr","commission":"$0.72","revenue":"€1300,00"},
    {"month":"May","commission":"$1.02","revenue":"€1400,00"},
    {"month":"Jun","commission":"$9.93","revenue":"€1000,00"},
    {"month":"Jul","commission":"$3.02","revenue":"€1500,00"},
    {"month":"Aug","commission":"$2.36","revenue":"€1600,00"},
    {"month":"Sep","commission":"$1.32","revenue":"€1700,00"},
    {"month":"Oct","commission":"$2.44","revenue":"€1300,00"},
    {"month":"Nov","commission":"$8.56","revenue":"€1600,00"},
    {"month":"Dec","commission":"$1.13","revenue":"€1800,00"}
]

function Insights() {
  return (
    <>
      <h1 className='pt-8 px-6 pb-4 text-[#212636] font-medium text-[1.5rem] lg:text-[2rem]'>Insights</h1>
      <div>
      <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={dataSales}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="commission"
              type="monotone"
              stroke="var(--color-commission)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
      </div>
    </>
  )
}

export default Insights