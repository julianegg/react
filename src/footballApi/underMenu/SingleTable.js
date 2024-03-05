import React from "react";

export default function SingleTable({ index, team }) {
  return (
    <div className="grid grid-cols-[40px_40px_auto_40px] gap-x-4 rounded-xl border border-black border-solid hover:bg-slate-400 pl-4 mt-1 ml-5 mr-10 ">
      <div className="w-1/12 pl-2 ">{index + 1}</div>
      <div className="w-5">
        <img className="hidden sm:block" src={team.teamIconUrl} />
      </div>
      <div className="">{team.teamName}</div>
      <div className="">{team.points}</div>
    </div>
  );
}
