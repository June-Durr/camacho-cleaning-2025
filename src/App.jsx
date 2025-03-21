import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Residential = lazy(() => import("./pages/Residential"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Services = lazy(() => import("./pages/Services"));
const Why = lazy(() => import("./pages/Why"));

// Loading component
const LoadingPage = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why" element={<Why />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
