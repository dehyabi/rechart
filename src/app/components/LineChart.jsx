"use client";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={400} data={salesData} margin={{right: 20}}>
        
        <YAxis />
        <XAxis dataKey="month" />
        <CartesianGrid strokeDasharray="3 3" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Line type="monotone" dataKey="revenue" stroke="yellow" />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />


      </LineChart>
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

export default LineChartComponent;
