import Ads from "@/components/Ads/ads";
import Footer from "@/components/Footer/Footer";
import Homes from "@/components/Home/home";
import Navbar from "@/components/Navbar/navbar";
import Middile from "@/components/middileSection/Middile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homes />
      <Ads />
      <Middile />
      <Footer/>
    </div>
  );
}
