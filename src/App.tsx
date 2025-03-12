import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}
