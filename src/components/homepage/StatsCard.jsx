'use client';

import { useApps } from "@/hooks/useApps";

const StatsCard = () => {
  
  const { friends } = useApps();
  const onTrack = friends?.filter(friend => friend.status === "on-track").length || 0;
  const needAttention = friends?.filter(friend => friend.status === "almost due" || friend.status === "overdue").length || 0;
  const interactionsThisMonth = friends?.filter(friend => friend.days_since_contact <= 30).length || 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">

      <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-800">
          {friends?.length || 0}
        </h2>
        <p className="text-gray-500 mt-1 text-sm">Total Friends</p>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-800">{onTrack}</h2>
        <p className="text-gray-500 mt-1 text-sm">On Track</p>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-800">{needAttention}</h2>
        <p className="text-gray-500 mt-1 text-sm">Need Attention</p>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-800">{interactionsThisMonth}</h2>
        <p className="text-gray-500 mt-1 text-sm">Interactions This Month</p>
      </div>

    </div>
  );
};

export default StatsCard;