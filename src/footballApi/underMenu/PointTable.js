import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleTable from "./SingleTable";

export default function PointTable() {
  const [footballData, setfootballData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setfootballData(data);
      })
    );
  }, []);

  return (
    <div className="border-collapse  w-50 ">
      <div class="">
        {footballData.map((data, index) => {
          return <SingleTable key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
