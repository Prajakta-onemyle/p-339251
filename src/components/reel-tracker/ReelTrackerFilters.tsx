
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReelTrackerFilters: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState("Week");
  const [campaignFilter, setCampaignFilter] = useState("All Campaign");

  return (
    <div className="flex gap-3.5 max-sm:flex-col">
      <Select value={timeFilter} onValueChange={setTimeFilter}>
        <SelectTrigger className="w-[110px] h-[40px] rounded shadow-[0px_8px_20px_0px_rgba(207,212,224,0.10)] bg-white border-[0.8px] border-solid border-[rgba(219,225,234,0.80)] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="Week" className="text-[#2E3748] text-base font-medium" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-solid border-[#E2E7EE] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)] rounded-[5px] min-w-[106px]">
          <SelectItem value="Today" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Today</SelectItem>
          <SelectItem value="Week" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Week</SelectItem>
          <SelectItem value="Month" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Month</SelectItem>
        </SelectContent>
      </Select>

      <Select value={campaignFilter} onValueChange={setCampaignFilter}>
        <SelectTrigger className="w-[140px] h-[40px] rounded shadow-[0px_8px_20px_0px_rgba(207,212,224,0.10)] bg-white border-[0.8px] border-solid border-[rgba(219,225,234,0.80)] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="All Campaign" className="text-[#2E3748] text-base font-medium" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-solid border-[#E2E7EE] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)] rounded-[5px]">
          <SelectItem value="All Campaign" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">All Campaign</SelectItem>
          <SelectItem value="Bigbasket" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Bigbasket</SelectItem>
          <SelectItem value="Supercart" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Supercart</SelectItem>
          <SelectItem value="Freshbasket" className="text-[#2E3748] text-sm cursor-pointer hover:bg-gray-100">Freshbasket</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ReelTrackerFilters;
