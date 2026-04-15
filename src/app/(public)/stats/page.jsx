'use client';
import { useApps } from "@/hooks/useApps";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const page = () => {
const {friends, history} = useApps();
console.log("Friends:", friends);
console.log("History:", history);

  const textCount = history.filter(item => item.type === "text").length;
  const callCount = history.filter(item => item.type === "call").length;
  const videoCount = history.filter(item => item.type === "video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#0088FE" },
    { name: "Call", value: callCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FF8042" },
  ];


  return (
    <div>
      <p className="font-semibold text-3xl my-10">Friendship Analytics</p>
    <div className=" my-10 shadow p-10 rounded-md container mx-auto">
      
      <h2 className=" mb-16">
        By Interaction Type
      </h2>
      {
        history.length === 0 ? (
          <p className="text-sm text-center min text-gray-500">No interactions yet</p>
        ) :       <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
      }

    </div>
    </div>
  );
};

export default page;