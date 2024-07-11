"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatNumber, formatTime } from "@/app/utils/helper";

interface ChartProps {
  title: string;
  data: { month: string; amount: number }[];
}

const chartConfig: ChartConfig = {
  amount: {
    label: "amount",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const Chart: React.FC<ChartProps> = ({ title, data }) => {
  return (
    <Card className={`lg:flex-1 sm:max-w-[432px] border-0 shadow-none`}>
      <CardTitle className="mb-[18px] text-sm">{title}</CardTitle>
      <CardContent className="p-0 md:p-2">
        <ChartContainer config={chartConfig}>
          <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (value.includes(":")) {
                  return formatTime(value);
                } else if (value.includes(" ")) {
                  return value;
                }
                return value;
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
              cursor={{
                stroke: "#D7D7D7",
                strokeWidth: 2,
                strokeDasharray: "5 5",
              }}
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
            <Line
              type="natural"
              dataKey="amount"
              stroke="#526062"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
