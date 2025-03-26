
import React, { useState } from "react";
import ReelTrackerHeader from "./ReelTrackerHeader";
import ReelTrackerTabs from "./ReelTrackerTabs";
import ReelTrackerFilters from "./ReelTrackerFilters";
import ReelTrackerUserList from "./ReelTrackerUserList";

type Tab = "total" | "pending" | "upcoming";

const ReelTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("total");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="w-[710px] shadow-[-4px_2px_12px_0px_rgba(220,224,232,0.35)] bg-white border-l-[0.6px] border-l-[#EDEFF2] border-solid max-md:w-full font-['Mulish']">
        <ReelTrackerHeader />
        <div className="p-6 max-sm:p-4">
          <div className="flex justify-between items-start mb-4 max-sm:flex-col max-sm:gap-3">
            <ReelTrackerTabs
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <ReelTrackerFilters />
          </div>
          <ReelTrackerUserList activeTab={activeTab} />
        </div>
      </div>
    </>
  );
};

export default ReelTracker;
