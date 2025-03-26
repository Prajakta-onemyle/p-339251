
import React from "react";

const ReelTrackerHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)] bg-white p-6 pb-4 max-sm:p-4 max-sm:pb-3">
      <h1 className="text-[#2E3748] text-[18px] font-bold leading-5">Reel Tracker</h1>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;949:59745&quot; width=&quot;664&quot; height=&quot;23&quot; viewBox=&quot;0 0 664 23&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;close-icon&quot;> <text fill=&quot;#2E3748&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Mulish&quot; font-size=&quot;18&quot; font-weight=&quot;bold&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;0&quot; y=&quot;18.295&quot;>Reel Tracker</tspan></text> <path d=&quot;M648.122 4.5L655.061 11.6031L662 4.5&quot; stroke=&quot;#2E3748&quot; stroke-width=&quot;2.4&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M648.122 18.5L655.061 11.3969L662 18.5&quot; stroke=&quot;#2E3748&quot; stroke-width=&quot;2.4&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
          }}
        />
      </div>
    </header>
  );
};

export default ReelTrackerHeader;
