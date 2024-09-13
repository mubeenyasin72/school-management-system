"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
];


const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="texr-lg font-semibold">Students</h1>
        <Image
          src={"/moreDark.png"}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/malefemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      {/* BOOTOM */}
      <div className="flex gap-16 justify-around">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-Sky rounded-full w-5 h-5"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-[10px] text-gray-300 font-medium">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-Yellow rounded-full w-5 h-5"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300 font-medium">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
