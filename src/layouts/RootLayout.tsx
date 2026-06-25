import { Outlet } from "react-router-dom";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import FloatingContact from "@/components/common/FloatingContact";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <FloatingContact />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
