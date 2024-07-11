"use client";

import Chart from "@/components/Chart";
import Card from "@/components/TransactionCard";
import React, { useState } from "react";
import classes from "./dashboard.module.css";

import CustomBarChart from "@/components/CustomBarChart";
import RadialChart from "@/components/RadialChart";
import {
  dashboardData,
  revenueDummyData,
  transactionByReferrerDummyData,
  transactionByVolume,
  transactionDummyData,
} from "@/app/utils/helper";

interface CardData {
  title: string;
  amount: number;
  status: number;
}

type ChartData = {
  today: { month: string; amount: number }[];
  lastWeek: { month: string; amount: number }[];
  lastMonth: { month: string; amount: number }[];
  lastYear: { month: string; amount: number }[];
};

interface MockData {
  [key: string]: CardData[];
}

const cardData: MockData = {
  today: dashboardData.today.map((item) => ({
    title: item.title,
    amount: item.amount,
    status: item.status,
  })),
  lastWeek: dashboardData.lastWeek.map((item) => ({
    title: item.title,
    amount: item.amount,
    status: item.status,
  })),
  lastMonth: dashboardData.lastMonth.map((item) => ({
    title: item.title,
    amount: item.amount,
    status: item.status,
  })),
  lastYear: dashboardData.lastYear.map((item) => ({
    title: item.title,
    amount: item.amount,
    status: item.status,
  })),
};

const Dashboard: React.FC = () => {
  const [selectedData, setSelectedData] = useState("today");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedData(value);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <select
          className="px-2 py-1 rounded-md mr-4"
          value={selectedData}
          onChange={handleSelectChange}
        >
          <option value="today">Today</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
      <div className={`${classes.customGrid}`}>
        {cardData[selectedData].map(
          (value: { title: string; amount: number; status: number }, idx) => (
            <Card
              key={value.title}
              title={value.title}
              amount={value.amount}
              status={value.status}
              idx={idx}
              classes={classes[`item${idx + 1}`]}
            />
          )
        )}
      </div>
      <div>
        <div className="lg:flex lg:gap-6">
          <Chart
            title="Revenue"
            data={revenueDummyData[selectedData as keyof ChartData]}
          />
          <Chart
            data={transactionDummyData[selectedData as keyof ChartData]}
            title="Number of Transactions"
          />
        </div>

        <div className="lg:flex lg:gap-6">
          <CustomBarChart
            data={
              transactionByReferrerDummyData[selectedData as keyof ChartData]
            }
            title="Transaction Value by Referrer (in $)"
          />

          <RadialChart
            data={transactionByVolume}
            title="% Transaction Volume by Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
