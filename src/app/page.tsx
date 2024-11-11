import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import MainBanner from "@/components/MainBanner";
import LogoTicker from "@/components/LogoTicker";
import Feature from "@/components/Feature";
import { ProductShowcase } from "@/components/ProductShowcase";
import FAQs from "@/components/FAQs";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <div>
<Banner/>
<Navbar/>
<MainBanner/>
<LogoTicker/>
<Feature/>
<ProductShowcase/>
<FAQs/>
<CallToAction/>
<Footer/>

  </div>
  );
}
