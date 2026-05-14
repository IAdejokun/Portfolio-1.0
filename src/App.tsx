import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/ScrollToTop";



const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-ink-tertiary text-sm font-mono">loading…</div>
    </div>
  );
}

// AnimatedRoutes lives inside BrowserRouter so it can read location.
// AnimatePresence with mode="wait" pauses the new route until the old one
// has finished its exit animation  - clean crossfades between pages.
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
