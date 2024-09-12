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
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8",
    },
    {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed",
    },
    {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1",
    },
    {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d",
    },
    {
        name: "40-49",
        uv: 8.63,
        pv: 3908,
        fill: "#a4de6c",
    },
    {
        name: "50+",
        uv: 2.63,
        pv: 4800,
        fill: "#d0ed57",
    },
    {
        name: "unknow",
        uv: 6.67,
        pv: 4800,
        fill: "#ffc658",
    },
];

const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
};

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1>Students</h1>
                <Image src={"/moreDark.png"} alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
            {/* CHART */}
            <div className="">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            // minAngle={15}
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            // clockWise
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* BOOTOM */}
            <div className="flex gap-16 justify-around">
                <div className="flex flex-col items-center gap-1">
                    <div className="bg-Purple rounded-full w-5 h-5"></div>
                    <h1>1234</h1>
                    <h2 className="text-[10px] text-gray-400 font-medium">Boys (55%)</h2>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="bg-Yellow rounded-full w-5 h-5"></div>
                    <h1 className="font-bold">1234</h1>
                    <h2 className="text-[10px] text-gray-400 font-medium">Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;