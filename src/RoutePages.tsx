import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage"));

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default RoutePages;
