import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function PageLayout() {
  return (
    <div className="relative bg-[#08090A] h-screen text-[#fafafa] overflow-auto px-3 pb-24">
      <Outlet />
      <header className="fixed md:top-4 bottom-4 shadow-sm left-1/2 transform -translate-x-1/2 h-fit rounded-full bg-red-400">
        <NavBar />
      </header>
    </div>
  );
}
