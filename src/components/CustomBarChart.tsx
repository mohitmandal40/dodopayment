"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { formatNumber, formatTime } from "@/app/utils/helper";

const chartConfig = {
  desktop: {
    label: "amount",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#413ea0",
  "#a4de6c",
];

const CustomBarChart: React.FC<{
  data: { month: string; amount: number }[];
  title: string;
}> = ({ data, title }) => {
  return (
    <Card className={`lg:flex-1 sm:max-w-[432px] border-0 shadow-none`}>
      <CardTitle className="mb-[18px] text-sm">{title}</CardTitle>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (value.includes(":")) {
                  return formatTime(value);
                } else if (value.includes(" ")) {
                  return value;
                }
                return value.slice(0, 3);
              }}
            />
            <YAxis
              dataKey="amount"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                return formatNumber(value);
              }}
            />
            <Tooltip
              cursor={false}
              labelFormatter={(label) => {
                if (label.includes(":")) {
                  return formatTime(label);
                } else if (label.includes(" ")) {
                  return label;
                }
                return label.slice(0, 3);
              }}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const { value } = payload[0];
                const formattedValue = value!.toLocaleString();
                return (
                  <div className="bg-[#1C1C1C] p-2 rounded-lg text-white">
                    ${formattedValue}
                  </div>
                );
              }}
            />

            <Bar dataKey="amount" radius={8}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
            <ReferenceLine
              x="month"
              stroke="red"
              strokeDasharray="3 3"
              alwaysShow
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CustomBarChart;
