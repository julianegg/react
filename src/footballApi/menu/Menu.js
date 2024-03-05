import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 text-white p-8 flex justify-between items-center">
      <div className="text-black text-3xl">Bundes</div>
      <div className="text-red-500 text-3xl">liga</div>
      <div className=" h-11 w-11 ml-5" src="logo.png" alt="logo">
        <Logo />
      </div>
      <div className="flex gap-2 ml-auto">
        <Button
          title="Letzter Spieltag"
          onClick={() => {
            navigate("/teams");
          }}
        />
        <Button
          title="Teams"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
