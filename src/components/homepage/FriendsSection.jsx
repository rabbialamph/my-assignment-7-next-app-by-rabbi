import FriendsUICard from "../FriendsUI/FriendsUICard";

const appPromise = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    return res.json();
};
const FriendsSection = async () => {
     const apps = await appPromise();

    return (
        <div>
            <p className="font-semibold text-xl mb-2">Your Friends</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {
             apps.map((app) => <FriendsUICard app={app} key={app.id} />)
           }
         </div>
        </div>
    );
};

export default FriendsSection;