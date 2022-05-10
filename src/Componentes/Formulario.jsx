import React from "react";
import "../recursos/CSS/form.css";
import "../recursos/CSS/button.css";


export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    LimpiarValoresFormulario = () => {
        this.setState({
            first_name: "",
            last_name: "",
            email: ""
        })
    }

    AsignarValoresFormularios = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //enviar formulario 
    InsertarValoresFormulario = (e) => {
        e.preventDefault();
        console.log("enviando");

        //como insertamos el usuario en la api
        this.props.FuncionInsertar(
            this.state.first_name, 
            this.state.last_name, 
            this.state.email);

        //metodo
        this.LimpiarValoresFormulario();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.InsertarValoresFormulario}>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="Nombre"
                        required={true}
                        value={this.state.first_name}
                        onChange={this.AsignarValoresFormularios}
                    />

                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder="Apeliido"
                        required={true}
                        value={this.state.last_name}
                        onChange={this.AsignarValoresFormularios}
                    />

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo"
                        required={true}
                        value={this.state.email}
                        onChange={this.AsignarValoresFormularios}
                    />
                    <div>
                        <button type="submit" className="success" >Agregar Usuario</button>
                        <button type="reset" className="warning" onClick={this.LimpiarValoresFormulario}>Limpiar Formulario</button>
                    </div>

                </form>

            </div>
        )
    }


}