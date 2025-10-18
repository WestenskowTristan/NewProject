import PageContainer from "./components/common/PageContainer";
import { Routes, Route } from "react-router-dom";
import StarEffect from "./components/common/starEffect";
import Navigation from "./components/common/Navigation";
import { Suspense, lazy } from "react";

function App() {
  const HomePage = lazy(() => import("./pages/home"));
  const AboutPage = lazy(() => import("./pages/AboutMe"));
  const MyWork = lazy(() => import("./pages/Work"));
  const MyExperiance = lazy(() => import("./pages/Experiance"));
  const Contact = lazy(() => import("./pages/Contact"));

  return (
    <PageContainer>
      {/* <StarEffect /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<MyWork />} />
          <Route path="/experiance" element={<MyExperiance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </PageContainer>
  );
}

export default App;
