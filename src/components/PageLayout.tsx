import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function PageLayout() {
  return (
    <div>
      <Outlet />
      <header className="fixed top-0 left-0 w-[100%] shadow-sm">
        <NavBar />
      </header>
    </div>
  );
}
