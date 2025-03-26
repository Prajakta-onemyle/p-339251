import React, { useState, useRef, useEffect } from "react";

const ReelTrackerFilters: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState("Week");
  const [campaignFilter, setCampaignFilter] = useState("All Campaign");
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const timeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(event.target as Node)
      ) {
        setShowTimeDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTimeFilterChange = (filter: string) => {
    setTimeFilter(filter);
    setShowTimeDropdown(false);
  };

  return (
    <div className="flex gap-3.5 max-sm:flex-col">
      <div className="relative" ref={timeDropdownRef}>
        <button
          className="flex items-center rounded shadow-[0px_8px_20px_0px_rgba(207,212,224,0.10)] cursor-pointer bg-white px-4 py-2 border-[0.8px] border-solid border-[rgba(219,225,234,0.80)] max-sm:w-full"
          onClick={() => setShowTimeDropdown(!showTimeDropdown)}
        >
          <div className="text-[#2E3748] text-base font-medium">
            {timeFilter}
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;949:59773&quot; width=&quot;73&quot; height=&quot;24&quot; viewBox=&quot;0 0 73 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;dropdown-icon&quot;> <text fill=&quot;#2E3748&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Mulish&quot; font-size=&quot;16&quot; font-weight=&quot;500&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;0&quot; y=&quot;18.04&quot;>Week</tspan></text> <path d=&quot;M65.877 14.1497L61.4385 8.99996L57.0002 14.1497&quot; stroke=&quot;#2E3748&quot; stroke-width=&quot;1.3&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
              }}
            />
          </div>
        </button>

        {showTimeDropdown && (
          <div className="absolute w-[106px] border shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)] bg-white p-3 rounded-[5px] border-solid border-[#E2E7EE] z-10 mt-1">
            <div
              className="text-[#2E3748] text-sm cursor-pointer px-0 py-[3px] hover:bg-gray-100"
              onClick={() => handleTimeFilterChange("Today")}
            >
              Today
            </div>
            <div
              className="text-[#2E3748] text-sm cursor-pointer px-0 py-[3px] hover:bg-gray-100"
              onClick={() => handleTimeFilterChange("Week")}
            >
              Week
            </div>
            <div
              className="text-[#2E3748] text-sm cursor-pointer px-0 py-[3px] hover:bg-gray-100"
              onClick={() => handleTimeFilterChange("Month")}
            >
              Month
            </div>
          </div>
        )}
      </div>

      <button className="flex items-center rounded shadow-[0px_8px_20px_0px_rgba(207,212,224,0.10)] cursor-pointer bg-white px-4 py-2 border-[0.8px] border-solid border-[rgba(219,225,234,0.80)] max-sm:w-full">
        <div className="text-[#2E3748] text-base font-medium">
          {campaignFilter}
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;949:59779&quot; width=&quot;131&quot; height=&quot;24&quot; viewBox=&quot;0 0 131 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;dropdown-icon&quot;> <text fill=&quot;#2E3748&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Mulish&quot; font-size=&quot;16&quot; font-weight=&quot;500&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;0&quot; y=&quot;18.04&quot;>All Campaign</tspan></text> <path d=&quot;M115 9L119.438 14.1497L123.877 9&quot; stroke=&quot;#2E3748&quot; stroke-width=&quot;1.3&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
            }}
          />
        </div>
      </button>
    </div>
  );
};

export default ReelTrackerFilters;
