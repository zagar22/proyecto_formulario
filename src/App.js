import React, { Component } from "react";
import Formulario from "./Componentes/Formulario";
import Usuario from "./Componentes/Usuario";
import avatarPNG from "../src/recursos/imagenes/Avatar.png";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import "./recursos/CSS/menu.css";
import Error from "./Componentes/Error";

export default class App extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  //hay metodos especificos del montando del componente
  componentDidMount() {
    this.BuscarDatos();
  }

  BuscarDatos = () => {
    const URL = "https://reqres.in/api/users";
    // promesa
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((usuariosJSON) => this.setState({ usuarios: usuariosJSON.data }));
  };

  InsertarUsuario = (firstName, lastName, eMail) => {
    const usuario = {
      first_name: firstName,
      last_name: lastName,
      email: eMail,
      avatar: avatarPNG,
    };

    //insertarDatos
    this.InsertarDatos(usuario);
  };

  InsertarDatos = (usuario) => {
    const URL = "https://reqres.in/api/users";
    const HEADER = {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: { "Content-Type": "application/json" },
    };

    fetch(URL, HEADER)
      .then((respuesta) => respuesta.json())
      .then((usuario) =>
        this.setState({ usuarios: [...this.state.usuarios, usuario] })
      );

    //buscarDatos

    //Insertar el elemento en el arreglo
  };

  // render

  render() {
    return (
      <div>
        <Router>
          <nav className="menu">
            <NavLink className="enlace" activeClassName="activo" to="/" exact>
              Inicio
            </NavLink>

            <NavLink className="enlace" activeClassName="activo" to="/formulario">
              Formulario
            </NavLink>

            <NavLink className="enlace" activeClassName="activo" to="usuarios">
              Usuarios
            </NavLink>
          </nav>

          <Switch>
            <Route path="/formulario">
              <Formulario FuncionInsertar={this.InsertarUsuario} />
            </Route>

            <Route path="/usuarios">
              {this.state.usuarios.map((usuario) => (
                <Usuario
                  key={usuario.id}
                  id={usuario.id}
                  first_name={usuario.first_name}
                  last_name={usuario.last_name}
                  email={usuario.email}
                  avatar={usuario.avatar}
                />
              ))}
            </Route>

            <Route path="/" exact>
              <Formulario FuncionInsertar={this.InsertarUsuario} />
              {this.state.usuarios.map((usuario) => (
                <Usuario
                  key={usuario.id}
                  id={usuario.id}
                  first_name={usuario.first_name}
                  last_name={usuario.last_name}
                  email={usuario.email}
                  avatar={usuario.avatar}
                />
              ))}
            </Route>
            <Route path="/*" >
                <Error/>

            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
