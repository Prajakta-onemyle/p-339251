import React from "react";
import ReelTrackerUserItem from "./ReelTrackerUserItem";

// Mock data for the user list
const users = [
  {
    id: 1,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/acfac0eed55d74a41d7361d0b06c456eced1c2dd",
    name: "Santi Cozorla",
    company: "Bigbasket",
    date: "14 Mar",
    isDelayed: true,
    daysDelayed: 2,
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c64618f2800b10728ad57e63be004298d2aa2297",
    name: "Theresa Webb",
    company: "Supercart",
    date: "16 Mar",
    isDelayed: true,
    daysDelayed: 1,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a44186d29e22160e936784bb37380c51a8133c",
    name: "Guy Hawkins",
    company: "Freshbasket",
    date: "16 Mar",
    isDelayed: true,
    daysDelayed: 1,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4ebf95523f48b3a7b27359fd062f768bb6e2d03c",
    name: "Jerome Bell",
    company: "Bigbasket",
    date: "19 Mar",
    isDelayed: false,
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc8c013670b6fc9f38c6052deb07203e9d4708f9",
    name: "Eleanor Pena",
    company: "Bigbasket",
    date: "20 Mar",
    isDelayed: false,
  },
];

interface ReelTrackerUserListProps {
  activeTab: "total" | "pending" | "upcoming";
}

const ReelTrackerUserList: React.FC<ReelTrackerUserListProps> = ({
  activeTab,
}) => {
  // Filter users based on active tab
  const filteredUsers = users.filter((user) => {
    if (activeTab === "total") return true;
    if (activeTab === "pending") return user.isDelayed;
    if (activeTab === "upcoming") return !user.isDelayed;
    return true;
  });

  return (
    <section className="mt-4">
      {filteredUsers.map((user) => (
        <ReelTrackerUserItem
          key={user.id}
          imageUrl={user.imageUrl}
          name={user.name}
          company={user.company}
          date={user.date}
          isDelayed={user.isDelayed}
          daysDelayed={user.daysDelayed}
        />
      ))}
    </section>
  );
};

export default ReelTrackerUserList;
