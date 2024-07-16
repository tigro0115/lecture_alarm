import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import('./pages/Home'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes> 
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;
