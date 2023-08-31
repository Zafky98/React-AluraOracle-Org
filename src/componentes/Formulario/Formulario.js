import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import Lista_Opciones from "../Lista_Opciones/lista_opciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");

    const [equipo, setEquipos] = useState("");

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("");


    const manejarEnvio= (e) => {
        e.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosEnviar)
    };

    const manejarNuevoEquipo = (e)=> {
        e.preventDefault();
        props.registrarNuevoEquipo({titulo, colorPrimario: color})

    }


    return <section className="formulario">
            <form onSubmit={ manejarEnvio }>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresa Nombre" required valor={nombre} actualizarValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresa Puesto" required valor={puesto} actualizarValor={setPuesto}  />
                <Campo titulo="Foto" placeholder="Ingresa enlace foto" required valor={foto} actualizarValor={setFoto}  />
                <Lista_Opciones valor={equipo} actualizarEquipo={setEquipos} equipos={props.equipos} />
                <Boton>Crear</Boton>

            </form>
            <form onSubmit={ manejarNuevoEquipo }>
                <h2>Rellena para crea un nuevo equipo.</h2>
                <Campo titulo="Titulo" placeholder="Ingresa Equipo" required valor={titulo} actualizarValor={setTitulo} />
                <Campo titulo="Color" placeholder="Ingresa color" required valor={color} actualizarValor={setColor} type="color"  />
                <Boton>Crear Equipo</Boton>
            </form>
    </section>;
};

export default Formulario;