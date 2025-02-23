import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function PageLayout() {
  return (
    <div className="relative bg-black h-screen text-[#fafafa] overflow-scroll px-3 pb-24">
      <Outlet />
      <header className="fixed bottom-4 shadow-sm left-1/2 transform -translate-x-1/2 rounded-full">
        <NavBar />
      </header>
    </div>
  );
}
