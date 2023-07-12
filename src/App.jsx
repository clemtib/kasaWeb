import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Housing from "./page/Housing";
import Footer from "./components/Footer";
import NotFoundPage from "./page/404Page";

import "./css/app.css";

function App() {
   // const [logements, setLogements] = useState([]);

   // function updateLogements(logementsData) {
   //    setLogements(logementsData);
   // }

   return (
      <>
         <Header />
         <main>
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
                  // element={<Home onUpdateLogements={updateLogements} />}
               />
               <Route
                  path="/housing/:id"
                  // element={<Housing logements={logements} />}
                  element={<Housing />}
               />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<NotFoundPage />} />
               <Route path="housing/*" redirectTo="*" />
            </Routes>
         </main>
         <Footer />
      </>
   );
}

export default App;
