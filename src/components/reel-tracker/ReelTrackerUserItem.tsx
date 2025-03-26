import React from "react";

interface UserItemProps {
  imageUrl: string;
  name: string;
  company: string;
  date: string;
  isDelayed?: boolean;
  daysDelayed?: number;
}

const ReelTrackerUserItem: React.FC<UserItemProps> = ({
  imageUrl,
  name,
  company,
  date,
  isDelayed,
  daysDelayed,
}) => {
  return (
    <article className="px-0 py-4 border-t-[0.8px] border-t-[#DBE1EA] border-solid">
      <div className="flex gap-3 items-center">
        <img
          src={imageUrl}
          alt={`${name}'s avatar`}
          className="w-11 h-11 rounded-[100px]"
        />
        <div className="flex-1">
          <h3 className="text-[#333] text-base font-bold mb-1.5">{name}</h3>
          <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-1">
            <div className="flex items-center text-[#666] text-sm">
              <span>{company}</span>
              <span className="w-[0.6px] h-2.5 opacity-60 bg-[#444] mx-1.5 my-0" />
              <span>on {date}</span>
            </div>
            {isDelayed && (
              <div className="flex items-center gap-1.5 text-[#2E3748] text-sm font-semibold">
                <span>
                  {daysDelayed} {daysDelayed === 1 ? "day" : "days"} delayed
                </span>
                <span className="w-[7px] h-[7px] bg-[#E21619] rounded-[50%]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReelTrackerUserItem;
