import React from "react";

export default function Card({ name, title, imageUrl }) {
  return (
    <div className="border grid grid-cols-2 h-40">
      <div className="flex-1 p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className="bg-green-400  scale-75  flex-1">
        <img src={imageUrl} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
