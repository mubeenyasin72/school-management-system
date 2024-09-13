"use client";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "This is the description for event 1",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "This is the description for event 2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "This is the description for event 3",
  },
];

const Announcement = () => {
  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Accouncements</h1>
        <span className="text-xs text-gray-500 cursor-pointer">View all</span>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md odd:bg-SkyLight even:bg-PurpleLight"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-md text-gray-600">{event.title}</h2>
              <span className="text-xs text-black bg-white rounded-md p-1">
                {event.time}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
