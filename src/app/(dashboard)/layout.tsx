import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span>School Name</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-green-200">Right</div>
    </div>
  );
} 
