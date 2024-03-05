import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SmallTable from "./smallTable";

export default function FullTable() {
  const [fData, setFData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023/1").then((res) =>
      res.json().then((data) => {
        setFData(data);
      })
    );
  }, []);

  return (
    <div className="border-collapse  w-50 h-100">
      <div className="">
        {fData.map((data, index) => {
          return <SmallTable key={index} index={index} match={data} />;
        })}
      </div>
    </div>
  );
}
