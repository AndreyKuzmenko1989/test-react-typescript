import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ROUTES} from "./routes/constants";
import {Layout} from "./common/layout";


function App() {
  return (
      <Router>
          <Routes>
              <Route path={ROUTES.main} element={<Layout/>}>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
