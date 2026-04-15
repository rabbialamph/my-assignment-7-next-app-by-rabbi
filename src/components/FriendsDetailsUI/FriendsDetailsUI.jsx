import Image from "next/image";
import FriendsProfileBtn from "../friendsprofilebtn/FriendsProfileBtn";

const FriendsDetailsUI = ({ app, getStatusStyle }) => {
    return (
    <div>
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-base-200">

      <div className="bg-white rounded-xl shadow p-6 text-center">
        <Image
          src={app.picture}
          alt={app.name}
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-3">{app.name}</h2>

            <span
                className={`mt-2 px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
                    app.status
                )}`}
              >
                {app.status.toUpperCase()}
            </span>

        <span className="block text-sm text-gray-500 mt-2">
          {app.tags.join(", ")}
        </span>

        <p className="text-sm text-gray-500 mt-3 italic">
          {app.bio}
        </p>

        <p className="text-xs text-gray-400 mt-2">
        {app.email}
        </p>

        <div className="mt-6 space-y-2">

          <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2">
            Snooze 2 Weeks
          </button>

          <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2">
            Archive
          </button>

          <button className="w-full border rounded-lg py-2 text-red-600 flex items-center justify-center gap-2">
            Delete
          </button>

        </div>
      </div>


      <div className="lg:col-span-2 space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold">{app.days_since_contact}</h2>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold">{app.goal}</h2>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold">{app.next_due_date}</h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>

        </div>

      
        <div className="bg-white shadow rounded-xl p-10 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-sm text-gray-500">
              Connect every <b>{app.goal}</b> days
            </p>
          </div>

          <button className="px-3 py-1 text-sm bg-base-200 rounded-md">
            Edit
          </button>
        </div>

     
        <div className="bg-white shadow rounded-xl p-10">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div>
            <FriendsProfileBtn app={app} />
          </div>
        </div>

      </div>

    </div>
 </div>
    );
};

export default FriendsDetailsUI;