import React from "react";

export default function Button({ title, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      className="hover:text-red-600 hover:cursor-pointer border p-2 text-black border-black rounded-xl  "
    >
      {title}
    </div>
  );
}
