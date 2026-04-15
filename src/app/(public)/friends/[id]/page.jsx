import FriendsDetailsUI from "@/components/FriendsDetailsUI/FriendsDetailsUI";

const appPromise = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    return res.json();
};


export async function generateMetadata({ params }) {
  const { id } = await params;
  const apps = await appPromise();
  const app = apps.find((app) => String(app.id) === id);

  if (!app) {
    return {
      title: `Not found - Profile Details`,
    };
  }

  return {
    title: `${app.name} -  Profile Details`,
    description: app.bio,
  };
}
const FriendsDetailsPage = async({params}) => {
    const {id} = await params;
    const apps = await appPromise();
    const app = apps.find(app => app.id === parseInt(id));

const getStatusStyle = (status) =>
  status === "overdue" ? "bg-red-100 text-red-600"
    : status === "on-track" ? "bg-yellow-100 text-yellow-600"
    : status === "almost due" ? "bg-green-100 text-green-600"
    : "bg-gray-100 text-gray-600";

    return (
       <div>
        <FriendsDetailsUI 
        app={app} 
        getStatusStyle={getStatusStyle} />
       </div>
    );
};

export default FriendsDetailsPage;