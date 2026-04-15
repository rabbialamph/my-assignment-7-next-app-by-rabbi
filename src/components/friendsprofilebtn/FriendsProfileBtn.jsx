"use client";

import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import callimg from "@/assets/call.png";
import messageimg from "@/assets/text.png";
import videoimg from "@/assets/video.png";
import { useApps } from "@/hooks/useApps";

const FriendsProfileBtn = ({ app }) => {
 
    const {setHistory} = useApps();

  const actions = [
    { id: 1, title: "Call", icon: callimg, type: "call" },
    { id: 2, title: "Text", icon: messageimg, type: "text" },
    { id: 3, title: "Video", icon: videoimg, type: "video" },
  ];

const handleClick = (item) => {
    
    if (!app) return;

    const newItem = {
     id: Date.now(),
     type: item.type,
     name: app.name,
     icon: item.icon,
     time: new Date().toLocaleTimeString(),
   };
 
    setHistory((prev) => [newItem, ...prev]);

  const message =
        item.type === "call"
      ? `Calling ${app.name}`
      : item.type === "text"
      ? `Texting ${app.name}`
      : item.type === "video"
      ? `Video calling ${app.name}`
      : "Action not found";

  toast.success(
    <div className="flex items-center gap-2">
      <Image src={item.icon} alt={item.title} width={20} height={20} />
      <span>{message}</span>
    </div>
  );
};

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
      {actions.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="bg-base-200 cursor-pointer rounded-xl p-6 flex md:flex-col gap-4 sm:gap-1 justify-center items-center hover:bg-base-300 transition"
        >
          <Image src={item.icon} alt={item.title} width={24} height={24} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default FriendsProfileBtn;