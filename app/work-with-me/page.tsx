import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorkWithMe from "@/components/home/WorkWithMe";
import ServiceOffers from "@/components/services/ServiceOffers";

export default function WorkWithMePage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkWithMe />
        <ServiceOffers />
      </main>
      <Footer />
    </>
  );
}
