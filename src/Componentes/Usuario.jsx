import React from "react";
import "../recursos/CSS/tarjeta.css";
import "../recursos/CSS/boton.css";

class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        id:this.props.id,
        email: this.props.email,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        avatar: this.props.avatar,
        name: this.props.first_name,
        mostrarPrimerNombre: true,
        
    }
  
}

CambiarNombre = ()=>{
  this.setState({
    name: this.state.mostrarPrimerNombre ? this.state.last_name : this.state.first_name,
    mostrarPrimerNombre: !this.state.mostrarPrimerNombre
  })
}

  render() {
    return (
      <div className="card">
        <div className="card-side front">
          <div>{this.state.email}</div>
          <img src={this.state.avatar} width="50px" height="50px" />
        </div>
        <div className="card-side back">
          <div>{this.state.name}</div>
          <br/><br/>
          <button className="button-swing" onClick={this.CambiarNombre}>Mostrar {this.state.mostrarPrimerNombre ? "Apellido" : "Nombre"}</button>
        </div>
      </div>
    );
  }
}

export default Usuario;
