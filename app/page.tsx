import { Roboto } from "@next/font/google";
import data from "../data";
import Footer from "./Footer";
import Hero from "./Hero";
import LinkList from "./LinkList";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function Page() {
  return (
    <div className={`${inter.className}`}>
      <div className="max-w-2xl mx-auto my-10">
        {/* Hero section */}
        <Hero />

        <LinkList links={data.links} />

        <Footer />
      </div>
    </div>
  );
}

export default Page;
