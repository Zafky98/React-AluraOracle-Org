import "./Campo.css"

// Props son datos externos que puedo enviar a mis componentes

const Campo = ( props ) => {

    const placeHolderModificado = `${ props.placeholder }...`
    const {type} = props
    
    const manejarEvento= (e) =>{
        props.actualizarValor(e.target.value);
    }

    return(
        <div className={`campo  campo-${type} `}>
            <label> { props.titulo } </label>
            <input placeholder={ placeHolderModificado } required={props.required} value={props.valor} onChange={manejarEvento} type={type}/>
        </div>
    )
};

export default Campo;