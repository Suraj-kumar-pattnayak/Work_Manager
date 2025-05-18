import Image from "next/image";
import HomeBanner from '@/app/components/HomePage/HomeBanner'
import FeatureSection from "./components/HomePage/FeatureSection";
import ActionSection from "./components/HomePage/ActionSection";
export const metadata = {
  title: "Home : Work Manager",
};

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white min-h-screen pb-20">
      {/* Banneer Section */}
      <HomeBanner/>

      {/* feature seection */}
      <FeatureSection/>

      {/* Action Section */}
      <ActionSection/>
    </div>
  );
}
