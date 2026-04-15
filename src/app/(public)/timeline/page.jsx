"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApps } from "@/hooks/useApps";
import { FaAngleDown } from "react-icons/fa";

const CTVhistory = () => {
  const { history } = useApps();
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(false);

  const sortedHistory = [...history].sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredHistory = 
     filter === 'all' 
     ? sortedHistory 
     : sortedHistory.filter(item => item.type === filter);

     const options = ['all', 'text', 'call', 'video'];

  return (
    <div className="p-4 bg-base-200">
      <h2 className="font-bold mb-4">Timeline</h2>


       <div className="relative mb-4">
         <button
           onClick={() => setOpen(!open)}
           className=" bg-white px-3 py-2 rounded-md text-sm flex items-center justify-between"
         >
           <span className="flex items-center gap-2">Filter Timeline - {filter} <FaAngleDown/></span> 
         </button>
       
         {open && (
           <div className="absolute mt-1 bg-white rounded-md shadow z-1">
             {options.map((id) => (
               <div
                 key={id}
                 onClick={() => {
                   setFilter(id);
                   setOpen(false);
                 }}
                 className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
               >
                 {id}
               </div>
             ))}
           </div>
         )}
       </div>


      {filteredHistory?.length === 0 ? (
        <p className="text-sm text-center text-gray-500">No history yet</p>
      ) : (
        <div className="gap-3 flex flex-col">
          {filteredHistory.map((item) => (
            <div
              key={item.id} 
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow "
            >
         
              <Image
                src={item.icon}
                alt={item.type}
                width={24}
                height={24}
              />
              <div className="">
                <h2 className="text-sm font-medium">
                  <span className="font-semibold ">{item.type}</span> with {item.name}
                </h2>
              
                <p className="text-xs text-gray-400 mt-1">
                  {item.time}
                </p>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default CTVhistory;