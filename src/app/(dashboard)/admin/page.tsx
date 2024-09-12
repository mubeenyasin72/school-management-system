import CountChart from "@/components/CountChart";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className=" w-full lg:w-[66%] flex flex-col gap-8">
        {/* User Cards */}
        <div className=" flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-[34%] h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-[66%] h-[450px] bg-green-400">Attendance Chart</div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className=""></div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-[34%] bg-red-400">Right</div>
    </div>
  );
};

export default AdminPage;
