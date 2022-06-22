import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ROUTES} from "./routes/constants";
import {Layout} from "./common/layout";
import Login from "./pages/login"
import {PrivateRoute} from "./routes/PrivateRoute";
import {PublicRoute} from "./routes/PublicRoute";


function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.main} element={<PrivateRoute/>}>
                    <Route path={ROUTES.main} element={<Layout/>}>
                        <Route path={ROUTES.main} element={<PublicRoute/>}>
                            <Route path={ROUTES.login} element={<Login/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
