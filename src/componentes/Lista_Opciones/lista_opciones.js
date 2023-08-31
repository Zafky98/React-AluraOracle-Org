import "./lista_opciones.css";


    //Metodo map recorrer un arreglo de forma correcta -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })

const Lista_Opciones = (props) =>{

    const manejarEvento= (e) =>{
        props.actualizarEquipo(e.target.value)

    }
    return(
    <div className="lista-opciones">        
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarEvento}>
        {/* Truco para mostrar el tecto de seleccionar equipo y que no sea una opcion */}
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) =>  <option key={index} value={equipo}> {equipo} </option>)}        
        </select>

    </div>

    )
}

export default Lista_Opciones;