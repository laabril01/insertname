import Index from "./Pages/Index";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";

import Plantilla from "./Layout/Plantilla";
import Plantilla2 from "./Layout/Plantilla2";
import PlantillaLogin from "./Layout/PlantillaLogin";
import PlantillaAdmin from "./Layout/PlantillaAdmin";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

import React from 'react'
import { useState,useEffect } from 'react'
import { UserContext } from "./Context/user";


import {ApolloClient, ApolloProvider, createHttpLink , InMemoryCache} from "@apollo/client";

/* const HttpLink = createHttpLink({uri:"http://localhost:3001/graphql"}) */

const client = new ApolloClient({
  uri:"http://localhost:3001/graphql",
  cache: new InMemoryCache()
})

function App() {

  const [GlobalData, setGlobalData] = useState([{nombre:'my first project',descripcion:'nada'}]);
  
  return (
  <div>
   <ApolloProvider client={client}>
    <UserContext.Provider value={{GlobalData,setGlobalData}}>
      
      <Router>
        <Routes> 
         
          <Route path="/" element = {<Plantilla/>}>
          <Route path="/" element = {<Index/>}/>
          </Route>

          <Route path="/" element = {<PlantillaLogin text="Modulo Gestión Usuarios LOG IN"/>}>
          <Route path="Page1" element = {<Page1/>}/>
          </Route>

          <Route path="/" element = {<PlantillaLogin text="Modulo Gestión Usuarios CHECK IN"/>}>
          <Route path="Page2" element = {<Page2/>}/>
          </Route>

          <Route path="/" element = {<PlantillaAdmin/>}>
          <Route path="Page3" element = {<Page3/>}/>
          <Route path="Page4/:_id" element = {<Page4/>}/> 
          </Route>
      
          <Route path="/" element = {<Plantilla2/>}>
          
          <Route path="Page5" element = {<Page5/>}/> 
          <Route path="Page6" element = {<Page6/>}/> 
          <Route path="Page7" element = {<Page7/>}/> 
          <Route path="Page8" element = {<Page8/>}/> 
          </Route>

        </Routes>
      </Router>

      </UserContext.Provider>
      </ApolloProvider>
  </div>
  );
}

export default App;
