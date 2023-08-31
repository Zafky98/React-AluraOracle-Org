import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Colaborador = (props) =>{

    const {nombre, puesto, foto, equipo, id, fav} = props.datos

    const { colorPrimario, eliminar, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminar(id)} className="eliminar" />
        <div className=" encabezado " style={{ backgroundColor:colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h5> {nombre} </h5>
            <h6> {puesto} </h6>
            { fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)} />}
            
            
        </div>
    </div>
};

export default Colaborador;