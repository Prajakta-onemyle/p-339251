
import React from "react";

type Tab = "total" | "pending" | "upcoming";

interface ReelTrackerTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const ReelTrackerTabs: React.FC<ReelTrackerTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="flex justify-between items-center relative">
      <div className="flex gap-5 relative">
        <button
          className={`text-[#444] text-base cursor-pointer ${activeTab === "total" ? "font-medium" : ""}`}
          onClick={() => onTabChange("total")}
        >
          Total (5)
        </button>
        <button
          className={`text-[#444] text-base cursor-pointer ${activeTab === "pending" ? "font-medium" : ""}`}
          onClick={() => onTabChange("pending")}
        >
          Pending (3)
        </button>
        <button
          className={`text-[#444] text-base cursor-pointer ${activeTab === "upcoming" ? "font-medium" : ""}`}
          onClick={() => onTabChange("upcoming")}
        >
          Upcoming (2)
        </button>
        <div
          className="absolute w-[29px] h-[3px] bg-[#2E3748] rounded-[1.5px] -bottom-2.5 transition-all duration-300"
          style={{
            left:
              activeTab === "total"
                ? "18px"
                : activeTab === "pending"
                  ? "93px"
                  : "178px",
          }}
        />
      </div>
    </nav>
  );
};

export default ReelTrackerTabs;
