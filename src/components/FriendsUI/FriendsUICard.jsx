import Image from "next/image";
import Link from "next/link";

const FriendsUICard = ({ app }) => {

const getStatusStyle = (status) =>
  status === "overdue" ? "bg-red-100 text-red-600"
    : status === "on-track" ? "bg-yellow-100 text-yellow-600"
    : status === "almost due" ? "bg-green-100 text-green-600"
    : "bg-gray-100 text-gray-600";

    return (
        <Link href={`/friends/${app.id}`}>
            <div className="bg-white shadow-md cursor-pointer rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition">
        

            <Image
              src={app.picture}
              alt="user"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />

            <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {app.name}
            </h3>


            <p className="text-sm text-gray-400">
                {app.days_since_contact}d ago
            </p>


            <span className="mt-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
                {app.tags.join(", ")}
            </span>

              <span
                className={`mt-2 px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
                    app.status
                )}`}
              >
                {app.status.toUpperCase()}
            </span>

        </div>
        </Link>
    );
};

export default FriendsUICard;