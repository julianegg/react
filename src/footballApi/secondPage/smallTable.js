import React from "react";

export default function smallTable({ index, match }) {
  return (
    <div className="bg-white border-solid border-2 border-black mt-4 flex justify-between p-2 hover:bg-red-600 rounded-lg ml-10 mr-10">
      <div className="flex-1 text-center">{match.team1.teamName}</div>
      <div className="flex-1 text-center">
        {match.matchResults[1].pointsTeam1 +
          " : " +
          match.matchResults[1].pointsTeam2}
      </div>
      <div className="flex-1 text-center">{match.team2.teamName}</div>
    </div>
  );
}
