import Banner from "@/components/homepage/Banner";
import FriendsSection from "@/components/homepage/FriendsSection";
import StatsCard from "@/components/homepage/StatsCard";


export default function Home() {
  return (
    <div>
        <Banner />
        <StatsCard />
        <FriendsSection />
    </div>
  );
}
