import Colaborador from "../Colaborador/Colaborador";
import "./Equipos.css";
import hexToRgba from 'hex-to-rgba';

const Equipo= (props) =>{

    const { colorPrimario, colorSecundario, titulo, id} = props.datos;

    const { colaboradores, eliminar, actualizarColor, like } = props

    return <>{
        //Si el numero de caracteres es mayor a 0 mostrar
        colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.4)}}>
            <input 
                type="color"
                className="equipo-color"
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h4 style={{ borderColor: colorPrimario }}> { titulo } </h4>
            <div className="colaboradores">
                { colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminar={eliminar} like={like} />) }
            </div>
    </section>
    }</>
};


export default Equipo;