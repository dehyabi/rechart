"use client";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const productSales = [
  {
    month: "Jan",
    product1: 2000,
    product2: 1500,
  },
  {
    month: "Feb",
    product1: 3000,
    product2: 4500,
  },
  {
    month: "Mar",
    product1: 3400,
    product2: 3000,
  },
  {
    month: "Apr",
    product1: 5600,
    product2: 4500,
  },
  {
    month: "May",
    product1: 9000,
    product2: 18500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={productSales} margin={{right: 20}}>
        
        <YAxis />
        <XAxis dataKey="month" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="product1"
          stroke= "yellow"
          fill="#3b82f6"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    )
  }
}

export default AreaChartComponent;
