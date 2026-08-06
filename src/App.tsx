import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="">
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}
