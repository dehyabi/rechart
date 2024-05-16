"use client";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const salesData = [
  {
    month: "Jan",
    revenue: 2000,
    profit: 1500,
  },
  {
    month: "Feb",
    revenue: 3000,
    profit: 4500,
  },
  {
    month: "Mar",
    revenue: 15000,
    profit: 9000,
  },
  {
    month: "Apr",
    revenue: 5600,
    profit: 4500,
  },
  {
    month: "May",
    revenue: 9000,
    profit: 18500,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={400} data={salesData} margin={{right: 20}}>
        
        <YAxis />
        <XAxis dataKey="month" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Bar dataKey="revenue" fill="#2563eb" />
        <Bar dataKey="profit" fill="#8b5cf6" />


      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    )
  }
}

export default BarChartComponent;
