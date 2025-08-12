import { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth();

  // ✅ Show full layout only if user is logged in
  if (!user) {
    return <>{children}</>; // Only render page content without Navbar/Sidebar/Footer
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed */}
      <Navbar onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="flex flex-1 pt-14"> {/* pt-14 = navbar height */}
        {/* Sidebar only when logged in */}
        <SideBar isOpen={isSidebarOpen} />

        {/* Main content area */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 
            ${isSidebarOpen ? "ml-64" : "ml-16"}`}
        >
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
