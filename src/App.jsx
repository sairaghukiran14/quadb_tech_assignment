// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowListPage from "./Screens/ShowListPage";
import ShowSummaryPage from "./Screens/ShowSummaryPage";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowListPage />} />
        <Route path="/show/:id" element={<ShowSummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
