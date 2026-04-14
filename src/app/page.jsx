import Banner from "@/components/homepage/Banner";
import FriendsSection from "@/components/homepage/FriendsSection";
import StatsCard from "@/components/homepage/StatsCard";


export default function Home() {
  return (
    <div className="bg-base-200 p-5">
        <Banner />
        <StatsCard />
        <FriendsSection />
    </div>
  );
}
