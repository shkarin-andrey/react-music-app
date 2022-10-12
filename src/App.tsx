import React from "react";
import Layout from "./components/layouts";
import { Routes, Route } from "react-router-dom";
import TopTracksPage from "./pages/TopTracksPage";

const App = () => {
  return (
    <Layout title={"Топ треков"}>
      <Routes>
        <Route path="/" element={<TopTracksPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
