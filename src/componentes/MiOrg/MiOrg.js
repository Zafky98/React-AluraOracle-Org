import "./MiOrg.css"

 //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    //const [mostrar, actualizarMostrar] = useState(true)


const MiOrg = ( props ) =>{
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.actualizarForm}/>
    </section>
}

export default MiOrg;