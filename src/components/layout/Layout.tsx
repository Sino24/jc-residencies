import { Outlet, useLocation } from "react-router-dom";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import StructuredData from "@/components/seo/StructuredData";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <StructuredData />
      <Navbar />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
