import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontrada from './pages/naoencontrada';
import Dashboard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';

import * as reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


const RotaPrivada = ({component : Component, ...rest}) =>{
  
  <Route
    {...rest}
    render={
      props => {
        localStorage.getItem('token-nyous') !== null ?
        <Component {...props} /> : 
        <Redirect to={{ pathname='login', state :{from : this.props.location}}}/>
      }
    }
  />
}

const routing = () => {
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/login' component={Login}/>
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/eventos' component={Eventos} />
        <Route path='/admin/dashboard' component={Dashboard} />
        <Route path='/admin/cadegorias' component={CrudCategorias} />
        <Route path='/admin/eventos' component={CrudEventos} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  </Router>

}

ReactDOM.render(
  <React.StrictMode>
    <Cadastrar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
