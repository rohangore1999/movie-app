import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Loadable";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
