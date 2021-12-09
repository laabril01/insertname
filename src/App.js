import Index from "./Pages/Index";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Page10 from "./Pages/Page10";

import Plantilla from "./Layout/Plantilla";
import Plantilla2 from "./Layout/Plantilla2";
import PlantillaLogin from "./Layout/PlantillaLogin";
import PlantillaAdmin from "./Layout/PlantillaAdmin";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

import React from 'react'
import { useState } from 'react'
import { UserContext } from "./Context/user";
import { LoginContext } from "./Context/loginContex";


import {ApolloClient, ApolloProvider, createHttpLink , InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({uri:"http://localhost:3001/graphql"})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('TOKEN'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {

  const [GlobalData, setGlobalData] = useState([{nombre:'my first project',descripcion:'nada'}]);

  const [loginToken, setloginToken] = useState("initialState")

  const setToken = (token) =>{
    setloginToken(token)
    if(token){ localStorage.setItem("TOKEN", JSON.stringify(token))}
    /* else{localStorage.removeItem("TOKEN")}  */ // para hacer  me va servir logout

  }
  
  return (
  <div>
   <ApolloProvider client={client}>
    <LoginContext.Provider value ={{loginToken, setloginToken, setToken }} >
    <UserContext.Provider value={{GlobalData,setGlobalData }}>
      
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

          <Route path="/" element = {<PlantillaAdmin/>}>   {/*  este layout es solo accesible para los admin */}
          <Route path="Page3" element = {<Page3/>}/>
          <Route path="Page4" element = {<Page4/>}/>       {/* para admin esta pagina es para listar usuarios*/}
          <Route path="Page4/:_id" element = {<Page4/>}/>  {/* para admin esta pagina es rutas dinamicas para la edicion usuarios  */}
          </Route>
      
          <Route path="/" element = {<Plantilla2/>}>
          
          <Route path="Page5" element = {<Page5/>}/>        {/* para lideres o estudiantes  esta pagina es para listar proyectos ,  estudiantes se podran unir , lideres podran crear o editar*/} 
          <Route path="Page6/:_id" element = {<Page6/>}/>   {/* sera una ruta dinamica para editar un proyecto */}
          <Route path="Page7" element = {<Page7/>}/>        {/* para crear un proyecto */}
          <Route path="Page8" element = {<Page8/>}/>        {/* para Aceptar una inscripcion */}
          <Route path="Page9/:filtro" element = {<Page9/>}/>        {/* Dinamica para traer los proyectos de usuario y poder crear avances sobre estos*/}
          <Route path="Page10" element = {<Page10/>}/>   {/* sin uso actual */}
          </Route>

        </Routes>
      </Router>

      </UserContext.Provider>
      </LoginContext.Provider>
      </ApolloProvider>
  </div>
  );
}

export default App;
