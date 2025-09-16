import PageContainer from "./components/common/PageContainer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import StarEffect from "./components/common/starEffect";
import Navigation from "./components/common/Navigation";

function App() {
  return (
    <PageContainer>
      {/* <StarEffect /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </PageContainer>
  );
}

export default App;
