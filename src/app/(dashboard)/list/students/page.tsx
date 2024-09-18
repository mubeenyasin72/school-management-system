

import Pagination from "@/components/Pagination";
import TabelSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";

type Teacher = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: string;
  class: string[];
  address: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentList = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr>
        <td className="flex p-4 items-center gap-2">
          <Image
            src={item.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Sky">
                <Image src="/view.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
            {/* <FormModal table="teacher" type="delete" id={item.id}/> */}
          </div>
        </td>
      </tr>
    )
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-xl font-semibold"></h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TabelSearch />
          <div className="flex gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-Yellow rounded-md">
              <Image
                src={"/filter.png"}
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-Yellow rounded-md">
              <Image
                src={"/sort.png"}
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-Yellow rounded-md">
              <Image
                src={"/plus.png"}
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentList;
