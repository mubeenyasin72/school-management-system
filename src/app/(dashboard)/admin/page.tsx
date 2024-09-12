import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className=" w-full lg:w-[66%]">
        {/* User Cards */}
        <div className=" flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-[34%] bg-red-400">Right</div>
    </div>
  );
};

export default AdminPage;
